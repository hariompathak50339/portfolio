import { marqueeItems } from "@/data/portfolio";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-slate-950/70 py-5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-3 px-5">
        {marqueeItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="font-display px-4 text-lg font-bold tracking-tight whitespace-nowrap text-slate-200 sm:text-xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
