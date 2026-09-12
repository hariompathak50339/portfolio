import SectionHeading from "./SectionHeading";
import { journey } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 border-t border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="04" eyebrow="Journey" title="The road so far." />

        <div className="mt-12">
          {journey.map((m, i) => (
            <div
              key={`${m.title}-${i}`}
              className="grid gap-3 border-t border-white/10 py-8 last:border-b sm:grid-cols-12 sm:gap-6 sm:px-4"
            >
              <p className="font-display text-xl font-bold text-neutral-500 sm:col-span-2 sm:text-2xl">
                {m.year}
              </p>
              <h3 className="font-display text-lg font-bold tracking-tight sm:col-span-4 sm:text-xl">
                {m.title}
              </h3>
              <p className="leading-relaxed text-neutral-400 sm:col-span-6">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-white/20 px-6 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase">
            2026 — <span className="text-white">Next chapter: internships & freelance</span>
          </p>
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-neutral-300"
          >
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}
