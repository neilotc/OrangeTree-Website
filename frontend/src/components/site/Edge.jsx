import { ArrowUpRight, Target, Zap, Infinity as InfinityIcon, ChevronRight } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { APPROACH } from "@/data/content";

const ICONS = [Target, Zap, InfinityIcon];

const Sequence = ({ index }) => (
  <div className="flex items-center -space-x-1.5" aria-hidden="true">
    {[0, 1, 2].map((s) => (
      <ChevronRight
        key={s}
        size={16}
        strokeWidth={s <= index ? 3 : 1.5}
        className={`transition-colors duration-300 ${s <= index ? "text-ochre" : "text-hairline"}`}
      />
    ))}
  </div>
);

const Edge = () => (
  <section
    id="edge"
    data-testid="edge-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <ChapterHeader number="02" label="Our Investment Approach" />
    <Reveal className="-mt-8 mb-14 lg:mb-16">
      <p className="font-serif italic text-lg text-slate-warm" data-testid="approach-scope-note">
        — how we approach our direct investments in startups
      </p>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {APPROACH.cards.map((c, i) => {
        const Icon = ICONS[i];
        return (
          <Reveal key={c.number} delay={i * 0.12}>
            <div
              className="group border border-hairline bg-ivory p-8 lg:p-12 h-full min-h-[16rem] flex flex-col justify-between hover:bg-alabaster transition-colors duration-300"
              data-testid={`approach-card-${c.number}`}
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 flex items-center justify-center rounded-full border border-ochre/40 text-ochre group-hover:bg-ochre group-hover:text-ivory group-hover:border-ochre transition-colors duration-300">
                  <Icon size={19} />
                </span>
                <Sequence index={i} />
              </div>
              <div className="mt-14">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ochre-deep mb-4">
                  {c.title}
                </h3>
                <p className="font-serif text-xl lg:text-2xl leading-snug text-charcoal">{c.statement}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>

    <Reveal delay={0.15}>
      <div
        className="group mt-6 border border-hairline bg-ivory hover:bg-alabaster transition-colors duration-300 px-8 lg:px-12 py-10 lg:py-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16"
        data-testid="approach-band-how-we-help"
      >
        <div className="shrink-0 flex items-center gap-5">
          <span className="font-serif text-2xl lg:text-3xl text-ochre-deep group-hover:text-ochre transition-colors duration-300">
            {APPROACH.band.title}
          </span>
          <ArrowUpRight
            size={22}
            className="text-ochre transition-transform duration-300 group-hover:rotate-45"
          />
        </div>
        <span className="hidden sm:block h-10 w-px bg-hairline" />
        <p className="font-serif italic text-xl lg:text-2xl text-charcoal">
          {APPROACH.band.statement}
        </p>
      </div>
    </Reveal>
  </section>
);

export default Edge;
