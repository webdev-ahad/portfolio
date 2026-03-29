import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
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
              <a href="#about" className="text-slate-400 hover:text-white">
                About
              </a>
              <a href="#projects" className="text-slate-400 hover:text-white">
                Projects
              </a>
              <a href="#skills" className="text-slate-400 hover:text-white">
                Skills
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white">
                Contact
              </a>
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

