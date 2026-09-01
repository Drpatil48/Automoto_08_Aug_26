import Link from "next/link";
import { PRIMARY_NAV, SITE_NAME, SITE_TAGLINE, UTILITY_NAV } from "@/lib/constants";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 text-zinc-100 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3.5"
          aria-label={`${SITE_NAME} home`}
        >
          <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-red-600 font-black text-white text-base sm:text-lg shadow-md shadow-red-900/30 transition-transform group-hover:scale-105">
            A
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-white whitespace-nowrap">
              AUTOMOTO<span className="text-red-500">NEWS</span>
              <span className="text-xs text-zinc-400 font-normal ml-0.5">.in</span>
            </span>
            <span className="truncate text-[11px] sm:text-[13px] font-semibold text-zinc-400 transition-colors group-hover:text-zinc-300">
              {SITE_TAGLINE}
            </span>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <nav aria-label="Utility" className="hidden items-center gap-2 sm:flex">
            {UTILITY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-4 text-xs sm:text-sm font-bold text-zinc-300 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
              >
                {item.label === "Compare" ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="size-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            ))}
          </nav>
          <Link
            href="/search"
            aria-label="Search articles"
            className="inline-flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition-colors hover:border-red-600/50 hover:text-white"
          >
            <svg
              className="size-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>

      <div className="hidden border-t border-zinc-800/60 bg-zinc-950/80 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Primary">
            <ul className="flex min-h-12 items-center gap-1.5 overflow-x-auto py-1.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-lg px-4 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 transition-all hover:bg-zinc-800/70 hover:text-white"
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
