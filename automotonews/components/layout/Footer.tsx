import Link from "next/link";
import {
  FOOTER_NAV,
  PRIMARY_NAV,
  SITE_CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const exploreLinks = PRIMARY_NAV.filter((item) => item.href !== "/");

  return (
    <footer className="mt-auto border-t border-zinc-800/80 bg-zinc-950 text-zinc-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-12">
        <div className="space-y-4 md:col-span-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-red-600 font-black text-white shadow-md shadow-red-900/30">
              A
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                AUTOMOTO<span className="text-red-600">NEWS</span>
                <span className="text-xs text-zinc-400 font-normal ml-1">.in</span>
              </span>
              <p className="text-xs text-zinc-400 font-medium">{SITE_TAGLINE}</p>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-zinc-400">
            {SITE_DESCRIPTION}
          </p>
          <p className="text-xs text-zinc-300">
            Editorial Email:{" "}
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="font-semibold text-red-400 underline-offset-4 hover:underline"
            >
              {SITE_CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav aria-label="Explore topics" className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-red-500">
            EXPLORE CATEGORIES
          </h2>
          <ul className="mt-4 space-y-2">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Editorial policies" className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-red-500">
            POLICIES & LEGAL
          </h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-zinc-900 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-zinc-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. सर्व हक्क सुरक्षित (All rights reserved).
          </p>
          <p className="text-[11px] text-zinc-400">
            Marathi-First Automotive News & Vehicle Comparison Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
