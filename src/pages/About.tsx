import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { routes } from "../routes";
import { SectionHeading } from "../components/SectionHeading";
import useInView from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function About() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-56 w-56 rounded-full bg-emerald-500/[0.06] blur-3xl" />
      </div>

      <Container className="relative">
        <div
          ref={ref}
          className="grid items-start gap-12 md:grid-cols-2"
        >
          <div
            className={[
              "rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/50 p-7 shadow-lg shadow-black/15 transition duration-300 hover:border-white/15",
              isInView ? "about-lead" : "opacity-0",
            ].join(" ")}
          >
            <SectionHeading
              eyebrow="About"
              title="Building modern interfaces with care."
              subtitle="I focus on clean code, thoughtful UX, and reliable UI patterns that scale."
            />

            <div className="grid gap-3 text-sm leading-relaxed text-slate-300">
              <p>
                I’m a frontend developer who enjoys turning ideas into fast, accessible, and
                beautiful web experiences. My main tools are React, TypeScript, Tailwind, and
                modern component patterns.
              </p>
              <p>
                I like shipping small, polished iterations: clean layouts, consistent spacing,
                readable typography, and performance-conscious decisions.
              </p>
            </div>
          </div>

          <div
            className={[
              "grid gap-4",
              isInView ? "stagger-about-cards" : "opacity-0",
            ].join(" ")}
          >
            {portfolio.featureIcons.slice(0, 4).map((f, i) => {
              const Icon = f.icon;
              const emerald = i % 2 === 0;
              return (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-950/45 p-6 transition duration-300 hover:border-white/15 hover:shadow-md hover:shadow-black/15"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${
                      emerald
                        ? "bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-transparent"
                        : "bg-gradient-to-br from-violet-500/[0.08] via-transparent to-transparent"
                    }`}
                  />
                  <div className="relative flex items-start gap-3">
                    <div
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/10 transition duration-300 group-hover:scale-[1.03] ${
                        emerald
                          ? "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5"
                          : "bg-gradient-to-br from-violet-500/20 to-violet-500/5"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${emerald ? "text-emerald-100" : "text-violet-100"}`}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-white">
                        {f.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">{f.text}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-emerald-500/12 via-slate-950/30 to-violet-500/12 p-6 shadow-lg shadow-black/10">
              <div className="text-sm font-semibold tracking-tight text-white">Reach me</div>
              <div className="mt-2 text-sm text-slate-300">{portfolio.email}</div>
              <Link
                to={routes.contact}
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
