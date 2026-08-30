import type { Category } from "@/lib/types";

const toneClasses: Record<Category["tone"], string> = {
  ev: "bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-bold",
  bike: "bg-amber-950/80 border border-amber-800/60 text-amber-400 font-bold",
  car: "bg-red-950/80 border border-red-800/60 text-red-400 font-bold",
  guide: "bg-blue-950/80 border border-blue-800/60 text-blue-400 font-bold",
  daily: "bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold",
  neutral: "bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: Category["tone"];
  className?: string;
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
