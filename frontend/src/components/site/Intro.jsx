import { motion } from "framer-motion";
import { EASE } from "./Reveal";

const C = "50% 50%";
const PTS = [
  "50% -4%", "104% -4%", "104% 50%", "104% 104%",
  "50% 104%", "-4% 104%", "-4% 50%", "-4% -4%", "50% -4%",
];
const WEDGES = Array.from({ length: 8 }, (_, i) =>
  `polygon(${C}, ${PTS[i]}, ${PTS[i + 1]})`
);
const COLLAPSED = `polygon(${C}, ${C}, ${C})`;

const Intro = () => (
  <motion.div
    className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center"
    exit={{ y: "-100%" }}
    transition={{ duration: 0.7, ease: EASE }}
    data-testid="intro-overlay"
  >
    <motion.div
      initial={{ scale: 0.92 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.4, ease: EASE }}
      className="relative w-36 h-36 sm:w-44 sm:h-44"
    >
      {WEDGES.map((wedge, i) => (
        <motion.img
          key={i}
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ clipPath: COLLAPSED, opacity: 0 }}
          animate={{ clipPath: wedge, opacity: 1 }}
          transition={{
            clipPath: { duration: 0.45, delay: 0.15 + i * 0.09, ease: EASE },
            opacity: { duration: 0.2, delay: 0.15 + i * 0.09 },
          }}
        />
      ))}
    </motion.div>
    <motion.img
      src="/logo-wordmark.png"
      alt="OrangeTree Capital"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
      className="mt-8 h-6 sm:h-8 w-auto"
      data-testid="intro-wordmark"
    />
  </motion.div>
);

export default Intro;
