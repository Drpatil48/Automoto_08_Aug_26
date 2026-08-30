import Link from "next/link";
import { PRIMARY_NAV } from "@/lib/constants";

export default function NotFound() {
  const topics = PRIMARY_NAV.filter((item) => item.href !== "/");

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        The page you requested is unavailable. It may have moved, or the category/article
        does not exist in WordPress.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Go home
        </Link>
        {topics.slice(0, 3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-semibold hover:bg-background"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
