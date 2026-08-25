import Link from "next/link";
import { PRIMARY_NAV, SITE_NAME, SITE_TAGLINE, UTILITY_NAV } from "@/lib/constants";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-header text-header-text shadow-sm">
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="group flex min-w-0 flex-col"
            aria-label={`${SITE_NAME} home`}
          >
            <span className="truncate text-lg font-bold tracking-tight sm:text-xl">
              {SITE_NAME}
            </span>
            <span className="truncate text-xs text-white/70 group-hover:text-white/90">
              {SITE_TAGLINE}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label="Utility" className="hidden items-center gap-1 sm:flex">
              {UTILITY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/search"
              aria-label="Search articles"
              className="inline-flex size-11 items-center justify-center rounded-md text-white/85 hover:bg-white/10 hover:text-white"
            >
              <svg
                className="size-5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>

      <div className="hidden border-b-2 border-accent bg-header md:block">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Primary" className="overflow-x-auto">
            <ul className="flex min-h-12 items-stretch gap-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className="inline-flex h-full min-h-12 items-center px-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
