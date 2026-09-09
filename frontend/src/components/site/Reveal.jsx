import { motion } from "framer-motion";

export const EASE = [0.215, 0.61, 0.355, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ChapterHeader = ({ label, title, dark = false }) => (
  <Reveal className="mb-14 lg:mb-20">
    <div className="flex items-center gap-4 mb-6">
      <span className={`h-px w-16 ${dark ? "bg-stone-700" : "bg-hairline"}`} />
      <span
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {label}
      </span>
    </div>
    {title && (
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-2xl ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
    )}
  </Reveal>
);
