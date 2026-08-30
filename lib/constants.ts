export const SITE_NAME = "AutomotoNews.in";
export const SITE_TAGLINE =
  "मराठी ऑटो न्यूज — EV, कार आणि बाईक अपडेट्स";
export const SITE_DESCRIPTION =
  "Maharashtra and India automotive news: electric vehicles, car launches, bike reviews, and buying guides in Marathi.";

/** Public editorial contact — owner-provided; used for mailto / displayed email. */
export const SITE_CONTACT_EMAIL = "contact@automotonews.in";

export type NavItem = {
  label: string;
  href: string;
};

/** Primary category navigation — matches live WordPress categories. */
export const PRIMARY_NAV: NavItem[] = [
  { label: "मुख्यपृष्ठ", href: "/" },
  { label: "EV Spotlight", href: "/electric-vehicles-evs" },
  { label: "Car News", href: "/car-news" },
  { label: "Bikes & Performance", href: "/sportsbikes" },
  { label: "Upcoming Cars", href: "/upcoming-cars" },
  { label: "Guides & Tech", href: "/auto-technology" },
  { label: "Compare Tool", href: "/compare" },
];

/** Policy / utility links required for AdSense readiness. */
export const FOOTER_NAV: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export const UTILITY_NAV: NavItem[] = [
  { label: "Compare", href: "/compare" },
  { label: "Search", href: "/search" },
];

/**
 * Social profiles — leave empty until real URLs are confirmed.
 * Do not publish placeholder channel links.
 */
export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
}> = [];
