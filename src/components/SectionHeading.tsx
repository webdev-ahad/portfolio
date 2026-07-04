type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.08)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

