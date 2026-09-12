"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, socials } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="05" eyebrow="Contact" title="Let's build something great." />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-md text-base leading-relaxed text-neutral-400">
              Have an internship, a freelance idea, or just want to talk
              Next.js? My inbox is always open — I usually reply within a day.
            </p>
            <button
              onClick={copyEmail}
              className="mt-8 flex w-full items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#111111] px-6 py-5 text-left hover:border-white/40"
            >
              <span className="font-mono text-sm break-all sm:text-base">
                {profile.email}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </span>
            </button>
            {copied && (
              <p className="mt-2 font-mono text-xs tracking-widest text-emerald-300 uppercase">
                Copied to clipboard
              </p>
            )}
            <div className="mt-8 space-y-1">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-white/10 py-4 hover:border-white/40"
                >
                    <span className="font-display text-xl font-bold tracking-tight">
                    <span className="font-mono mr-3 text-xs font-normal text-neutral-500">
                      0{i + 1}
                    </span>
                    {s.label}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-8"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase">
              Send a message
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-white/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-white/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline and goals…"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-white/60 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-neutral-300"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
