"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] ${
          scrolled
            ? "border-b border-zinc-200 bg-[#F7F7F5]/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white">
              HP
            </span>
            <span className="font-mono text-xs tracking-[0.25em] text-[#3F3F46] uppercase">
              hariom
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-[0.2em] text-[#71717A] uppercase transition-colors hover:text-[#111111]"
                >
                  <span className="mr-1 text-[#4F6BFF]">0{i + 1}</span> {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3F3F46] md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-[#111111] md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[110] flex flex-col bg-[#F7F7F5] md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-mono text-xs tracking-[0.25em] text-[#71717A] uppercase">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-[#111111]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {[...navLinks, { label: "Top", href: "#top" }].map((link, i) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-zinc-200 py-4 text-3xl font-bold tracking-tight text-[#111111]"
              >
                <span className="font-mono mr-3 text-sm font-normal text-[#4F6BFF]">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="px-8 pb-10 font-mono text-xs tracking-widest text-[#71717A] uppercase">
            {profile.availability}
          </p>
        </div>
      )}
    </>
  );
}
