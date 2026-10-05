// ─────────────────────────────────────────────────────────────
// ORANGE TREE CAPITAL — SITE CONTENT
// PLACEHOLDER CONTENT: swap in real names, logos, photos, and
// links here. Everything on the site reads from this one file.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Approach", href: "#edge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
];

export const HERO = {
  lines: [
    "Different experiences.",
    "Diverse perspectives.",
    "Shaping our approach",
    "to investing.",
  ],
  subline:
    "OrangeTree Capital is a family office investing across multiple asset classes, spanning private companies, funds, and public markets, with a presence in India and Singapore.",
  cta: "Pitch to us",
};

export const MARQUEE_ITEMS = [
  "Technology-led",
  "Multi-Asset",
  "Family Office",
  "Early-Stage Focus",
  "Long-Term Conviction",
  "Follow-on Capital",
  "Founder-Aligned",
  "Operator Mindset",
  "Global Perspective",
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
      "LP commitments to funds that extend our reach into networks, investment stages, and geographies beyond our direct book.",
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
  { name: "Leegality", type: "direct", sector: "LegalTech", geography: "India", logo: "/portfolio/leegality.png", website: "https://www.leegality.com/" },
  { name: "Chargeup", type: "direct", sector: "EV", geography: "India", logo: "/portfolio/chargeup.png", website: "https://echargeup.com/" },
  { name: "Trukky", type: "direct", sector: "Logistics", geography: "India", logo: "/portfolio/trukky.png", website: "https://www.trukky.com/" },
  { name: "enParadigm", type: "direct", sector: "HR Tech", geography: "India", logo: "/portfolio/enparadigm.png", website: "https://www.enparadigm.com/" },
  { name: "MiClient", type: "direct", sector: "Enterprise", geography: "India", logo: "/portfolio/miclient.png", website: "https://www.miclient.ai/" },
  { name: "TakeMe2Space", type: "direct", sector: "Spacetech", geography: "India", logo: "/portfolio/takeme2space.png", website: "https://www.tm2.space/" },
  { name: "NervGen Pharma", type: "direct", sector: "Pharma", geography: "Canada", logo: "/portfolio/nervgen.png", website: "https://nervgen.com/" },
  { name: "Motion Gestures", type: "direct", sector: "Consumer Tech", geography: "Canada", logo: "/portfolio/motion-gestures.png", website: "https://www.motiongestures.com/" },
  { name: "Zerowatt", type: "direct", sector: "CleanTech", geography: "India", logo: "/portfolio/zerowatt.png", website: "https://zerowatt.co.in/" },
  { name: "Reflection AI", type: "direct", sector: "AI", geography: "US", logo: "/portfolio/reflection.png", website: "https://reflection.ai/" },
  { name: "Greenoaks Lindenwood", type: "fund", sector: "Tech Focused", geography: "US", logo: "/portfolio/greenoaks.png", website: "https://greenoaks.com/" },
  { name: "Iron Pillar", type: "fund", sector: "Tech Focused", geography: "India / US", logo: "/portfolio/iron-pillar.png", website: "https://www.ironpillarfund.com/" },
  { name: "HealthX", type: "fund", sector: "Healthtech", geography: "Singapore", logo: "/portfolio/healthx.png", website: "https://www.healthxcapital.com/" },
  { name: "SBC Fintech", type: "fund", sector: "Fintech", geography: "Australia", logo: "/portfolio/sbc-fintech.png", website: "https://startupbootcamp.org/" },
  { name: "Dr. Sheth's", type: "exit", sector: "Beauty and Personal Care", geography: "India", logo: "/portfolio/dr-sheths.png" },
  { name: "Coupang", type: "exit", sector: "E-Commerce", geography: "South Korea", logo: "/portfolio/coupang.png" },
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

export const APPROACH = {
  cards: [
    {
      number: "01",
      title: "What We Look For",
      statement: "Technology-led. Problem-first. Built for scale.",
      detail:
        "We have a strong preference for enterprise technology, deep tech and B2B businesses, while remaining open to opportunities beyond these areas. Our focus is on businesses addressing meaningful problems in large and growing markets.",
    },
    {
      number: "02",
      title: "How We Invest",
      statement: "Fast decisions. Capital to follow.",
      detail:
        "Our sweet spot is Seed to Series A, where we can build conviction early and partner closely with founders. With a lean decision-making structure and dedicated capital for follow-on investments, we can move quickly and back winners as they scale.",
    },
    {
      number: "03",
      title: "How We Think",
      statement: "Flexible capital, without a fixed fund horizon.",
      detail:
        "As a family office, our capital is not bound by the constraints of a traditional fund lifecycle or predetermined exit timelines. This gives us the flexibility to structure investments thoughtfully and stay invested for the long term — allowing the business, rather than the fund cycle, to dictate the pace.",
    },
  ],
  band: {
    title: "How We Help",
    statement: "Connections that go beyond capital.",
    detail:
      "Our network of business leaders, customers, investors and industry experts helps us create value for our portfolio companies. We help founders connect with potential customers, industry leaders, strategic stakeholders and investors — at the right stage, and at the right time.",
  },
};

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
  address: "Regus - Mumbai, Block A, Level 1, Dr Annie Besant Rd, Shiv Sagar Estate, Worli, Mumbai, Maharashtra 400018",
  email: "pitch@orangetreecapital.co.in",
  linkedin: "https://in.linkedin.com/company/orangetreecapital",
  locations: ["Mumbai", "Singapore"],
  copyright: `© ${new Date().getFullYear()} OrangeTree Capital. All rights reserved.`,
};
