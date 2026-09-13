import { marqueeItems } from "@/data/portfolio";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#121214] py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-3 px-5">
        {marqueeItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="font-display px-4 text-lg font-bold tracking-tight whitespace-nowrap text-[#F5F5F7] sm:text-xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
