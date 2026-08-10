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
    <footer className="mt-auto border-t border-border bg-header text-header-text">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-bold">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-white/70">{SITE_TAGLINE}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
              {SITE_DESCRIPTION}
            </p>
            <p className="mt-3 text-sm text-white/75">
              Contact:{" "}
              <a
                href={`mailto:${SITE_CONTACT_EMAIL}`}
                className="font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
              >
                {SITE_CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {SOCIAL_LINKS.length > 0 ? (
            <nav aria-label="Social">
              <ul className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <nav aria-label="Explore topics">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/55">
            Explore Topics
          </h2>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-white/85 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Mobile-first Marathi automotive news.</p>
        </div>
      </div>
    </footer>
  );
}
