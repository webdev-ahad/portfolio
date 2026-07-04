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
  imageUrl?: string;
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
    "I build polished React interfaces with clean UX, responsive layouts, and production-ready frontend patterns.",
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
    { label: "Core stack", value: "React + TypeScript" },
    { label: "Focus", value: "UI + UX + Performance" },
    { label: "Availability", value: "Open to work" },
  ],
  skills: {
    "Frontend": ["React", "TypeScript", "JavaScript"],
    "UI & Styling": ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    "Backend & Data": ["PHP", "MySQL", "JSON"],
    "Tools": ["Git", "GitHub", "Vite", "VS Code"],
  } as const,
  projects: [
    {
      title: "Nexus Store",
      description:
        "Gaming ecommerce frontend with product pages, cart interactions, search, and responsive layouts.",
      imageUrl: "/projects/nexus-store.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      liveUrl: "https://nexus-store-neon.vercel.app",
      codeUrl: "https://github.com/webdev-ahad/nexus-store",
      highlights: ["Dynamic product pages", "Cart functionality", "Responsive UI"],
    },
    {
      title: "NeuralFlow",
      description:
        "AI chatbot frontend with multi-conversation chat, persistent history, and polished interactions.",
      imageUrl: "/projects/neuralflow.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Local Storage"],
      liveUrl: "https://neuralflow-eight-khaki.vercel.app",
      codeUrl: "https://github.com/webdev-ahad/neuralflow",
      highlights: [
        "Multi-conversation chat interface",
        "Persistent chat history",
        "Keyboard-friendly input",
      ],
    },
    {
      title: "Lawyer Booking System",
      description:
        "Responsive lawyer booking website with clean sections, smooth browsing, and a focused layout.",
      imageUrl: "/projects/lawyer-website.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      codeUrl: "https://github.com/webdev-ahad/lawyer-booking-system",
      highlights: ["Clean layout", "Booking-focused flow", "Responsive sections"],
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
    { icon: Layout, title: "Clean UI", text: "Sharp layouts and visual hierarchy." },
    { icon: Code2, title: "Typed Code", text: "Structured, maintainable frontend." },
    { icon: Sparkles, title: "UX Polish", text: "Smooth, responsive interactions." },
    { icon: ArrowUpRight, title: "Fast Delivery", text: "Reusable components, shipped cleanly." },
  ],
} as const;

