import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { portfolio } from "../data/portfolio";

export default function Project() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200">
                Work
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
                Selected Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                Polished frontend builds with responsive UI, reusable components, and modern development practices.
              </p>
            </div>
            <a
              href="https://github.com/webdev-ahad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-white transition duration-300 hover:border-emerald-300/30 hover:bg-white/[0.08]"
            >
              View all projects <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div
            className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-2"
          >
            {portfolio.projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/60 shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400/35 hover:shadow-2xl hover:shadow-emerald-500/[0.1]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/[0.04] blur-2xl transition duration-500 group-hover:bg-emerald-500/10" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                {p.imageUrl ? (
                  <div className="relative flex aspect-[1.9/1] w-full items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),rgba(2,6,23,0.92)_55%)]">
                    <img
                      src={p.imageUrl}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div
                    className="relative flex aspect-[16/10] w-full items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-950"
                    aria-hidden
                  >
                    <span className="text-4xl font-bold tracking-tight text-white/10">
                      {p.title.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="relative flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight text-white">{p.title}</h3>
                    {i === 0 ? (
                      <span className="shrink-0 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="project-card-description mt-3 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-200 transition group-hover:border-emerald-300/20 group-hover:bg-emerald-300/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.highlights?.length ? (
                    <ul className="mt-4 space-y-2 text-xs text-slate-300">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2.5 leading-snug">
                          <span
                            className={`mt-1.5 h-1 w-1 shrink-0 rounded-full shadow-[0_0_6px] ${i % 2 === 0
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

                  <div
                    className={[
                      "mt-auto grid gap-3 pt-5",
                      p.liveUrl && p.codeUrl ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
                    ].join(" ")}
                  >
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-emerald-300 px-3 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200 hover:shadow-emerald-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                      >
                        Live Demo <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                    {p.codeUrl ? (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                      >
                        Source Code <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
