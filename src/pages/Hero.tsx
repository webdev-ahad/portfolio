import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { QuickStatRows } from "../components/QuickStatRows";
import { portfolio } from "../data/portfolio";
import { routes } from "../routes";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/18 via-violet-500/10 to-fuchsia-500/8 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {portfolio.name}
              <span className="block bg-gradient-to-r from-emerald-200 via-white to-violet-200 bg-clip-text text-transparent">
                {portfolio.role}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {portfolio.summary}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>{portfolio.location}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={routes.projects}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-300 px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200 hover:shadow-emerald-500/25"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={portfolio.resumeUrl}
                download="Ahad-Suleman-Resume.pdf"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10"
              >
                Download resume <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {portfolio.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-slate-900/50 px-3 text-xs font-medium text-slate-200 transition duration-300 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-emerald-200" />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="md:justify-self-end"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-emerald-500/18 to-violet-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/88 to-slate-950/65 p-5 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:shadow-emerald-500/10">
                <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-violet-400/10 blur-2xl" />
                <div className="relative grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold tracking-tight text-white">Quick highlights</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
                      2026
                    </div>
                  </div>
                  <QuickStatRows className="grid gap-2.5" variant="hero" />
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-slate-200">
                    Clean UI, smooth UX, and production-minded React builds.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
