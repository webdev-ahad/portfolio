import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import useInView from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function About() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <section id="about" className="py-20 md:py-24">
      <Container>
        <div
          ref={ref}
          className={[
            "grid items-start gap-12 md:grid-cols-2",
            isInView ? "fade-in-up" : "opacity-0",
          ].join(" ")}
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/40 p-7">
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

          <div className="grid gap-4">
            {portfolio.featureIcons.slice(0, 4).map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/30 p-6 hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-emerald-200" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{f.title}</div>
                      <div className="mt-1 text-sm text-slate-300">{f.text}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 p-6">
              <div className="text-sm font-semibold text-white">Reach me</div>
              <div className="mt-2 text-sm text-slate-300">{portfolio.email}</div>
              <a
                href="#contact"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

