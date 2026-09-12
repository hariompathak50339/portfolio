export const profile = {
  name: "Hariom Pathak",
  firstName: "Hariom",
  lastName: "Pathak",
  role: "Full-Stack Developer",
  tagline: "Diploma in Information Technology — Year 2",
  college: "Silver Oak University, Ahmedabad",
  location: "India",
  // 👆 Change this to your real email address
  email: "hello@hariompathak.in",
  availability: "Open to internships & collaborations",
  bio: [
    "I'm Hariom Pathak, a second-year Diploma in Information Technology student at Silver Oak University, Ahmedabad, who loves turning ideas into fast, minimal products for the web.",
    "My stack is modern JavaScript — Next.js, React and TypeScript — and I care about the details: typography, motion, performance and pixel-perfect responsive layouts.",
    "Most recently I designed, built and shipped FinePrint — a tool that reads the fine print so you don't have to — live on my own domain.",
  ],
  currently: [
    "Pursuing Diploma in IT (2nd year)",
    "Shipping with Next.js + TypeScript",
    "Learning system design & backend",
    "Open to internships",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/hariompathak50339" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hariom-pathak" },
  { label: "Instagram", href: "https://www.instagram.com/hariompathak_0001" },
];

export const stats = [
  { value: "02", label: "Year of Diploma in IT" },
  { value: "01", label: "Product shipped to production" },
  { value: "10+", label: "Technologies in the toolbox" },
];

export type SkillGroup = {
  title: string;
  index: string;
  skills: { name: string; level: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    index: "01",
    skills: [
      { name: "Next.js", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
    ],
  },
  {
    title: "Languages",
    index: "02",
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Python", level: "Familiar" },
      { name: "C", level: "Familiar" },
      { name: "HTML / CSS", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Platform",
    index: "03",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Vercel", level: "Proficient" },
      { name: "Node.js", level: "Familiar" },
      { name: "REST APIs", level: "Proficient" },
      { name: "Figma", level: "Familiar" },
    ],
  },
];

export type Project = {
  title: string;
  index: string;
  year: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  status: "Live" | "In progress" | "Concept";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "FinePrint",
    index: "01",
    year: "2025",
    description:
      "Read the fine print, before you click. Paste any Terms of Service or Privacy Policy — or drop in a URL — and FinePrint distils it into a plain-English summary with the key risks flagged. Designed, built and deployed end-to-end on a custom domain.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Summarization", "Vercel"],
    live: "https://fineprint.hariompathak.in",
    github: "https://github.com/hariompathak50339",
    status: "Live",
    featured: true,
  },
  {
    title: "Linkfolio",
    index: "02",
    year: "2026",
    description:
      "A minimal, blazing-fast link-in-bio page with a monochrome aesthetic, view analytics and one-command deploys. My playground for edge rendering and OG-image generation.",
    tags: ["Next.js", "TypeScript", "Edge Runtime"],
    github: "https://github.com/hariompathak50339",
    status: "In progress",
  },
  {
    title: "Taskflow",
    index: "03",
    year: "2026",
    description:
      "A keyboard-first task manager concept — offline-capable, zero clutter, with local persistence and buttery list animations. Currently in design.",
    tags: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/hariompathak50339",
    status: "Concept",
  },
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const journey: Milestone[] = [
  {
    year: "2024",
    title: "Started Diploma in IT — Silver Oak University",
    description:
      "Began my Diploma in Information Technology at Silver Oak University, Ahmedabad — foundations in C programming, computer fundamentals, HTML/CSS and how the web actually works.",
  },
  {
    year: "2025",
    title: "Went all-in on modern JavaScript",
    description:
      "React, Next.js and TypeScript. Learned by building — components, routing, APIs, deployments on Vercel.",
  },
  {
    year: "2025",
    title: "Shipped FinePrint to production",
    description:
      "Designed, built and deployed fineprint.hariompathak.in — my first live product on a custom domain.",
  },
  {
    year: "2026",
    title: "Second year — levelling up",
    description:
      "Deepening the backend (Node.js, databases), contributing, freelancing and hunting for internships.",
  },
];

export const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git & GitHub",
  "Vercel",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
