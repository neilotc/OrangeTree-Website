import { ArrowUpRight } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { FOOTER } from "@/data/content";

const PitchForm = () => (
  <section
    id="pitch-us"
    data-testid="pitch-us-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      <div className="lg:col-span-5">
        <ChapterHeader
          number="05"
          label="Pitch Us"
          title="Building something serious? We’d like to hear from you."
        />
        <Reveal delay={0.1}>
          <a
            href={`mailto:${FOOTER.email}`}
            data-testid="pitch-email-link"
            className="mt-8 inline-flex items-center gap-2 text-sm text-ochre hover:text-ochre-deep transition-colors duration-200"
          >
            Email us at {FOOTER.email}
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PitchForm;