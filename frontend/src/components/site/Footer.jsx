import { Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { FOOTER } from "@/data/content";

const Footer = () => (
  <footer id="footer" data-testid="footer-section" className="bg-obsidian text-ivory border-t border-stone-800">
    <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pt-20 pb-10">
      <Reveal>
        <div className="overflow-hidden">
          <img
            src="/logo.png"
            alt="Orange Tree Capital"
            className="h-16 sm:h-24 lg:h-32 w-auto"
            data-testid="footer-wordmark"
          />
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-stone-800 pt-10">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">Reach Us</p>
          <a
            href={`mailto:${FOOTER.email}`}
            data-testid="footer-email"
            className="flex items-center gap-2 text-sm text-stone-300 hover:text-ochre transition-colors duration-200"
          >
            <Mail size={14} /> {FOOTER.email}
          </a>
          <a
            href={FOOTER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
            className="mt-3 flex items-center gap-2 text-sm text-stone-300 hover:text-ochre transition-colors duration-200"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">Address</p>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-stone-300" data-testid="footer-address">
            <MapPin size={14} className="mt-0.5 shrink-0" /> {FOOTER.address}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">Presence</p>
          <p className="text-sm text-stone-300" data-testid="footer-locations">
            {FOOTER.locations.join("  ·  ")}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800 pt-8">
        <p className="text-xs text-stone-500" data-testid="footer-copyright">{FOOTER.copyright}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-600">
          Operator-led · India first
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
