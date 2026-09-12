import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 sm:px-8">
        {/* status row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        {/* name */}
        <h1 className="font-display mt-8 leading-[0.9] font-bold tracking-tighter">
          <span className="block text-[clamp(2.25rem,7vw,5rem)]">HARIOM</span>
          <span className="text-outline block text-[clamp(2.25rem,7vw,5rem)]">
            PATHAK
          </span>
        </h1>

        {/* sub */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            <span className="font-mono text-sm text-white">{profile.tagline}</span>
            <br />
            I design & build fast, minimal web experiences with{" "}
            <span className="text-white">Next.js</span> and{" "}
            <span className="text-white">TypeScript</span> — most recently{" "}
            <a
              href="https://fineprint.hariompathak.in"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white"
            >
              FinePrint
            </a>
            , live on my own domain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-neutral-300"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-black"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0f0f0f] px-6 py-5">
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-neutral-500 uppercase">
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
              className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase hover:text-white"
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
