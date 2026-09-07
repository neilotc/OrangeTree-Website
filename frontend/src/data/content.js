// ─────────────────────────────────────────────────────────────
// ORANGE TREE CAPITAL — SITE CONTENT
// PLACEHOLDER CONTENT: swap in real names, logos, photos, and
// links here. Everything on the site reads from this one file.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#edge" },
];

export const HERO = {
  lines: [
    "Different experiences.",
    "Diverse perspectives.",
    "Shaping our approach",
    "to investing.",
  ],
  subline:
    "Backing startups, venture funds, and public markets with cross-border reach across India, Southeast Asia, and the US.",
  cta: "Pitch to us",
};

export const MARQUEE_ITEMS = [
  "India First",
  "DeepTech",
  "Enterprise Tech",
  "Patient Capital",
  "Follow-On Muscle",
  "Founder-Aligned",
];

export const PILLARS = [
  {
    number: "01",
    title: "Direct Investments",
    badge: "Seed to Series A",
    description:
      "High-conviction early and growth cheques into technology founders building out of India for global markets. Sector lean: deeptech and enterprise tech — open to adjacent tech.",
  },
  {
    number: "02",
    title: "Fund Investments",
    badge: "LP Positions",
    description:
      "LP commitments to specialist venture funds and emerging GPs we know and trust — extending our reach into networks, stages, and geographies beyond our direct book.",
  },
  {
    number: "03",
    title: "Public Markets",
    badge: "Multi-Asset Capital",
    description:
      "Long-duration capital deployed into publicly traded technology compounders — patient, concentrated, and aligned with how we underwrite private companies.",
  },
];

// type: "direct" | "fund" | "exit"
export const PORTFOLIO = [
  { name: "LexBridge", type: "direct", sector: "LegalTech", geography: "India" },
  { name: "VaultPay", type: "direct", sector: "FinTech", geography: "India / SEA" },
  { name: "OrbitAxis", type: "direct", sector: "SpaceTech", geography: "India" },
  { name: "MediSync AI", type: "direct", sector: "HealthTech", geography: "India / US" },
  { name: "NeuralForge", type: "direct", sector: "Enterprise AI", geography: "India / US" },
  { name: "FreightGrid", type: "direct", sector: "Supply Chain", geography: "India / SEA" },
  { name: "ChargeMesh", type: "direct", sector: "EV Infrastructure", geography: "India" },
  { name: "DevStack Labs", type: "direct", sector: "DevTools", geography: "US / India" },
  { name: "NorthPeak Ventures", type: "fund", sector: "Seed VC", geography: "India" },
  { name: "Meridian Seed Fund", type: "fund", sector: "Early Stage", geography: "India / SEA" },
  { name: "Catalyst Micro VC", type: "fund", sector: "DeepTech Focus", geography: "US / India" },
  { name: "PayStream", type: "exit", sector: "Payments / FinTech", geography: "India" },
  { name: "CloudKite", type: "exit", sector: "Enterprise SaaS", geography: "US / India" },
];

export const PORTFOLIO_DISCLAIMER =
  "Portfolio shown is illustrative of select direct investments, fund positions, and realized exits. It is not a complete list, and nothing on this site constitutes investment advice or an offer of securities.";

export const TEAM = [
  {
    name: "Neil Mehta",
    role: "Managing Partner (Private Markets)",
    image:
      "https://images.unsplash.com/photo-1641260783083-a0af6cf964ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBmb3VuZGVyJTIwdmVudHVyZSUyMGNhcGl0YWwlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZSUyMGJ1c2luZXNzbWFuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHx8fDE3ODgyNTk1MDJ8MA&ixlib=rb-4.1.0&q=85",
    linkedin: "https://www.linkedin.com/in/neil-mehta-92bb712/",
  },
  {
    name: "Reema Mehta",
    role: "Managing Partner (Public Markets)",
    image:
      "https://images.unsplash.com/photo-1758598306845-8630d064a244?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBmb3VuZGVyJTIwdmVudHVyZSUyMGNhcGl0YWwlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZSUyMGJ1c2luZXNzbWFuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHx8fDE3ODgyNTk1MDJ8MA&ixlib=rb-4.1.0&q=85",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Yashraj Shetty",
    role: "Investment Associate",
    image:
      "https://images.unsplash.com/photo-1767175473698-859bc73e8e64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwcGFydG5lciUyMGZvdW5kZXIlMjBleGVjdXRpdmUlMjBwb3J0cmFpdCUyMG1hbGUlMjBzdHVkaW98ZW58MHx8fHwxNzg4MjU5NTA5fDA&ixlib=rb-4.1.0&q=85",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Raj Soni",
    role: "Investment Analyst",
    image:
      "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBmb3VuZGVyJTIwdmVudHVyZSUyMGNhcGl0YWwlMjBwb3J0cmFpdCUyMGV4ZWN1dGl2ZSUyMGJ1c2luZXNzbWFuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHx8fDE3ODgyNTk1MDJ8MA&ixlib=rb-4.1.0&q=85",
    linkedin: "https://www.linkedin.com/",
  },
];

export const EDGE_TILES = [
  {
    icon: "Users",
    title: "Operator DNA",
    description:
      "We have built and scaled companies ourselves. Real operating muscle on pricing, engineering, and talent — not passive capital.",
  },
  {
    icon: "Globe",
    title: "Cross-Border Reach",
    description:
      "A working bridge between India's technical talent, US enterprise buyers, and Southeast Asian market access.",
  },
  {
    icon: "Zap",
    title: "Speed & Follow-On",
    description:
      "Decisions in days, not months. We reserve capital to back our founders again in the next round.",
  },
  {
    icon: "Network",
    title: "Accelerator + GP Network",
    description:
      "Deep ties with leading accelerators, micro-VCs, and later-stage funds — warm paths to your next round.",
  },
];

export const PITCH_META = {
  title: "Pitch Us",
  promise: "Every deck is read by a partner. We respond within 48 hours.",
  sectors: [
    "DeepTech",
    "Enterprise AI / SaaS",
    "FinTech",
    "HealthTech",
    "SpaceTech",
    "EV / Climate Tech",
    "LegalTech",
    "DevTools",
    "Other Tech",
  ],
  stages: ["Pre-Seed", "Seed", "Series A", "Series B+"],
};

export const FOOTER = {
  address: "Level 8, Prestige Towers, MG Road, Bengaluru 560001, India",
  email: "pitch@orangetreecapital.co.in",
  linkedin: "https://www.linkedin.com/",
  locations: ["Bengaluru", "Singapore", "San Francisco"],
  copyright: `© ${new Date().getFullYear()} Orange Tree Capital. All rights reserved.`,
};
