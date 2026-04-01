import { NavLink } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import { routes } from "../routes";

const navItems = [
  { to: routes.home, label: "Home" },
  { to: routes.about, label: "About" },
  { to: routes.projects, label: "Projects" },
  { to: routes.skills, label: "Skills" },
  { to: routes.highlights, label: "Highlights" },
  { to: routes.contact, label: "Contact" },
] as const;

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <NavLink
          to={routes.home}
          end
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white hover:opacity-95"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/30 to-violet-500/30 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          <span className="text-sm md:text-base">{portfolio.name}</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === routes.home}
              className={({ isActive }) =>
                [
                  "rounded-full px-3 py-2 text-sm transition-colors duration-200",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-200 hover:bg-white/5 hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <NavLink
            to={routes.contact}
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 md:inline-flex"
          >
            Let’s talk
          </NavLink>

          <div className="dropdown dropdown-end md:hidden">
            <button
              type="button"
              className="btn btn-ghost btn-sm text-white hover:bg-white/5"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
            </button>
            <ul className="menu dropdown-content mt-3 w-56 rounded-2xl border border-white/10 bg-slate-900/95 p-2 text-white shadow-xl">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === routes.home}
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-white" : "text-slate-100 hover:text-white"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-1">
                <NavLink to={routes.contact} className="font-semibold text-emerald-200">
                  Let’s talk
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
