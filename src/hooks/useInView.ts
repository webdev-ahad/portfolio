import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  /** If true, stops observing after first time it becomes visible */
  once?: boolean;
};

export default function useInView<T extends Element>(options: UseInViewOptions = {}) {
  const { once, ...observerOptions } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsInView(true);
        if (once) observer.unobserve(el);
      }
    }, observerOptions);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

  return [ref, isInView] as const;
}

