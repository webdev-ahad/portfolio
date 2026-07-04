import {
  Atom,
  Braces,
  CodeXml,
  Database,
  FileJson,
  Figma,
  GitMerge,
  Github,
  LayoutGrid,
  Paintbrush,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";

const skillIconMap: Record<string, LucideIcon> = {
  React: Atom,
  TypeScript: Braces,
  JavaScript: Braces,
  HTML: CodeXml,
  CSS: Paintbrush,
  Bootstrap: LayoutGrid,
  "Tailwind CSS": Wind,
  "Daisy UI": Sparkles,
  PHP: Server,
  MySQL: Database,
  JSON: FileJson,
  XML: CodeXml,
  Canva: Figma,
  GitHub: Github,
  Git: GitMerge,
  Vite: Sparkles,
  "VS Code": CodeXml,
};

const groupIconMap: Record<string, LucideIcon> = {
  Frontend: CodeXml,
  "UI & Styling": Paintbrush,
  "Backend & Data": Database,
  Data: FileJson,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-1/4 h-56 w-56 rounded-full bg-violet-500/[0.05] blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Skills"
            subtitle="A focused stack for clean interfaces, fast builds, and maintainable frontend work."
          />

          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {Object.entries(portfolio.skills).map(([group, items], gi) => {
              const accentEmerald = gi % 2 === 0;
              const GroupIcon = groupIconMap[group] ?? Terminal;
              return (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: gi * 0.06, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/60 p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-xl hover:shadow-emerald-500/[0.08]"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl ${
                      accentEmerald
                        ? "bg-emerald-500/[0.12]"
                        : "bg-violet-500/[0.12]"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute -bottom-12 -left-8 h-24 w-24 rounded-full blur-2xl opacity-70 ${
                      accentEmerald
                        ? "bg-violet-500/[0.06]"
                        : "bg-emerald-500/[0.06]"
                    }`}
                  />
                  <div className="relative flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] shadow-[0_0_18px] ${
                        accentEmerald
                          ? "text-emerald-200 shadow-emerald-400/10"
                          : "text-violet-200 shadow-violet-400/10"
                      }`}
                    >
                      <GroupIcon className="h-4 w-4" />
                    </span>
                    <div className="text-sm font-semibold tracking-tight text-white">
                      {group}
                    </div>
                  </div>
                  <div className="relative mt-4 grid gap-2">
                    {items.map((s) => (
                      <div
                        key={s}
                        className="group/chip flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-slate-950/40 px-2.5 py-2 text-xs text-slate-200 transition duration-300 hover:border-emerald-300/20 hover:bg-white/[0.06]"
                      >
                        {(() => {
                          const Icon = skillIconMap[s] ?? Sparkles;
                          return (
                            <span
                              className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-900/80 ring-1 ring-white/10 transition duration-300 group-hover/chip:scale-105 ${
                                accentEmerald
                                  ? "group-hover/chip:bg-emerald-500/15 group-hover/chip:ring-emerald-400/25"
                                  : "group-hover/chip:bg-violet-500/15 group-hover/chip:ring-violet-400/25"
                              }`}
                            >
                              <Icon
                                className={`h-3.5 w-3.5 ${
                                  accentEmerald ? "text-emerald-200" : "text-violet-200"
                                }`}
                              />
                            </span>
                          );
                        })()}
                        <span className="font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

