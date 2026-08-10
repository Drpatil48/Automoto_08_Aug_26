import type { Category } from "@/lib/types";

const toneClasses: Record<Category["tone"], string> = {
  ev: "bg-emerald-100 text-emerald-900",
  bike: "bg-orange-100 text-orange-950",
  car: "bg-sky-100 text-sky-950",
  guide: "bg-amber-100 text-amber-950",
  daily: "bg-zinc-200 text-zinc-900",
  neutral: "bg-stone-200 text-stone-900",
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
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
