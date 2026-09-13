"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050B18]">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F7FF] text-sm font-bold text-[#050B18]">
                HP
              </span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#718096] uppercase">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#718096]">
              {profile.tagline}. Building fast, minimal products with Next.js &
              TypeScript.
            </p>
          </div>

          <nav className="flex gap-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#718096] uppercase">
                Sitemap
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-[#AAB4C5] transition-colors hover:text-[#5B8CFF]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#718096] uppercase">
                Socials
              </p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#AAB4C5] transition-colors hover:text-[#5B8CFF]"
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
            className="flex h-12 w-12 items-center justify-center self-start rounded-full border border-white/15 text-[#F5F7FF] transition-colors hover:bg-[#F5F7FF] hover:text-[#050B18] md:self-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#718096] uppercase">
            © {year} {profile.name} — All rights reserved
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#718096] uppercase">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
