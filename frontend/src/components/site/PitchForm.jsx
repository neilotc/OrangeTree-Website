import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";
import { UploadCloud, FileText, X, ArrowUpRight } from "lucide-react";
import { Reveal, ChapterHeader } from "./Reveal";
import { PITCH_META, FOOTER } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const MAX_MB = 20;

const inputCls =
  "w-full bg-alabaster border border-hairline rounded-sm px-4 py-3 text-sm text-charcoal placeholder:text-slate-warm/60 focus:outline-none focus:ring-1 focus:ring-ochre focus:border-ochre transition-[box-shadow,border-color] duration-200";

const Field = ({ label, required, children, testid }) => (
  <label className="block" data-testid={testid}>
    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-warm mb-2">
      {label} {required && <span className="text-ochre">*</span>}
    </span>
    {children}
  </label>
);

const PitchForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", company: "", website: "", sector: "", stage: "", one_liner: "",
  });
  const [deck, setDeck] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.name.toLowerCase().endsWith(".pdf")) {
      toast.error("Deck must be a PDF file.");
      e.target.value = "";
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      toast.error(`Deck exceeds the ${MAX_MB} MB limit.`);
      e.target.value = "";
      return;
    }
    setDeck(f);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!deck) {
      toast.error("Please attach your pitch deck (PDF).");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      fd.append("deck", deck);
      await axios.post(`${API}/pitch`, fd, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success("Application submitted — our partners will respond within 48 hours.");
      setForm({ name: "", email: "", company: "", website: "", sector: "", stage: "", one_liner: "" });
      setDeck(null);
    } catch (err) {
      toast.error(err.response?.data?.detail || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
            title="Building something serious? We read every deck."
          />
          <Reveal delay={0.1}>
            <p className="text-base font-light leading-relaxed text-slate-warm max-w-md">
              Tell us what you're building in one line, attach your deck, and it lands
              directly with a partner — not a CRM queue.
            </p>
            <p className="mt-6 font-serif italic text-xl text-charcoal" data-testid="pitch-promise">
              “{PITCH_META.promise}”
            </p>
            <a
              href={`mailto:${FOOTER.email}`}
              data-testid="pitch-email-link"
              className="mt-8 inline-flex items-center gap-2 text-sm text-ochre hover:text-ochre-deep transition-colors duration-200"
            >
              Prefer email? {FOOTER.email}
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            data-testid="pitch-form"
            className="border border-hairline rounded-sm p-6 sm:p-10 bg-ivory space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Your Name" required testid="field-name">
                <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Asha Rao" data-testid="input-name" />
              </Field>
              <Field label="Email" required testid="field-email">
                <input required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="asha@company.com" data-testid="input-email" />
              </Field>
              <Field label="Company" required testid="field-company">
                <input required value={form.company} onChange={set("company")} className={inputCls} placeholder="Acme DeepTech" data-testid="input-company" />
              </Field>
              <Field label="Website" testid="field-website">
                <input type="url" value={form.website} onChange={set("website")} className={inputCls} placeholder="https://…" data-testid="input-website" />
              </Field>
              <Field label="Sector" required testid="field-sector">
                <select required value={form.sector} onChange={set("sector")} className={inputCls} data-testid="input-sector">
                  <option value="" disabled>Select sector</option>
                  {PITCH_META.sectors.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Stage" required testid="field-stage">
                <select required value={form.stage} onChange={set("stage")} className={inputCls} data-testid="input-stage">
                  <option value="" disabled>Select stage</option>
                  {PITCH_META.stages.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="One-Liner" required testid="field-one-liner">
              <textarea
                required
                rows={3}
                maxLength={280}
                value={form.one_liner}
                onChange={set("one_liner")}
                className={`${inputCls} resize-none`}
                placeholder="What are you building, for whom, and why now — in one line."
                data-testid="input-one-liner"
              />
            </Field>

            <Field label={`Pitch Deck — PDF, ≤ ${MAX_MB} MB`} required testid="field-deck">
              <input ref={fileRef} type="file" accept="application/pdf,.pdf" onChange={onFile} className="hidden" data-testid="input-deck" />
              {deck ? (
                <div className="flex items-center justify-between bg-alabaster border border-hairline rounded-sm px-4 py-3" data-testid="deck-preview">
                  <span className="flex items-center gap-3 text-sm text-charcoal">
                    <FileText size={16} className="text-ochre" />
                    {deck.name}
                    <span className="text-xs text-slate-warm">
                      ({(deck.size / 1024 / 1024).toFixed(1)} MB)
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => { setDeck(null); fileRef.current.value = ""; }}
                    className="text-slate-warm hover:text-charcoal transition-colors duration-200"
                    aria-label="Remove deck"
                    data-testid="deck-remove-btn"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current.click()}
                  className="w-full flex flex-col items-center gap-2 border border-dashed border-hairline rounded-sm px-4 py-8 text-slate-warm hover:border-ochre hover:text-ochre transition-colors duration-300"
                  data-testid="deck-upload-btn"
                >
                  <UploadCloud size={22} />
                  <span className="text-sm">Click to attach your deck</span>
                </button>
              )}
            </Field>

            <button
              type="submit"
              disabled={submitting}
              data-testid="pitch-submit-btn"
              className="w-full rounded-full bg-charcoal text-ivory text-sm font-semibold tracking-wide px-8 py-4 hover:bg-ochre disabled:opacity-60 transition-colors duration-300"
            >
              {submitting ? "Submitting…" : "Submit Pitch"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default PitchForm;
