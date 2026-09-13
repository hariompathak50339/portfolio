import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col bg-[#F7F7F5]">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 sm:px-8">
        {/* status row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-[#3F3F46] uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] text-[#71717A] uppercase">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        {/* name */}
        <h1 className="font-display mt-8 leading-[1.05] font-bold tracking-tight text-[#111111]">
          <span className="block text-[clamp(2rem,5vw,3.75rem)]">HARIOM</span>
            <span className="block text-[clamp(2rem,5vw,3.75rem)]">
              PATHAK
            </span>
        </h1>

        {/* sub */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-[#3F3F46]">
            <span className="font-medium text-[#111111]">{profile.tagline}</span>
            <br />
            I design & build fast, minimal web experiences with{" "}
            <span className="font-semibold text-[#111111]">Next.js</span> and{" "}
            <span className="font-semibold text-[#111111]">TypeScript</span> — most recently{" "}
            <a
              href="https://fineprint.hariompathak.in"
              target="_blank"
              rel="noreferrer"
                className="font-medium text-[#4F6BFF] underline underline-offset-4 hover:opacity-80"
            >
              FinePrint
            </a>
            , live on my own domain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3F3F46]"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-5">
              <p className="font-display text-2xl font-bold text-[#111111]">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-[#71717A] uppercase">
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
              className="font-mono text-xs tracking-[0.2em] text-[#71717A] uppercase transition-colors hover:text-[#4F6BFF]"
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
