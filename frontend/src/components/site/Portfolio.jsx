import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Globe } from "lucide-react";
import { Reveal, ChapterHeader, EASE } from "./Reveal";
import { PORTFOLIO, PORTFOLIO_DISCLAIMER } from "@/data/content";

const TABS = [
  { key: "all", label: "All" },
  { key: "direct", label: "Direct Investments" },
  { key: "fund", label: "Fund Investments" },
  { key: "exit", label: "Exits" },
];

const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");

/* Shared fold hook — same speed/easing as the Approach cards (Edge.jsx) */
const useFlip = () => {
  const [showBack, setShowBack] = useState(false);
  const [busy, setBusy] = useState(false);
  const controls = useAnimation();

  const flip = async () => {
    if (busy) return;
    setBusy(true);
    await controls.start({
      scaleX: 0,
      transition: { duration: 0.17, ease: [0.4, 0, 1, 1] },
    });
    setShowBack((p) => !p);
    await new Promise((r) => requestAnimationFrame(r));
    await controls.start({
      scaleX: 1,
      transition: { duration: 0.17, ease: [0, 0, 0.6, 1] },
    });
    setBusy(false);
  };

  return { showBack, controls, flip };
};

const WebsiteIcon = ({ p, tone = "light" }) => (
  <a
    href={p.website}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    aria-label={`Visit ${p.name} website`}
    data-testid={`portfolio-website-${slugify(p.name)}`}
    className={`absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-300 ${
      tone === "dark"
        ? "bg-obsidian text-ochre/70 border-ochre/20 hover:bg-ochre hover:text-ivory hover:border-ochre"
        : "bg-alabaster text-charcoal border-hairline hover:bg-ochre hover:text-ivory hover:border-ochre"
    }`}
  >
    <Globe size={16} />
  </a>
);

const FrontFace = ({ p }) => (
  <div className="h-full border border-hairline rounded-lg bg-ivory p-8 flex flex-col justify-between hover:bg-alabaster transition-colors duration-300">
    <div className="flex items-center gap-3 h-12">
      {p.logo ? (
        <img
          src={p.logo}
          alt={p.name}
          loading="lazy"
          className={`${p.logoBig ? "h-[3.25rem]" : "h-10"} max-w-[11rem] w-auto object-contain object-left`}
        />
      ) : (
        <>
          <span className="w-10 h-10 flex items-center justify-center rounded-sm bg-charcoal text-ivory font-serif text-lg">
            {p.name.charAt(0)}
          </span>
          <span className="font-sans font-semibold text-charcoal">{p.name}</span>
        </>
      )}
    </div>
    {p.logo && (
      <p className="mt-3 font-sans text-sm font-semibold text-charcoal">
        {p.name}
        {p.status && (
          <span
            className="text-slate-warm"
            data-testid={`portfolio-status-${slugify(p.name).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
          >
            {` (${p.status})`}
          </span>
        )}
      </p>
    )}
    <div className="mt-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-warm">
        {p.geography}
      </p>
      <p className="mt-2 inline-block text-xs font-medium text-ochre">
        {p.sector}
      </p>
    </div>
  </div>
);

const BackFace = ({ p }) => (
  <div
    className="h-full border border-ochre/20 rounded-lg bg-obsidian p-8 flex flex-col justify-between"
    data-testid={`portfolio-back-${slugify(p.name)}`}
  >
    <div className="flex items-center justify-between">
      <span className="font-serif text-xl text-ochre leading-snug">{p.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/20">
        {p.sector}
      </span>
    </div>
    <p className="font-sans text-sm leading-relaxed text-ivory/70">
      {p.description}
    </p>
  </div>
);

const PortfolioCard = ({ p }) => {
  const { showBack, controls, flip } = useFlip();
  const canFlip = !!p.description;
  const slug = slugify(p.name);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="relative h-[15rem]"
      data-testid={`portfolio-item-${slug}`}
    >
      <div
        className={canFlip ? "cursor-pointer h-full" : "h-full"}
        onClick={canFlip ? flip : undefined}
        data-testid={canFlip ? `portfolio-flip-${slug}` : undefined}
      >
        <motion.div animate={controls} initial={{ scaleX: 1 }} className="h-full">
          {showBack ? <BackFace p={p} /> : <FrontFace p={p} />}
        </motion.div>
      </div>
      {p.website && <WebsiteIcon p={p} tone={showBack ? "dark" : "light"} />}
    </motion.div>
  );
};

const Portfolio = () => {
  const [tab, setTab] = useState("all");
  const items = PORTFOLIO.filter((p) => tab === "all" || p.type === tab);

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="bg-alabaster border-y border-hairline"
    >
      <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36">
        <ChapterHeader number="03" label="Portfolio" />

        <Reveal className="flex flex-wrap gap-2 mb-12">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              data-testid={`portfolio-tab-${t.key}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                tab === t.key
                  ? "bg-charcoal text-ivory"
                  : "bg-transparent text-slate-warm border border-hairline hover:border-charcoal/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <PortfolioCard key={p.name} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-10">
          <p className="text-xs leading-relaxed text-slate-warm max-w-3xl" data-testid="portfolio-disclaimer">
            {PORTFOLIO_DISCLAIMER}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Portfolio;
