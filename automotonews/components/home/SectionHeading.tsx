import Link from "next/link";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  id,
  title,
  description,
  href,
  linkLabel = "View all",
  tone = "light",
}: SectionHeadingProps) {
  const titleClass =
    tone === "dark" ? "text-header-text" : "text-foreground";
  const descriptionClass =
    tone === "dark" ? "text-white/70" : "text-muted";
  const linkClass =
    tone === "dark"
      ? "text-white hover:text-white/85"
      : "text-accent hover:text-accent-dark";

  return (
    <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <h2
          id={id}
          className={`text-2xl font-bold tracking-tight ${titleClass}`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-1 text-sm leading-relaxed sm:text-base ${descriptionClass}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className={`inline-flex min-h-11 items-center text-sm font-semibold ${linkClass}`}
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
