import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowUpRight,
  Telescope,
  HandCoins,
  Brain,
  Users,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { APPROACH } from "@/data/content";

const CARD_ICONS = [Telescope, HandCoins, Brain];

const Sequence = ({ index }) => (
  <div className="flex items-center -space-x-1.5" aria-hidden="true">
    {[0, 1, 2].map((s) => (
      <ChevronRight
        key={s}
        size={16}
        strokeWidth={s <= index ? 3 : 1.5}
        className={`transition-colors duration-300 ${
          s <= index ? "text-ochre" : "text-hairline"
        }`}
      />
    ))}
  </div>
);

/* ─── Shared fold hook (no 3-D stacking issues) ─── */
const useFlip = (axis = "x") => {
  const [showBack, setShowBack] = useState(false);
  const [busy, setBusy] = useState(false);
  const controls = useAnimation();
  const scaleProperty = axis === "y" ? "scaleY" : "scaleX";

  const flip = async () => {
    if (busy) return;
    setBusy(true);
    await controls.start({
      [scaleProperty]: 0,
      transition: { duration: 0.17, ease: [0.4, 0, 1, 1] },
    });
    setShowBack((p) => !p);
    // one rAF so React flushes the new content before we animate in
    await new Promise((r) => requestAnimationFrame(r));
    await controls.start({
      [scaleProperty]: 1,
      transition: { duration: 0.17, ease: [0, 0, 0.6, 1] },
    });
    setBusy(false);
  };

  return { showBack, controls, flip };
};

/* ─── Grid card (one of three) ─── */
const ApproachCard = ({ c, index }) => {
  const { showBack, controls, flip } = useFlip();
  const Icon = CARD_ICONS[index];

  return (
    <div
      className="cursor-pointer h-[22rem]"
      onClick={flip}
      data-testid={`approach-card-${c.number}`}
    >
      <motion.div animate={controls} initial={{ scaleX: 1 }} className="h-full">
        {showBack ? (
          /* ── Back face ── */
          <div className="h-full border border-ochre/20 bg-obsidian p-8 lg:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 flex items-center justify-center rounded-full border border-ochre/20 text-ochre/60">
                <Icon size={16} />
              </span>
              <span className="font-mono text-xs text-ivory/20 tracking-widest">
                {c.number}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ochre mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-ivory/70">
                {c.detail}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-ivory/30">
              <RotateCcw size={11} />
              <span>Tap to go back</span>
            </div>
          </div>
        ) : (
          /* ── Front face ── */
          <div className="h-full border border-hairline bg-ivory p-8 lg:p-12 flex flex-col justify-between hover:bg-alabaster transition-colors duration-300">
            <div className="flex items-center justify-between">
              <span className="w-11 h-11 flex items-center justify-center rounded-full border border-ochre/40 text-ochre">
                <Icon size={19} />
              </span>
              <Sequence index={index} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-ochre-deep mb-4 md:whitespace-nowrap">
                {c.title}
              </h3>
              <p className="font-sans text-base font-medium leading-relaxed text-charcoal md:min-h-[3.5rem]">
                {c.statement}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-sans text-ochre/50">
              <span>Tap to read more</span>
              <ArrowUpRight size={11} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* ─── Full-width band (How We Help) ─── */
const ApproachBand = ({ band }) => {
  const { showBack, controls, flip } = useFlip("y");

  return (
    <div
      className="cursor-pointer"
      onClick={flip}
      data-testid="approach-band-how-we-help"
    >
      <motion.div animate={controls} initial={{ scaleY: 1 }}>
        {showBack ? (
          /* ── Back face ── */
          <div className="border border-ochre/20 bg-obsidian px-8 lg:px-12 py-10 lg:py-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16">
            <div className="shrink-0 flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-ochre/20 text-ochre/60">
                <Users size={18} />
              </span>
              <span className="font-serif text-2xl lg:text-3xl text-ochre">
                {band.title}
              </span>
            </div>
            <span className="hidden sm:block h-10 w-px bg-ochre/20 shrink-0" />
            <p className="font-sans text-sm leading-relaxed text-ivory/70">
              {band.detail}
            </p>
          </div>
        ) : (
          /* ── Front face ── */
          <div className="group border border-hairline bg-ivory hover:bg-alabaster transition-colors duration-300 px-8 lg:px-12 py-10 lg:py-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16">
            <div className="shrink-0 flex items-center gap-5">
              <span className="font-serif text-2xl lg:text-3xl text-ochre-deep group-hover:text-ochre transition-colors duration-300">
                {band.title}
              </span>
              <ArrowUpRight
                size={22}
                className="text-ochre transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
            <span className="hidden sm:block h-10 w-px bg-hairline shrink-0" />
            <p className="font-serif italic text-xl lg:text-2xl text-charcoal">
              {band.statement}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* ─── Section ─── */
const Edge = () => (
  <section
    id="edge"
    data-testid="edge-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <ChapterHeader label="Our Approach to Direct Investments" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {APPROACH.cards.map((c, i) => (
        <Reveal key={c.number} delay={i * 0.12}>
          <ApproachCard c={c} index={i} />
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.15}>
      <div className="mt-6">
        <ApproachBand band={APPROACH.band} />
      </div>
    </Reveal>
  </section>
);

export default Edge;
