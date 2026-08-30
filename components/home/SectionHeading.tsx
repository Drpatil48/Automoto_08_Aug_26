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
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-800/80 pb-4">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1.5 rounded-full bg-red-600" />
          <h2
            id={id}
            className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl"
          >
            {title}
          </h2>
        </div>
        {description ? (
          <p className="mt-1.5 pl-4 text-xs leading-relaxed text-zinc-400 sm:text-sm">
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400 sm:self-end"
        >
          <span>{linkLabel}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      ) : null}
    </div>
  );
}
