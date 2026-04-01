import { useCountUp } from "../hooks/useCountUp";
import useInView from "../hooks/useInView";

/** Values like "10+" animate; plain text (e.g. "React • TS") stays static. */
function parseCountableStat(value: string): { n: number; suffix: string } | null {
  const t = value.trim();
  const withPlus = t.match(/^(\d+)\+$/);
  if (withPlus) {
    const n = Number.parseInt(withPlus[1], 10);
    if (n >= 1 && n <= 999) return { n, suffix: "+" };
  }
  const plain = t.match(/^(\d+)$/);
  if (plain) {
    const n = Number.parseInt(plain[1], 10);
    if (n >= 1 && n <= 199) return { n, suffix: "" };
  }
  return null;
}

type StatValueProps = {
  value: string;
  className?: string;
  /** Slightly different feel between hero vs lower sections */
  durationMs?: number;
  /**
   * False while a parent section is hidden (e.g. opacity-0) so the counter doesn’t run
   * before the viewer actually reaches that block.
   */
  enabled?: boolean;
};

export function StatValue({
  value,
  className,
  durationMs = 1050,
  enabled = true,
}: StatValueProps) {
  const parsed = parseCountableStat(value);
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.15, once: true });
  const run = Boolean(enabled && inView);
  const count = useCountUp(parsed?.n ?? 0, Boolean(parsed) && run, durationMs);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  if (!enabled) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {count}
      {parsed.suffix}
    </span>
  );
}
