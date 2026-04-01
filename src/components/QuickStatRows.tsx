import { portfolio } from "../data/portfolio";
import { StatValue } from "./StatValue";

type QuickStatRowsProps = {
  className?: string;
  /** Faster tick in hero (above the fold) vs deeper sections */
  variant?: "hero" | "section";
  /** Tie counters to parent section visibility (e.g. Highlights block reveal). */
  statAnimationEnabled?: boolean;
};

export function QuickStatRows({
  className = "grid gap-2.5",
  variant = "section",
  statAnimationEnabled = true,
}: QuickStatRowsProps) {
  const durationMs = variant === "hero" ? 950 : 1100;

  return (
    <div className={className}>
      {portfolio.quickStats.map((s, i) => {
        const emerald = i % 2 === 0;
        return (
          <div
            key={s.label}
            className="group/row flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-3 transition duration-300 hover:border-white/18 hover:bg-white/[0.04]"
          >
            <div
              className={`h-9 w-1 shrink-0 rounded-full ${
                emerald
                  ? "bg-gradient-to-b from-emerald-400 to-emerald-600/40"
                  : "bg-gradient-to-b from-violet-400 to-violet-600/40"
              }`}
            />
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
              <div className="text-sm text-slate-300">{s.label}</div>
              <StatValue
                value={s.value}
                durationMs={durationMs}
                enabled={statAnimationEnabled}
                className="text-sm font-semibold tabular-nums text-white"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
