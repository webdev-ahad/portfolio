import { ExternalLink, Github } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

export default function Project() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-3xl" />
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
            eyebrow="Work"
            title="Selected projects"
            subtitle="A few pieces I’ve built recently. Replace the demo links with your real ones in src/data/portfolio.ts."
          />

          <div
            className={[
              "grid gap-6 md:grid-cols-3",
              isInView ? "stagger-project-cards" : "",
            ].join(" ")}
          >
            {portfolio.projects.map((p, i) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/50 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-emerald-500/10"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/[0.04] blur-2xl transition duration-500 group-hover:bg-emerald-500/10" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-base font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-white/18"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.highlights?.length ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2.5 leading-snug">
                          <span
                            className={`mt-1.5 h-1 w-1 shrink-0 rounded-full shadow-[0_0_6px] ${
                              i % 2 === 0
                                ? "bg-emerald-400 shadow-emerald-400/40"
                                : "bg-violet-400 shadow-violet-400/40"
                            }`}
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                      >
                        Live <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                    {p.codeUrl ? (
                      <a
                        href={p.codeUrl}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/18 hover:bg-white/10"
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
