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
      <div className="max-w-3xl">
        <div className="flex items-center gap-3.5">
          <div className="h-7 w-2 rounded-full bg-red-600" />
          <h2
            id={id}
            className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-[2rem]"
          >
            {title}
          </h2>
        </div>
        {description ? (
          <p className="mt-2 pl-5 text-sm sm:text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="group inline-flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wider text-red-500 hover:text-red-400 sm:self-end"
        >
          <span>{linkLabel}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      ) : null}
    </div>
  );
}
