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
  { name: "Leegality", type: "direct", sector: "LegalTech", geography: "India", logo: "/portfolio/leegality.png", website: "https://www.leegality.com/", logoBig: true, description: "A digital documentation platform simplifying eSignatures, eStamping and paperless workflows for businesses." },
  { name: "Chargeup", type: "direct", sector: "EV", geography: "India", logo: "/portfolio/chargeup.png", website: "https://echargeup.com/", description: "An integrated EV platform combining financing, technology and asset management to improve electric vehicle adoption and uptime." },
  { name: "Trukky", type: "direct", sector: "Logistics", geography: "India", logo: "/portfolio/trukky.png", website: "https://www.trukky.com/", description: "A technology-enabled trucking logistics platform simplifying goods transportation through online truck booking, transparent pricing and real-time tracking." },
  { name: "enParadigm", type: "direct", sector: "HR Tech", geography: "India", logo: "/portfolio/enparadigm.png", website: "https://www.enparadigm.com/", description: "An AI-powered experiential learning platform helping businesses develop talent through immersive, real-world simulations." },
  { name: "MiClient", type: "direct", sector: "Enterprise", geography: "India", logo: "/portfolio/miclient.png", website: "https://www.miclient.ai/", description: "An AI-powered revenue platform helping industrial businesses automate sales workflows, quotations and deal management." },
  { name: "TakeMe2Space", type: "direct", sector: "Spacetech", geography: "India", logo: "/portfolio/takeme2space.png", website: "https://www.tm2.space/", description: "A space technology company building orbital data centres to process satellite data directly in space." },
  { name: "NervGen Pharma", type: "direct", sector: "Pharma", geography: "Canada", logo: "/portfolio/nervgen.png", website: "https://nervgen.com/", description: "A biotechnology company developing innovative therapeutics aimed at repairing nervous system damage and improving functional recovery." },
  { name: "Motion Gestures", type: "direct", sector: "Consumer Tech", geography: "Canada", logo: "/portfolio/motion-gestures.png", website: "https://www.motiongestures.com/", logoBig: true, description: "A software company developing AI-powered hand tracking and gesture recognition technology for touchless human-machine interaction." },
  { name: "Zerowatt", type: "direct", sector: "CleanTech", geography: "India", logo: "/portfolio/zerowatt.png", website: "https://zerowatt.co.in/", description: "An AI-powered energy intelligence platform helping industrial facilities optimise energy consumption, equipment performance and operational efficiency." },
  { name: "Reflection AI", type: "direct", sector: "AI", geography: "US", logo: "/portfolio/reflection.png", website: "https://reflection.ai/", description: "An AI company developing open-weight, open source AI models and software that give organisations greater control over AI deployment and customisation." },
  { name: "Greenoaks Lindenwood", type: "fund", sector: "Tech Focused", geography: "US", logo: "/portfolio/greenoaks.png", website: "https://greenoaks.com/" },
  { name: "Iron Pillar", type: "fund", sector: "Tech Focused", geography: "India / US", logo: "/portfolio/iron-pillar.png", website: "https://www.ironpillarfund.com/", logoBig: true },
  { name: "HealthX", type: "fund", sector: "Healthtech", geography: "Singapore", logo: "/portfolio/healthx.png", website: "https://www.healthxcapital.com/" },
  { name: "SBC Fintech", type: "fund", sector: "Fintech", geography: "Australia", logo: "/portfolio/sbc-fintech.png", website: "https://startupbootcamp.org/" },
  { name: "Dr. Sheth's", type: "exit", status: "Exited", sector: "Beauty and Personal Care", geography: "India", logo: "/portfolio/dr-sheths.png", description: "A dermatologist-formulated skincare brand acquired by Honasa Consumer, the parent company of Mamaearth, in 2022." },
  { name: "Coupang", type: "exit", status: "Exited", sector: "E-Commerce", geography: "South Korea", logo: "/portfolio/coupang.png", description: "A leading South Korean e-commerce and technology company that went public on the NYSE in 2021 (NYSE: CPNG)." },
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
