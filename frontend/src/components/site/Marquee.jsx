import { MARQUEE_ITEMS } from "@/data/content";

const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="border-y border-hairline bg-alabaster py-5 overflow-hidden"
      data-testid="editorial-marquee"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif italic text-lg text-charcoal/70 px-6">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ochre/60" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
