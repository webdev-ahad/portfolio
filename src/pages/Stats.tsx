import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { portfolio } from "../data/portfolio";
import useInView from "../hooks/useInView";

export default function Stats() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <section id="stats" className="py-20 md:py-24">
      <Container>
        <div ref={ref} className={isInView ? "fade-in-up" : "opacity-0"}>
          <SectionHeading
            eyebrow="Highlights"
            title="What I bring"
            subtitle="A quick snapshot of strengths and how I work day-to-day."
          />

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-2">
                {portfolio.featureIcons.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/35 p-6 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/5"
                    >
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <div className="relative">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <Icon className="h-5 w-5 text-emerald-200" />
                        </div>
                        <div className="mt-4 text-sm font-semibold text-white">{f.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-300">
                          {f.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-violet-500/10 p-6 shadow-2xl">
                <div className="text-sm font-semibold text-white">At a glance</div>
                <div className="mt-4 grid gap-3">
                  {portfolio.quickStats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3"
                    >
                      <div className="text-sm text-slate-300">{s.label}</div>
                      <div className="text-sm font-semibold text-white">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">Experience</div>
                  <div className="mt-3 grid gap-4">
                    {portfolio.experience.slice(0, 1).map((e) => (
                      <div
                        key={`${e.company}-${e.period}`}
                        className="rounded-2xl border border-white/10 bg-slate-950/20 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-white">{e.title}</div>
                            <div className="mt-1 text-sm text-slate-300">{e.company}</div>
                          </div>
                          <div className="text-xs text-slate-400">{e.period}</div>
                        </div>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                          {e.bullets.slice(0, 3).map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

