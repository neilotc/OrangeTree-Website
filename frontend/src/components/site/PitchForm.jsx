import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const PitchForm = () => (
  <section
    id="pitch-us"
    data-testid="pitch-us-section"
    className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-24 lg:py-36"
  >
    <Reveal>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-charcoal"
        data-testid="pitch-message"
      >
        Building something serious? We’d like to hear from you.
      </motion.h2>
    </Reveal>
  </section>
);

export default PitchForm;