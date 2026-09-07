import { Reveal, ChapterHeader } from "./Reveal";
import { PILLARS } from "@/data/content";

const WhatWeDo = () => (
  <section
    id="what-we-do"
    data-testid="what-we-do-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <ChapterHeader
      number="01"
      label="What We Do"
      title="Three ways we put capital to work"
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-hairline">
      {PILLARS.map((p, i) => (
        <Reveal key={p.number} delay={i * 0.12} className="border-b border-r border-hairline">
          <div
            className="group p-8 lg:p-12 h-full flex flex-col hover:bg-alabaster transition-colors duration-300"
            data-testid={`pillar-card-${p.number}`}
          >
            <div className="flex items-center gap-5 h-12 mb-10">
              <span className="font-serif text-5xl leading-none font-semibold text-ochre group-hover:text-ochre-deep transition-colors duration-300">
                {p.number}
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ochre-deep border border-ochre bg-ochre/10 rounded-full px-3 py-1 whitespace-nowrap group-hover:bg-ochre group-hover:text-ivory transition-colors duration-300">
                {p.badge}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-ochre-deep mb-4 group-hover:text-ochre transition-colors duration-300">{p.title}</h3>
            <p className="text-sm leading-relaxed text-slate-warm">{p.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default WhatWeDo;
