import { ExternalLink, Github } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

export default function Project() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="projects" className="py-20 md:py-24">
      <Container>
        <div ref={ref} className={isInView ? "fade-in-up" : "opacity-0"}>
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            subtitle="A few pieces I’ve built recently. Replace the demo links with your real ones in src/data/portfolio.ts."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.projects.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/35 p-6 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.highlights?.length ? (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                      >
                        Live <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                    {p.codeUrl ? (
                      <a
                        href={p.codeUrl}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        Code <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

