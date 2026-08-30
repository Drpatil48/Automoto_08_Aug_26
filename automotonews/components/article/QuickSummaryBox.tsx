type QuickSummaryBoxProps = {
  summary: string;
};

export function QuickSummaryBox({ summary }: QuickSummaryBoxProps) {
  if (!summary.trim()) return null;

  return (
    <aside
      className="mb-8 rounded-2xl border border-red-900/50 bg-red-950/20 p-5 sm:p-6"
      aria-label="Quick Summary"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-6 items-center justify-center rounded-md bg-red-600 font-black text-xs text-white">
          ⚡
        </span>
        <h2 className="text-xs font-black uppercase tracking-wider text-red-400">
          झटपट माहिती | KEY TAKEAWAYS
        </h2>
      </div>
      <p className="mt-3 text-sm sm:text-base leading-relaxed font-semibold text-zinc-200">
        {summary}
      </p>
    </aside>
  );
}
