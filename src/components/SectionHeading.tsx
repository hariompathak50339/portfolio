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
    <div className="flex items-end justify-between gap-6 border-b border-zinc-200 pb-6">
      <div>
          <p className="font-mono text-xs tracking-[0.3em] text-[#71717A] uppercase">
            <span className="text-[#4F6BFF]">{index}</span> — {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-balance text-[#111111] sm:text-4xl lg:text-5xl">
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
