"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white">
                HP
              </span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#71717A] uppercase">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#71717A]">
              {profile.tagline}. Building fast, minimal products with Next.js &
              TypeScript.
            </p>
          </div>

          <nav className="flex gap-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#71717A] uppercase">
                Sitemap
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-[#3F3F46] transition-colors hover:text-[#4F6BFF]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#71717A] uppercase">
                Socials
              </p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#3F3F46] transition-colors hover:text-[#4F6BFF]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="flex h-12 w-12 items-center justify-center self-start rounded-full border border-zinc-300 text-[#111111] transition-colors hover:bg-[#111111] hover:text-white md:self-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#71717A] uppercase">
            © {year} {profile.name} — All rights reserved
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#71717A] uppercase">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
