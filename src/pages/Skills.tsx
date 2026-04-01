import {
  Atom,
  Braces,
  Database,
  Figma,
  GitBranch,
  GitMerge,
  Layers,
  Palette,
  Server,
  Sparkles,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

const skillIconMap: Record<string, LucideIcon> = {
  "React Js": Atom,
  JavaScript: Braces,
  HTML: Braces,
  CSS: Palette,
  Bootstrap: Layers,
  Tailwind: Wind,
  "Daisy UI": Sparkles,
  PHP: Server,
  MySql: Database,
  JSON: Braces,
  XML: Braces,
  Canva: Figma,
  GitHub: GitBranch,
  Git: GitMerge,
};

export default function Skills() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-1/4 h-56 w-56 rounded-full bg-violet-500/[0.05] blur-3xl" />
      </div>

      <Container className="relative">
        <div
          ref={ref}
          className={[
            "transition-opacity duration-700",
            isInView ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use"
            subtitle="A practical, job-ready stack focused on clean UI and maintainable code."
          />

          <div
            className={[
              "grid gap-6 md:grid-cols-2",
              isInView ? "stagger-skill-cards" : "",
            ].join(" ")}
          >
            {Object.entries(portfolio.skills).map(([group, items], gi) => {
              const accentEmerald = gi % 2 === 0;
              return (
                <div
                  key={group}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 shadow-lg shadow-black/25 transition duration-300 hover:border-emerald-400/25 hover:shadow-emerald-500/[0.08]"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl ${
                      accentEmerald
                        ? "bg-emerald-500/[0.12]"
                        : "bg-violet-500/[0.12]"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full blur-2xl opacity-70 ${
                      accentEmerald
                        ? "bg-violet-500/[0.06]"
                        : "bg-emerald-500/[0.06]"
                    }`}
                  />
                  <div className="relative flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full shadow-[0_0_12px] ${
                        accentEmerald
                          ? "bg-emerald-400 shadow-emerald-400/50"
                          : "bg-violet-400 shadow-violet-400/50"
                      }`}
                    />
                    <div className="text-sm font-semibold tracking-tight text-white">
                      {group}
                    </div>
                  </div>
                  <div className="relative mt-5 grid grid-cols-2 gap-3">
                    {items.map((s) => (
                      <div
                        key={s}
                        className="group/chip flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06] hover:shadow-md hover:shadow-black/20"
                      >
                        {(() => {
                          const Icon = skillIconMap[s] ?? Sparkles;
                          return (
                            <span
                              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 transition duration-300 group-hover/chip:scale-105 ${
                                accentEmerald
                                  ? "group-hover/chip:bg-emerald-500/15 group-hover/chip:ring-emerald-400/25"
                                  : "group-hover/chip:bg-violet-500/15 group-hover/chip:ring-violet-400/25"
                              }`}
                            >
                              <Icon
                                className={`h-4 w-4 ${
                                  accentEmerald ? "text-emerald-200" : "text-violet-200"
                                }`}
                              />
                            </span>
                          );
                        })()}
                        <span className="min-w-0 truncate font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

