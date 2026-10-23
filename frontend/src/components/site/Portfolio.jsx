import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, RotateCcw } from "lucide-react";
import { Reveal, ChapterHeader, EASE } from "./Reveal";
import { PORTFOLIO, PORTFOLIO_DISCLAIMER } from "@/data/content";

const TABS = [
  { key: "all", label: "All" },
  { key: "direct", label: "Direct Investments" },
  { key: "fund", label: "Fund Investments" },
  { key: "exit", label: "Exits" },
];

const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");

const CardShell = ({ children, className = "" }) => (
  <div
    className={`bg-ivory border border-hairline rounded-lg p-10 min-h-[13rem] flex flex-col justify-between hover:border-charcoal/30 transition-[border-color] duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardFace = ({ p }) => (
  <>
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
          <span className="w-10 h-10 flex items-center justify-center rounded-sm bg-charcoal text-ivory font-serif text-lg group-hover:bg-ochre transition-colors duration-300">
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
  </>
);

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
        ? "bg-charcoal/40 text-ivory border-ivory/20 hover:bg-ochre hover:text-ivory hover:border-ochre"
        : "bg-alabaster text-charcoal border-hairline hover:bg-ochre hover:text-ivory hover:border-ochre"
    }`}
  >
    <Globe size={16} />
  </a>
);

const PortfolioCard = ({ p }) => {
  const [flipped, setFlipped] = useState(false);
  const canFlip = !!p.description;
  const slug = slugify(p.name);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="group relative min-h-[13rem] [perspective:1400px]"
      data-testid={`portfolio-item-${slug}`}
    >
      {canFlip ? (
        <div
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          aria-label={`Flip ${p.name} card`}
          data-testid={`portfolio-flip-${slug}`}
          className={`relative grid cursor-pointer transition-transform duration-[600ms] [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="[grid-area:1/1] [backface-visibility:hidden] relative">
            <CardShell className="bg-ivory">
              <CardFace p={p} />
            </CardShell>
            {p.website && <WebsiteIcon p={p} tone="light" />}
          </div>

          {/* Back */}
          <div
            className="[grid-area:1/1] [backface-visibility:hidden] [transform:rotateY(180deg)] relative"
            data-testid={`portfolio-back-${slug}`}
          >
            <div className="bg-charcoal border border-charcoal rounded-lg p-10 min-h-[13rem] h-full flex flex-col justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/50">
                {p.name}
              </p>
              <p className="font-serif text-base lg:text-lg leading-relaxed text-ivory">
                {p.description}
              </p>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                <RotateCcw size={11} /> Tap to flip back
              </span>
            </div>
            {p.website && <WebsiteIcon p={p} tone="dark" />}
          </div>
        </div>
      ) : (
        <div className="relative">
          <CardShell className="bg-ivory hover:bg-alabaster transition-[background-color,border-color] duration-300">
            <CardFace p={p} />
          </CardShell>
          {p.website && <WebsiteIcon p={p} tone="light" />}
        </div>
      )}
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
