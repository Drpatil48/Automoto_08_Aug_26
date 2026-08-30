export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Checks if GA4 tracking is enabled with a valid measurement ID (starts with G-)
 */
export function isGaEnabled(): boolean {
  return typeof GA_TRACKING_ID === "string" && /^G-[A-Z0-9]+$/i.test(GA_TRACKING_ID);
}

export type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Sends a custom GA4 event using window.gtag if present.
 */
export function trackEvent({ action, category, label, value }: GTagEvent): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}
