import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-hairline">
      <nav className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5" data-testid="nav-logo">
          <span className="w-2.5 h-2.5 rounded-full bg-ochre" />
          <span className="font-serif text-lg tracking-tight text-charcoal">
            Orange Tree <span className="italic">Capital</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-slate-warm hover:text-charcoal transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pitch-us"
            data-testid="nav-pitch-us-btn"
            className="rounded-full bg-charcoal text-ivory text-sm font-medium px-5 py-2 hover:bg-ochre transition-colors duration-300"
          >
            Pitch Us
          </a>
        </div>
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-hairline bg-ivory overflow-hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-charcoal"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pitch-us"
                onClick={() => setOpen(false)}
                className="rounded-full bg-charcoal text-ivory text-sm font-medium px-5 py-2.5 text-center"
              >
                Pitch Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
