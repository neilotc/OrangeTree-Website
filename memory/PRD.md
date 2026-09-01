# Orange Tree Capital — Website Revamp (PRD)

## Original Problem Statement
Rebuild orangetreecapital.co.in as a tight, credibility-forward single-page marketing site for an operator-led family office investing in tech (deeptech, enterprise tech, adjacent) via direct startup bets, venture fund LP positions, and public markets. Target visitors: founders (primary), bankers, accelerator partners, GPs. 7 sections: Hero, What We Do, Portfolio, Team, Edge/Why Pitch Us, Pitch Us form (with PDF deck upload ≤20MB), Footer. Editorial Sequoia/Accel feel, orange accent (#E85D04) over warm neutrals, mobile-first, award-worthy motion.

## User Decisions
- Positioning: India-first with global optionality — "Operator-led family office backing technology founders. India first, global when it matters."
- Portfolio/team/exits: realistic PLACEHOLDER content in one swappable file (`/app/frontend/src/data/content.js`) — user will replace with real names/logos/photos.
- Email: Emergent-managed Resend (no user key needed) — auto-reply to founder + internal notification.
- Deck upload: full object storage integration (Emergent object storage), deck download link in team notification.

## Architecture
- Frontend: React (JS) + Tailwind + Framer Motion + Lenis smooth scroll. Components in `/app/frontend/src/components/site/`.
- Backend: FastAPI `/api/pitch` (multipart form), `/api/pitch/{id}/deck` (download), `/api/health`.
- DB: MongoDB `pitch_submissions` collection (metadata + deck storage path).
- Storage: Emergent object storage, paths `orangetreecapital/decks/{uuid}.pdf`.
- Email: Emergent email proxy (Resend), `EMAIL_FROM_NAME="Orange Tree Capital"`.

## Implemented (Sept 1, 2026)
- Kinetic hero with masked line-by-line reveal, ambient particle canvas with mouse parallax, orange glow
- Slow editorial marquee band
- Numbered manifesto chapters (01–05) across sections
- What We Do: 3 numbered pillars
- Portfolio: tabbed grid (All / Direct / Fund LP / Exits) with hover sub-sector reveal + disclaimer
- Team: 4 members, grayscale-to-color photo hover, LinkedIn links
- Edge: dark 2x2 bento tiles (Operator DNA, Cross-Border Reach, Speed & Follow-On, Accelerator + GP Network)
- Pitch Us: full form with client + server validation (PDF only, ≤20MB), object storage upload, Mongo record, founder auto-reply + team notification emails with deck download link
- Dark footer with kinetic wordmark, address, email, LinkedIn, locations

## Pending Manual Steps
- **TEAM_EMAIL in `/app/backend/.env` is set to `delivered@resend.dev` (test sink)** — replace with the real team inbox for production notifications.
- Replace placeholder portfolio/team content in `/app/frontend/src/data/content.js` with real data.
- DNS redeploy to orangetreecapital.co.in at launch.

## Backlog
- P1: Lightweight admin view to browse pitch submissions (open question from brief)
- P1: Real logo assets for portfolio companies/funds (currently monogram tiles)
- P2: Lighthouse performance audit pass (target 95+)
- P2: Compliance disclaimers (deferred per brief)
- P2: SEO meta/OG tags, favicon, sitemap
