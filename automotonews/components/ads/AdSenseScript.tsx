import Script from "next/script";
import { getAdsConfig, isAdSenseConfigured } from "@/lib/ads";

/**
 * Loads the AdSense script only when a real client ID is configured.
 * Uses lazyOnload so third-party JS does not compete with LCP/INP.
 * Does not enable Auto ads unless NEXT_PUBLIC_ADSENSE_AUTO_ADS=true.
 */
export function AdSenseScript() {
  const config = getAdsConfig();

  if (!isAdSenseConfigured() || !config.clientId) {
    return null;
  }

  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.clientId)}`;

  return (
    <Script
      id="adsense-script"
      async
      src={src}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
