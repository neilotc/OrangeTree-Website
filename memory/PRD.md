# OrangeTree Capital — Website PRD

## Original Problem Statement
Build and iteratively refine an editorial, credibility-first single-page marketing website for **OrangeTree Capital**, a family office investing across private companies, venture funds, and public markets. Target visitors: founders (primary), bankers, accelerator partners, fund GPs. Sections: Hero, What We Do, Our Approach to Direct Investments, Portfolio, Team, Pitch Us, Footer. Stack: React + Tailwind + Framer Motion frontend, FastAPI + MongoDB backend, object storage for deck uploads, Resend for email notifications.

## Brand
- Brand name: **OrangeTree Capital** (no space)
- Palette: warm off-white `#FAF8F5` (ivory), near-black `#121110` (charcoal), orange `#E85D04` (ochre), dark `#1A1816` (obsidian)
- Typography: Instrument Serif (display) + Plus Jakarta Sans (body)
- Contact: `pitch@orangetreecapital.co.in`
- Address: Regus - Mumbai, Block A, Level 1, Dr Annie Besant Rd, Shiv Sagar Estate, Worli, Mumbai, Maharashtra 400018
- Presence: Mumbai + Singapore

## Architecture
- Frontend: React JS + Tailwind CSS + Framer Motion + Lenis smooth scroll
- Backend: FastAPI, Python, Pydantic
- DB: MongoDB `pitch_submissions` collection
- Storage: Emergent object storage (deck PDFs)
- Email: Emergent-managed Resend (founder auto-reply + team notification to `pitch@orangetreecapital.co.in`)
- CAPTCHA: Cloudflare Turnstile (test keys in preview; production keys needed before go-live)

## Key Files
- `/app/frontend/src/data/content.js` — single source of truth for all site copy, portfolio, team, footer
- `/app/frontend/src/components/site/Edge.jsx` — Approach section with flip cards
- `/app/frontend/src/components/site/PitchForm.jsx` — founder-contact message and email link (no public submission form)
- `/app/backend/server.py` — FastAPI pitch API, email, storage, CAPTCHA validation

## Implemented
- Animated logo-intro / loading sequence
- Hero with kinetic line-by-line reveal
- What We Do: 3 investment pillars
- Approach (Edge): 4 interactive flip cards (3 grid + 1 wide band)
  - Each card flips on click to reveal detailed back-face content (obsidian dark bg)
  - Front: short tagline; Back: full detail paragraph
  - Grid cards use a horizontal fold; the “How We Help” band uses a vertical fold
- Portfolio: tabbed grid (Direct / Fund / Exits) with real logos
  - 14 supplied direct-investment and fund cards link to their respective websites in a new tab
  - Exit cards remain non-linked until a destination is supplied
  - Dr. Sheth’s and Coupang display an “(Exited)” status beside their names
- Team: 4 member cards with real photos and LinkedIn links
- Pitch Us: displays the “Pitch Us” heading, founder-contact message, and “Email us at pitch@orangetreecapital.co.in” mail link
  - The former public PDF-submission form is removed from the page
  - Existing backend pitch submission infrastructure remains available but is no longer exposed in the public UI
- Footer: Mumbai address, Mumbai/Singapore presence, correct email, LinkedIn link
- Brand naming corrected to "OrangeTree Capital" throughout codebase

## Pending / Backlog
### P0
- Verify the Hero / marquee first-viewport positioning across desktop, tablet, and mobile

### P1
- Replace Cloudflare Turnstile test keys with real production keys before go-live
- Deploy / reconfigure DNS for orangetreecapital.co.in when user is ready

### P2
- Add favicon + Open Graph social share image using `logo-mark.png`
- Full mobile / cross-browser QA sweep
- Lightweight pitch admin/browse view (optional, out of scope for v1)
- SEO meta tags + sitemap

## Completed Feature Log
| Date | Feature |
|------|---------|
| Session 1 | Initial site build: Hero, WhatWeDo, Portfolio, Team, PitchUs, Footer |
| Session 1 | PDF upload + object storage + Resend email integration |
| Session 1 | Cloudflare Turnstile CAPTCHA |
| Session 1 | Real team photos, portfolio logos, LinkedIn links |
| Session 1 | Footer: real Mumbai address, Singapore presence, correct email |
| Session 1 | Brand name corrected to "OrangeTree Capital" everywhere |
| Session 2 | Approach section: 4 flip cards with scaleX animation + back-face detail content |
| 2026-10-05 | Updated the “How We Help” approach band to use a vertical fold; verified on desktop and mobile previews |
| 2026-10-05 | Added verified external website links to 14 supplied portfolio cards; cards open in a new tab |
| 2026-10-05 | Simplified the public Pitch Us section to the requested founder-contact message; removed form and email prompt |
| 2026-10-05 | Restored the Pitch Us heading and email contact link while keeping the public submission form removed |
| 2026-10-05 | Updated the Pitch Us mail-link wording to “Email us at pitch@orangetreecapital.co.in” |
| 2026-10-06 | Added “(Exited)” status labels to Dr. Sheth’s and Coupang portfolio cards |
