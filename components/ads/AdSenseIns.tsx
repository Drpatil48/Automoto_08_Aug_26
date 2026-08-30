"use client";

import { useEffect, useRef } from "react";
import type { AdPlacement, AdSlotSize } from "@/lib/ads";

type AdSenseInsProps = {
  clientId: string;
  slotId: string;
  placement: AdPlacement;
  size: AdSlotSize;
  minHeight: number;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Client-only AdSense <ins> + push. Kept tiny so reserved placeholders
 * stay Server Components when ads are not configured.
 */
export function AdSenseIns({
  clientId,
  slotId,
  size,
  minHeight,
}: AdSenseInsProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers / script failures must not break the page.
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight }}
      data-ad-client={clientId}
      data-ad-slot={slotId}
      data-ad-format={size === "banner" ? "horizontal" : "auto"}
      data-full-width-responsive="true"
    />
  );
}
