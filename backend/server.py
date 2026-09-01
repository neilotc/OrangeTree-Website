from fastapi import FastAPI, APIRouter, UploadFile, File, Form, HTTPException, Request
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import uuid
import logging
import ipaddress
from pathlib import Path
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from datetime import datetime, timezone
import httpx
import requests

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

# ---------- Emergent managed email (Resend proxy) ----------
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
TEAM_EMAIL = os.environ.get("TEAM_EMAIL", "delivered@resend.dev")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as http:
            resp = await http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except Exception as e:
        logger.error(f"Email send error: {e}")
        return None


# ---------- Object storage ----------
STORAGE_BASE = (os.environ.get("INTEGRATION_PROXY_URL") or "").strip() or "https://integrations.emergentagent.com"
STORAGE_URL = STORAGE_BASE.rstrip("/") + "/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "orangetreecapital"
storage_key = None


def init_storage(force: bool = False):
    global storage_key
    if storage_key and not force:
        return storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()["storage_key"]
    return storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    key = init_storage()
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data, timeout=120,
    )
    resp.raise_for_status()
    return resp.json()


def get_object(path: str) -> tuple[bytes, str]:
    key = init_storage()
    resp = requests.get(f"{STORAGE_URL}/objects/{path}", headers={"X-Storage-Key": key}, timeout=60)
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")


@app.on_event("startup")
async def startup():
    try:
        init_storage()
        logger.info("Object storage initialized")
    except Exception as e:
        logger.error(f"Storage init failed: {e}")


# ---------- Routes ----------
MAX_DECK_BYTES = 20 * 1024 * 1024


@api_router.get("/")
async def root():
    return {"message": "Orange Tree Capital API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/pitch")
async def submit_pitch(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    company: str = Form(...),
    website: str = Form(""),
    sector: str = Form(...),
    stage: str = Form(...),
    one_liner: str = Form(...),
    deck: UploadFile = File(...),
):
    name, company = name.strip(), company.strip()
    if not name or not company or not one_liner.strip():
        raise HTTPException(status_code=400, detail="Missing required fields")

    filename = deck.filename or "deck.pdf"
    if not filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Deck must be a PDF file")
    data = await deck.read()
    if len(data) == 0:
        raise HTTPException(status_code=400, detail="Deck file is empty")
    if len(data) > MAX_DECK_BYTES:
        raise HTTPException(status_code=400, detail="Deck exceeds the 20 MB limit")

    pitch_id = str(uuid.uuid4())
    storage_path = f"{APP_NAME}/decks/{pitch_id}.pdf"
    try:
        result = put_object(storage_path, data, "application/pdf")
        storage_path = result["path"]
    except Exception as e:
        logger.error(f"Deck upload failed: {e}")
        raise HTTPException(status_code=502, detail="Could not store the deck, please try again")

    doc = {
        "id": pitch_id,
        "name": name,
        "email": email.strip().lower(),
        "company": company,
        "website": website.strip(),
        "sector": sector,
        "stage": stage,
        "one_liner": one_liner.strip(),
        "deck_path": storage_path,
        "deck_filename": filename,
        "deck_size": len(data),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.pitch_submissions.insert_one(doc)

    base = (os.environ.get("SITE_URL") or str(request.base_url)).rstrip("/")
    if base.startswith("http://"):
        base = "https://" + base[len("http://"):]
    deck_url = f"{base}/api/pitch/{pitch_id}/deck"

    founder_html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif;color:#1A1816">'
        f'<p>Hi {escape(name)},</p>'
        f'<p>Thank you for pitching <strong>{escape(company)}</strong> to Orange Tree Capital. '
        'Your deck and details have landed with our investment team.</p>'
        '<p>We review every submission and respond within <strong>48 hours</strong>.</p>'
        '<p style="font-size:12px;color:#888">Sent by Orange Tree Capital — operator-led family office, India first, '
        'with reach across SEA and the US.</p></td></tr></table>'
    )
    team_html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif;color:#1A1816">'
        f'<p><strong>New pitch: {escape(company)}</strong></p>'
        f'<p>Founder: {escape(name)} ({escape(email)})<br/>'
        f'Website: {escape(website) or "—"}<br/>'
        f'Sector: {escape(sector)} · Stage: {escape(stage)}</p>'
        f'<p>{escape(one_liner)}</p>'
        f'<p><a href="{deck_url}">Download pitch deck ({escape(filename)})</a></p>'
        '<p style="font-size:12px;color:#888">Orange Tree Capital — pitch notification</p></td></tr></table>'
    )

    await send_email(to=doc["email"], subject=f"We received your pitch — {company}", html=founder_html, reply_to=TEAM_EMAIL)
    await send_email(to=TEAM_EMAIL, subject=f"New pitch: {company} ({sector}, {stage})", html=team_html, reply_to=doc["email"])

    return {"status": "success", "id": pitch_id}


@api_router.get("/pitch/{pitch_id}/deck")
async def download_deck(pitch_id: str):
    record = await db.pitch_submissions.find_one({"id": pitch_id}, {"_id": 0})
    if not record:
        raise HTTPException(status_code=404, detail="Pitch not found")
    try:
        data, content_type = get_object(record["deck_path"])
    except Exception:
        raise HTTPException(status_code=404, detail="Deck file not found")
    return Response(
        content=data,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{record["deck_filename"]}"'},
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
