import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles =
    status === "Live"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : status === "In progress"
        ? "border-white/25 bg-white/10 text-white"
        : "border-white/15 bg-transparent text-neutral-400";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.15em] uppercase ${styles}`}
    >
      {status === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
      {status}
    </span>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#141414] p-7 sm:p-10 lg:p-12">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
          Featured — {project.year}
        </span>
      </div>

      <h3 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
        {project.title}
        <span className="text-blue-500">.</span>
      </h3>
      <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400 sm:text-base">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-300"
          >
            <ExternalLink className="h-4 w-4" />
            Visit live site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:border-white hover:bg-white hover:text-black"
          >
            <GithubIcon className="h-4 w-4" />
            Source code
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="relative scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="02" eyebrow="Selected work" title="Things I've built & shipped." />

        <div className="mt-12">
          {featured && <FeaturedCard project={featured} />}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#111111] p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-neutral-500">
                    /{project.index}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
                    {project.year}
                  </span>
                  <a
                    href={project.github ?? "https://github.com/hariompathak50339"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-neutral-300"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}

            {/* GitHub CTA card */}
            <a
              href="https://github.com/hariompathak50339"
              target="_blank"
              rel="noreferrer"
              className="flex h-full min-h-64 flex-col justify-between rounded-3xl bg-white p-7 text-black hover:bg-neutral-200 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <GithubIcon className="h-6 w-6" />
              </span>
              <div>
                  <p className="font-display text-2xl font-bold tracking-tight">
                  More experiments on GitHub
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase opacity-70">
                  @hariompathak50339
                  <ArrowUpRight className="h-4 w-4" />
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
