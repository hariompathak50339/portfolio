import Image from "next/image";
import { GraduationCap, Rocket, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-[#050B18]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="01" eyebrow="About" title="Student by day, builder by night." />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* portrait card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1728]">
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center p-8 sm:aspect-square lg:aspect-[4/5]">
                <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white/10 sm:h-44 sm:w-44">
                  <Image
                    src="/image.jpeg"
                    alt="Hariom Pathak"
                    width={352}
                    height={352}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-display mt-6 text-xl font-bold text-[#F5F7FF]">Hariom Pathak</p>
                <p className="mt-1 font-mono text-xs tracking-[0.2em] text-[#718096] uppercase">
                  {profile.role}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Next.js", "TypeScript", "Tailwind"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-[#AAB4C5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/10 px-6 py-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#718096] uppercase">
                  EST. 2024 — v2.0
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* bio */}
          <div className="lg:col-span-7">
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-[#F5F7FF] sm:text-xl font-medium"
                    : "mt-5 leading-relaxed text-[#AAB4C5]"
                }
              >
                {para}
              </p>
            ))}

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              <div className="bg-[#081225] p-6">
                <GraduationCap className="h-5 w-5 text-[#5B8CFF]" />
                <p className="mt-3 font-semibold text-[#F5F7FF]">Education</p>
                <p className="mt-1 text-sm leading-relaxed text-[#AAB4C5]">
                  Diploma in Information Technology, 2nd year at{" "}
                  <span className="font-medium text-[#F5F7FF]">{profile.college}</span> — data
                  structures, DBMS, web tech & software engineering.
                </p>
              </div>
              <div className="bg-[#081225] p-6">
                <Rocket className="h-5 w-5 text-[#5B8CFF]" />
                <p className="mt-3 font-semibold text-[#F5F7FF]">Right now</p>
                <ul className="mt-1 space-y-1 text-sm leading-relaxed text-[#AAB4C5]">
                  {profile.currently.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-[#5B8CFF]">→</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://fineprint.hariompathak.in"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0D1728] px-6 py-5 text-[#F5F7FF] transition-colors hover:border-white/25"
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-[#718096] uppercase">
                  Latest launch
                </p>
                <p className="font-display text-lg font-bold">
                  FinePrint — live in production
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FF] text-[#050B18]">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
