import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top when the route path changes (single-page sections vs full home). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
