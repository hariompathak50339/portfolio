export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
      <div>
        <p className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">
          <span className="text-neutral-50">{index}</span> — {eyebrow}
        </p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      <span
        aria-hidden
        className="font-display text-outline hidden text-7xl font-bold select-none lg:block"
      >
        {index}
      </span>
    </div>
  );
}
