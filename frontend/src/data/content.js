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
      "Backing technology-led businesses with category-defining potential.",
  },
  {
    number: "02",
    title: "Fund Investments",
    badge: "LP Positions",
    description:
      "LP commitments to funds that extend our reach into networks, stages, and geographies beyond our direct book.",
  },
  {
    number: "03",
    title: "Public Markets",
    badge: "Multi-Asset Capital",
    description:
      "Partnering with leading institutions to access public markets across asset classes and geographies.",
  },
];

// type: "direct" | "fund" | "exit"
export const PORTFOLIO = [
  { name: "Leegality", type: "direct", sector: "LegalTech", geography: "India", logo: "/portfolio/leegality.png" },
  { name: "Chargeup", type: "direct", sector: "EV", geography: "India", logo: "/portfolio/chargeup.png" },
  { name: "Trukky", type: "direct", sector: "Logistics", geography: "India", logo: "/portfolio/trukky.png" },
  { name: "enParadigm", type: "direct", sector: "HR Tech", geography: "India", logo: "/portfolio/enparadigm.png" },
  { name: "MiClient", type: "direct", sector: "Enterprise", geography: "India", logo: "/portfolio/miclient.png" },
  { name: "TakeMe2Space", type: "direct", sector: "Spacetech", geography: "India", logo: "/portfolio/takeme2space.png" },
  { name: "NervGen Pharma", type: "direct", sector: "Pharma", geography: "Canada", logo: "/portfolio/nervgen.png" },
  { name: "Motion Gestures", type: "direct", sector: "Consumer Tech", geography: "Canada", logo: "/portfolio/motion-gestures.png" },
  { name: "Zerowatt", type: "direct", sector: "CleanTech", geography: "India", logo: "/portfolio/zerowatt.png" },
  { name: "Reflection AI", type: "direct", sector: "AI", geography: "USA", logo: "/portfolio/reflection.png" },
  { name: "Greenoaks Lindenwood", type: "fund", sector: "Tech Focused", geography: "USA", logo: "/portfolio/greenoaks.png" },
  { name: "Iron Pillar", type: "fund", sector: "Agnostic", geography: "India / US", logo: "/portfolio/iron-pillar.png" },
  { name: "HealthX", type: "fund", sector: "Healthcare", geography: "Singapore", logo: "/portfolio/healthx.png" },
  { name: "SBC Fintech", type: "fund", sector: "Fintech", geography: "Australia", logo: "/portfolio/sbc-fintech.png" },
  { name: "PayStream", type: "exit", sector: "Payments / FinTech", geography: "India" },
  { name: "CloudKite", type: "exit", sector: "Enterprise SaaS", geography: "US / India" },
];

export const PORTFOLIO_DISCLAIMER =
  "Portfolio shown is illustrative of select direct investments, fund positions, and realized exits. It is not a complete list, and nothing on this site constitutes investment advice or an offer of securities.";

export const TEAM = [
  {
    name: "Neil Mehta",
    role: "Managing Partner",
    sub: "Private Markets",
    image: "/team/neil.jpg",
    linkedin: "https://www.linkedin.com/in/neil-mehta-92bb712/",
  },
  {
    name: "Reema Mehta",
    role: "Managing Partner",
    sub: "Public Markets",
    image: "/team/reema.jpg",
    linkedin: "https://www.linkedin.com/in/reema-mehta-467977332/",
  },
  {
    name: "Yashraj Shetty",
    role: "Investment Associate",
    image: "/team/yashraj.jpg",
    linkedin: "https://www.linkedin.com/in/yashraj-shetty-3bab97b8/",
  },
  {
    name: "Raj Soni",
    role: "Investment Analyst",
    image: "/team/raj.jpg",
    linkedin: "https://www.linkedin.com/in/-raj-soni-/",
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
