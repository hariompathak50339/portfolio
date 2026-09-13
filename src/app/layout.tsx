import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hariom Pathak — Full-Stack Developer",
  description:
    "Portfolio of Hariom Pathak, a Diploma in IT student building fast, minimal web experiences with Next.js and TypeScript. Creator of FinePrint.",
  keywords: ["Hariom Pathak", "Portfolio", "Next.js", "TypeScript", "Web Developer", "FinePrint"],
  authors: [{ name: "Hariom Pathak" }],
  openGraph: {
    title: "Hariom Pathak — Full-Stack Developer",
    description:
      "Second-year Diploma IT student crafting modern web apps with Next.js & TypeScript.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050B18",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} bg-[#050B18] text-[#AAB4C5] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
