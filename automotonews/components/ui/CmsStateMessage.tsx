type CmsStateMessageProps = {
  title: string;
  message: string;
  tone?: "info" | "error" | "empty";
};

export function CmsStateMessage({
  title,
  message,
  tone = "info",
}: CmsStateMessageProps) {
  const styles =
    tone === "error"
      ? "border-red-200 bg-red-50 text-red-950"
      : tone === "empty"
        ? "border-dashed border-border bg-surface text-muted"
        : "border-amber-200 bg-amber-50 text-amber-950";

  return (
    <div className={`rounded-xl border p-5 ${styles}`} role="status">
      <p className="font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-relaxed">{message}</p>
    </div>
  );
}
