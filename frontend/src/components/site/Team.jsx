import { Linkedin } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { TEAM } from "@/data/content";

const Team = () => (
  <section
    id="team"
    data-testid="team-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <ChapterHeader
      number="04"
      label="Team"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {TEAM.map((m, i) => (
        <Reveal key={m.name} delay={i * 0.1}>
          <div className="group" data-testid={`team-member-${m.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="relative overflow-hidden rounded-sm border border-hairline aspect-[3/4] bg-alabaster">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-500"
              />
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                data-testid={`team-linkedin-${m.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-ivory/90 text-charcoal hover:bg-ochre hover:text-ivory transition-colors duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <h3 className="mt-5 font-serif text-xl text-charcoal">{m.name}</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ochre mt-1">
              {m.role}
            </p>
            {m.sub && (
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ochre">
                {m.sub}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Team;
