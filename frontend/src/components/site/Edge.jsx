import { Users, Globe, Zap, Network } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { EDGE_TILES } from "@/data/content";

const ICONS = { Users, Globe, Zap, Network };

const Edge = () => (
  <section
    id="edge"
    data-testid="edge-section"
    className="bg-obsidian text-ivory"
  >
    <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36">
      <ChapterHeader
        number="04"
        label="Why Pitch Us"
        title="What you get beyond the cheque."
        dark
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-800 border border-stone-800">
        {EDGE_TILES.map((t, i) => {
          const Icon = ICONS[t.icon];
          return (
            <Reveal key={t.title} delay={i * 0.1}>
              <div
                className="group bg-obsidian p-8 lg:p-12 h-full hover:bg-[#211E1B] transition-colors duration-300"
                data-testid={`edge-tile-${t.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-700 text-ochre mb-8 group-hover:border-ochre group-hover:bg-ochre/10 transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-3">{t.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{t.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Edge;
