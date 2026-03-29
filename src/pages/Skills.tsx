import {
  Atom,
  Braces,
  Database,
  Figma,
  GitBranch,
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
};

export default function Skills() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="skills" className="py-20 md:py-24">
      <Container>
        <div ref={ref} className={isInView ? "fade-in-up" : "opacity-0"}>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use"
            subtitle="A practical, job-ready stack focused on clean UI and maintainable code."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(portfolio.skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/35 p-6 hover:bg-white/5"
              >
                <div className="text-sm font-semibold text-white">{group}</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {items.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/20 px-3 py-2 text-sm text-slate-200"
                    >
                      {(() => {
                        const Icon = skillIconMap[s] ?? Sparkles;
                        return (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                            <Icon className="h-4 w-4 text-emerald-200" />
                          </span>
                        );
                      })()}
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

