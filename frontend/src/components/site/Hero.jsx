import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { HERO } from "@/data/content";
import { EASE } from "./Reveal";

/* Isometric "cube" hexagon echoing the OrangeTree mark */
const Cube = ({ cx, cy, s, delay = 0, dur = 7, intensity = 1 }) => {
  const h = 0.5 * s;
  const w = 0.866 * s;
  const T = [cx, cy - s];
  const UL = [cx - w, cy - h];
  const UR = [cx + w, cy - h];
  const LL = [cx - w, cy + h];
  const LR = [cx + w, cy + h];
  const B = [cx, cy + s];
  const C = [cx, cy];
  const pts = (arr) => arr.map((p) => p.join(",")).join(" ");
  return (
    <motion.g
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -10, 0], opacity: 1 }}
      transition={{
        y: { duration: dur, delay, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 1.2, delay: delay * 0.4, ease: EASE },
      }}
      stroke="#FAF8F5"
      strokeWidth="2.5"
      strokeLinejoin="round"
    >
      <polygon points={pts([T, UR, C, UL])} fill="#E85D04" fillOpacity={0.3 * intensity} />
      <polygon points={pts([UL, C, B, LL])} fill="#E85D04" fillOpacity={0.17 * intensity} />
      <polygon points={pts([UR, LR, B, C])} fill="#E85D04" fillOpacity={0.09 * intensity} />
    </motion.g>
  );
};

const HeroBackdrop = ({ glowY }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%]"
  >
    <motion.div
      style={{ y: glowY }}
      className="absolute -top-40 -right-24 w-[44rem] h-[44rem] rounded-full bg-ochre/15 blur-3xl"
    />
    <motion.div
      style={{ y: glowY }}
      className="absolute top-40 right-40 w-[26rem] h-[26rem] rounded-full bg-ochre/10 blur-3xl"
    />
    <svg
      className="absolute inset-0 h-full w-full hidden md:block"
      viewBox="0 0 600 820"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <linearGradient id="hero-arc-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E85D04" stopOpacity="0" />
          <stop offset="55%" stopColor="#E85D04" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E85D04" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hero-dot-grad">
          <stop offset="0%" stopColor="#E85D04" />
          <stop offset="100%" stopColor="#E85D04" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path
        id="hero-arc"
        d="M 20 30 C 300 140, 560 300, 470 810"
        stroke="url(#hero-arc-grad)"
        strokeWidth="1.5"
      />
      <path
        d="M 90 -20 C 360 110, 600 300, 540 760"
        stroke="#E85D04"
        strokeOpacity="0.1"
        strokeWidth="1"
      />

      {/* Travelling glow dot on the arc */}
      <circle r="22" fill="url(#hero-dot-grad)">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
          <mpath href="#hero-arc" />
        </animateMotion>
      </circle>
      <circle r="4" fill="#E85D04">
        <animateMotion dur="9s" repeatCount="indefinite">
          <mpath href="#hero-arc" />
        </animateMotion>
      </circle>

      {/* Cube cluster echoing the OC lattice */}
      <Cube cx={430} cy={300} s={104} delay={0} dur={8} intensity={1} />
      <Cube cx={430} cy={494} s={104} delay={0.6} dur={9} intensity={0.8} />
      <Cube cx={296} cy={600} s={70} delay={1.1} dur={7.5} intensity={0.55} />
      <Cube cx={540} cy={636} s={70} delay={0.3} dur={8.5} intensity={0.45} />
    </svg>
  </div>
);

const Hero = ({ active = true }) => {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative flex items-center overflow-hidden pt-20 min-h-[calc(100vh-72px)]"
    >
      <HeroBackdrop glowY={glowY} />

      <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-16 lg:py-20">
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
          <span className="font-medium text-ochre">OrangeTree</span>{" "}
          <span className="font-medium" style={{ color: "#5A5957" }}>Capital</span>{" "}
          is a family office investing across multiple asset classes, spanning private
          companies, funds, and public markets, with a presence in India and Singapore.
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
