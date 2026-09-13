import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 sm:px-8">
        {/* status row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-slate-200 uppercase backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        {/* name */}
        <h1 className="font-display mt-8 leading-[0.9] font-bold tracking-tighter text-white">
          <span className="block text-[clamp(1.75rem,5vw,3.5rem)]">HARIOM</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-sky-300 bg-clip-text text-[clamp(1.75rem,5vw,3.5rem)] text-transparent">
              PATHAK
            </span>
        </h1>

        {/* sub */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            <span className="font-mono text-sm text-slate-100">{profile.tagline}</span>
            <br />
            I design & build fast, minimal web experiences with{" "}
            <span className="font-medium text-white">Next.js</span> and{" "}
            <span className="font-medium text-white">TypeScript</span> — most recently{" "}
            <a
              href="https://fineprint.hariompathak.in"
              target="_blank"
              rel="noreferrer"
                className="font-medium text-violet-300 underline decoration-violet-400/40 underline-offset-4 hover:text-violet-200 hover:decoration-violet-300"
            >
              FinePrint
            </a>
            , live on my own domain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-violet-200"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-violet-400/60 hover:bg-violet-500/20"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-950/70 px-6 py-5 backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-slate-400 uppercase">
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
              className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-white"
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
