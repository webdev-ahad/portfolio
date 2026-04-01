import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Layout,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  highlights?: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const portfolio = {
  name: "Ahad Suleman",
  role: "Frontend Developer",
  location: "Karachi, Pakistan",
  logo: "/favicon.png",
  summary:
    "I build clean, responsive web apps with React, TypeScript, and modern UI systems. I care about performance, accessibility, and great UX.",
  email: "ahad.suleman.spts@gmail.com",
  resumeUrl: "/Ahad-Suleman-Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/webdev-ahad", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahad-suleman-269946370/",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:ahad.suleman.spts@gmail.com", icon: Mail },
  ] satisfies SocialLink[],
  quickStats: [
    { label: "Projects", value: "10+" },
    { label: "Core stack", value: "React • TS" },
    { label: "Focus", value: "UI • UX • Perf" },
    { label: "Availability", value: "Open to work" },
  ],
  skills: {
    "Frontend": ["HTML", "CSS", "JavaScript", "React Js"],
    "UI & Styling": ["Bootstrap", "Tailwind", "Daisy UI", "Canva"],
    "Backend & Database": ["PHP", "MySql"],
    "Data": ["JSON", "XML"],
    "Tools": ["GitHub", "Git"],
  } as const,
  projects: [
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio with smooth sections, animations, and a clean design system.",
      tags: ["React", "TypeScript", "Tailwind", "DaisyUI"],
      liveUrl: "#",
      codeUrl: "#",
      highlights: ["Responsive layout", "Reusable components", "Clean UI"],
    },
    {
      title: "Landing Page / UI Kit",
      description:
        "A component-driven UI with reusable cards, buttons, and layout primitives for fast shipping.",
      tags: ["React", "Tailwind"],
      liveUrl: "#",
      codeUrl: "#",
      highlights: ["Design system", "Consistent spacing", "Accessible components"],
    },
    {
      title: "Dashboard (Demo)",
      description:
        "A dashboard-style app showcasing charts/cards patterns and thoughtful information hierarchy.",
      tags: ["React", "TypeScript"],
      liveUrl: "#",
      codeUrl: "#",
      highlights: ["Information architecture", "Reusable widgets", "Polished UI"],
    },
  ] satisfies Project[],
  experience: [
    {
      title: "Frontend Developer (Learner/Intern)",
      company: "Self-driven projects",
      period: "2024 — Present",
      bullets: [
        "Built responsive UI with React + Tailwind and component-driven structure.",
        "Improved page performance and UX with clean layouts and reusable patterns.",
        "Worked with Git, branches, and iterative development.",
      ],
    },
  ] satisfies ExperienceItem[],
  featureIcons: [
    { icon: Layout, title: "Clean UI", text: "Modern, consistent spacing and typography." },
    { icon: Code2, title: "TypeScript", text: "Safer code with better structure." },
    { icon: Sparkles, title: "UX First", text: "Responsive, accessible interactions." },
    { icon: ArrowUpRight, title: "Fast Shipping", text: "Reusable components and patterns." },
    { icon: FileDown, title: "Resume Ready", text: "Simple, recruiter-friendly sections." },
  ],
} as const;

