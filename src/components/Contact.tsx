"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check, Send, Mail, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, socials } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toEmail = profile.email;
  const phone = (profile as { phone?: string }).phone ?? "";
  const phoneDisplay =
    (profile as { phoneDisplay?: string }).phoneDisplay ?? phone;
  const whatsappNumber = phone.replace(/[^0-9]/g, "");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(toEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const buildSubject = () =>
    encodeURIComponent(`Portfolio inquiry from ${form.name || "your site"}`);
  const buildBody = () =>
    encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      toEmail
    )}&su=${buildSubject()}&body=${buildBody()}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const openMailApp = () => {
    window.location.href = `mailto:${toEmail}?subject=${buildSubject()}&body=${buildBody()}`;
  };

  const onSubmitGmail = (e: FormEvent) => {
    e.preventDefault();
    openGmail();
  };

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-zinc-200 bg-[#F7F7F5]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="03" eyebrow="Contact" title="Let's build something great." />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-md text-base leading-relaxed text-[#3F3F46]">
              Have an internship, a freelance idea, or just want to talk
              Next.js? My inbox is always open — I usually reply within a day.
            </p>
            <button
              onClick={copyEmail}
              className="mt-8 flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-left shadow-sm transition-colors hover:border-[#111111]"
            >
              <span className="font-mono text-sm break-all text-[#111111] sm:text-base">
                {toEmail}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </span>
            </button>
            {copied ? (
              <p className="mt-2 font-mono text-xs tracking-widest text-emerald-600 uppercase">
                Copied to clipboard
              </p>
            ) : (
              <p className="mt-2 font-mono text-xs tracking-widest text-[#71717A] uppercase">
                Click to copy
              </p>
            )}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  toEmail
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3F3F46]"
              >
                <Mail className="h-4 w-4" />
                Open in Gmail
              </a>
              <a
                href={`mailto:${toEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111]"
              >
                Mail app
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {phone && (
              <div className="mt-4">
                <button
                  onClick={copyPhone}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-left shadow-sm transition-colors hover:border-[#111111]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-[#111111]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-sm text-[#111111] sm:text-base">
                      {phoneDisplay}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
                    {copiedPhone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </span>
                </button>
                {copiedPhone ? (
                  <p className="mt-2 font-mono text-xs tracking-widest text-emerald-600 uppercase">
                    Number copied
                  </p>
                ) : (
                  <p className="mt-2 font-mono text-xs tracking-widest text-[#71717A] uppercase">
                    Click to copy number
                  </p>
                )}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3F3F46]"
                  >
                    <Phone className="h-4 w-4" />
                    Call me
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Hi Hariom! I saw your portfolio and want to connect."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8 space-y-1">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-zinc-200 py-4 transition-colors hover:border-[#111111]"
                >
                    <span className="font-display text-xl font-bold tracking-tight text-[#111111]">
                    <span className="font-mono mr-3 text-xs font-normal text-[#4F6BFF]">
                      0{i + 1}
                    </span>
                    {s.label}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-[#111111] transition-colors hover:bg-[#111111] hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmitGmail}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-[#71717A] uppercase">
              Send a message
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#71717A]">
              This opens Gmail with your message pre-filled to {toEmail}.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs tracking-widest text-[#71717A] uppercase">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#71717A] focus:border-[#4F6BFF] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs tracking-widest text-[#71717A] uppercase">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#71717A] focus:border-[#4F6BFF] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs tracking-widest text-[#71717A] uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline and goals…"
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-[#111111] placeholder:text-[#71717A] focus:border-[#4F6BFF] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#3F3F46]"
              >
                Send via Gmail
                <Send className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={openMailApp}
                className="w-full text-center font-mono text-xs tracking-widest text-[#71717A] uppercase transition-colors hover:text-[#111111]"
              >
                or use default mail app instead
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
