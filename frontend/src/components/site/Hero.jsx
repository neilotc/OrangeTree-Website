import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { HERO } from "@/data/content";
import { EASE } from "./Reveal";

const Hero = ({ active = true }) => {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full bg-ochre/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-24">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-charcoal max-w-3xl">
          {HERO.lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === HERO.lines.length - 1 ? "italic text-ochre" : ""}`}
                initial={{ y: "110%" }}
                animate={active ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: EASE }}
                data-testid={`hero-line-${i}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-8 max-w-xl text-base sm:text-lg font-light leading-relaxed text-slate-warm"
          data-testid="hero-subline"
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mt-10"
        >
          <a
            href="#pitch-us"
            data-testid="hero-pitch-us-cta"
            className="group inline-flex items-center gap-3 rounded-full bg-charcoal text-ivory px-8 py-4 text-sm font-semibold tracking-wide shadow-lg hover:bg-ochre hover:scale-[1.02] transition-[background-color,transform] duration-300"
          >
            {HERO.cta}
            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
