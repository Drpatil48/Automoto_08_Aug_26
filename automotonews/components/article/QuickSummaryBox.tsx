type QuickSummaryBoxProps = {
  summary: string;
};

export function QuickSummaryBox({ summary }: QuickSummaryBoxProps) {
  if (!summary.trim()) return null;

  return (
    <aside
      className="mb-8 rounded-xl border border-accent/20 bg-accent/5 p-4 sm:p-5"
      aria-label="Quick Summary"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden="true">
          ⚡
        </span>
        <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
          झटपट माहिती · Key Takeaways
        </h2>
      </div>
      <p className="mt-2 text-base leading-relaxed text-foreground/90 font-medium">
        {summary}
      </p>
    </aside>
  );
}
