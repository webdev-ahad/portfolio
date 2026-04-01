/** App paths — use with `<Link>` / `<NavLink>` / `navigate()` */
export const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  highlights: "/highlights",
  contact: "/contact",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
