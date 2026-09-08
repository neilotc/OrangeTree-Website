import { ArrowUpRight } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { APPROACH } from "@/data/content";

const Edge = () => (
  <section
    id="edge"
    data-testid="edge-section"
    className="bg-obsidian text-ivory"
  >
    <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36">
      <ChapterHeader number="04" label="Our Investment Approach" dark />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border border-stone-800">
        {APPROACH.cards.map((c, i) => (
          <Reveal key={c.number} delay={i * 0.12}>
            <div
              className="group bg-obsidian p-8 lg:p-12 h-full min-h-[16rem] flex flex-col justify-between hover:bg-[#211E1B] transition-colors duration-300"
              data-testid={`approach-card-${c.number}`}
            >
              <span className="font-serif text-5xl leading-none font-semibold text-stone-600 group-hover:text-ochre transition-colors duration-300">
                {c.number}
              </span>
              <div className="mt-14">
                <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-ochre-deep transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">{c.statement}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div
          className="group mt-px border border-stone-800 border-t-0 bg-obsidian hover:bg-[#211E1B] transition-colors duration-300 px-8 lg:px-12 py-10 lg:py-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16"
          data-testid="approach-band-how-we-help"
        >
          <div className="shrink-0 flex items-center gap-5">
            <span className="font-serif text-2xl lg:text-3xl text-ivory group-hover:text-ochre-deep transition-colors duration-300">
              {APPROACH.band.title}
            </span>
            <ArrowUpRight
              size={22}
              className="text-ochre transition-transform duration-300 group-hover:rotate-45"
            />
          </div>
          <span className="hidden sm:block h-10 w-px bg-stone-700" />
          <p className="font-serif italic text-xl lg:text-2xl text-stone-300">
            {APPROACH.band.statement}
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Edge;
