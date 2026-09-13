import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col bg-[#050B18]">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 sm:px-8">
        {/* status row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0D1728] px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-[#AAB4C5] uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] text-[#718096] uppercase">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        {/* name */}
        <h1 className="font-display mt-8 leading-[1.02] font-bold tracking-tight text-[#F5F7FF]">
          <span className="block text-[clamp(2.25rem,5vw,4rem)]">HARIOM</span>
            <span className="block text-[clamp(2.25rem,5vw,4rem)]">
              PATHAK
            </span>
        </h1>

        {/* sub */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-[#AAB4C5]">
            <span className="font-medium text-[#F5F7FF]">{profile.tagline}</span>
            <br />
            I design & build fast, minimal web experiences with{" "}
            <span className="font-semibold text-[#F5F7FF]">Next.js</span> and{" "}
            <span className="font-semibold text-[#F5F7FF]">TypeScript</span> — most recently{" "}
            <a
              href="https://fineprint.hariompathak.in"
              target="_blank"
              rel="noreferrer"
                className="font-medium text-[#5B8CFF] underline underline-offset-4 hover:opacity-80"
            >
              FinePrint
            </a>
            , live on my own domain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#4F7CFF] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#5B8CFF]"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#F5F7FF] transition-colors hover:border-white/40"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#081225] px-6 py-5">
              <p className="font-display text-2xl font-bold text-[#F5F7FF]">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-[#718096] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* socials */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-[0.2em] text-[#718096] uppercase transition-colors hover:text-[#5B8CFF]"
            >
              {s.label}
              <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
