import { Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import { routes } from "../routes";

const sectionLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.about, label: "About" },
  { to: routes.projects, label: "Projects" },
  { to: routes.skills, label: "Skills" },
  { to: routes.highlights, label: "Highlights" },
  { to: routes.contact, label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold text-white">{portfolio.name}</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {portfolio.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Sections
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              {sectionLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="text-slate-400 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Links
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              {portfolio.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-slate-400 hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:text-right">
          <a
            href={portfolio.resumeUrl}
            download="Ahad-Suleman-Resume.pdf"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Download resume
          </a>
          <div className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
