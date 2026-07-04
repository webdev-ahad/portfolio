import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { QuickStatRows } from "../components/QuickStatRows";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

export default function Stats() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <section id="stats" className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 -translate-x-1/4 rounded-full bg-violet-500/[0.07] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-500/[0.08] blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Highlights"
            title="What I bring"
            subtitle="Sharp execution, clean components, and interfaces that feel finished."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <div
                className="grid gap-4 sm:grid-cols-2"
              >
                {portfolio.featureIcons.map((f, i) => {
                  const Icon = f.icon;
                  const emerald = i % 2 === 0;
                  return (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/55 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:shadow-xl hover:shadow-emerald-500/[0.08]"
                    >
                      <div
                        className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${
                          emerald
                            ? "bg-gradient-to-br from-emerald-500/[0.12] via-transparent to-transparent"
                            : "bg-gradient-to-br from-violet-500/[0.12] via-transparent to-transparent"
                        }`}
                      />
                      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl transition duration-500 group-hover:bg-white/[0.06]" />
                      <div className="relative">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ring-white/10 transition duration-300 group-hover:scale-[1.04] ${
                            emerald
                              ? "bg-gradient-to-br from-emerald-500/25 to-emerald-500/5"
                              : "bg-gradient-to-br from-violet-500/25 to-violet-500/5"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              emerald ? "text-emerald-100" : "text-violet-100"
                            }`}
                          />
                        </div>
                        <div className="mt-4 text-sm font-semibold tracking-tight text-white">
                          {f.title}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-400">
                          {f.text}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <aside>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/[0.1] via-slate-950/50 to-violet-500/[0.1] p-5 shadow-2xl shadow-black/30">
                <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-violet-400/10 blur-3xl" />

                <div className="relative">
                  <div className="text-sm font-semibold tracking-tight text-white">
                    At a glance
                  </div>
                  <QuickStatRows
                    className="mt-4 grid gap-2.5"
                    variant="section"
                    statAnimationEnabled={isInView}
                  />

                  <div className="mt-6">
                    <div className="text-sm font-semibold tracking-tight text-white">
                      Experience
                    </div>
                    <div className="mt-3 grid gap-4">
                      {portfolio.experience.slice(0, 1).map((e) => (
                        <div
                          key={`${e.company}-${e.period}`}
                          className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 shadow-inner shadow-black/20"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-white">{e.title}</div>
                              <div className="mt-1 text-sm text-slate-300">{e.company}</div>
                            </div>
                            <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
                              {e.period}
                            </div>
                          </div>
                          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                            {e.bullets.slice(0, 2).map((b) => (
                              <li key={b} className="flex gap-2.5 leading-snug">
                                <span
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.5)]"
                                  aria-hidden
                                />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

