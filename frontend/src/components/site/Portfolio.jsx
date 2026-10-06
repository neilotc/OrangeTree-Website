import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, ChapterHeader, EASE } from "./Reveal";
import { PORTFOLIO, PORTFOLIO_DISCLAIMER } from "@/data/content";

const TABS = [
  { key: "all", label: "All" },
  { key: "direct", label: "Direct Investments" },
  { key: "fund", label: "Fund Investments" },
  { key: "exit", label: "Exits" },
];

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
        <ChapterHeader
          number="03"
          label="Portfolio"
        />

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

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          <AnimatePresence mode="popLayout">
            {items.map((p) => {
              const Card = p.website ? motion.a : motion.div;
              const cardProps = p.website
                ? { href: p.website, target: "_blank", rel: "noreferrer", "aria-label": `Visit ${p.name}` }
                : {};

              return (
                <Card
                  layout
                  key={p.name}
                  {...cardProps}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group relative bg-ivory p-8 min-h-[11rem] flex flex-col justify-between hover:bg-alabaster transition-[background-color,transform] duration-300"
                  data-testid={`portfolio-item-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-center gap-3 h-12">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        loading="lazy"
                        className="h-10 max-w-[11rem] w-auto object-contain object-left"
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
                          data-testid={`portfolio-status-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
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
                </Card>
              );
            })}
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
