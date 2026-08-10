export type AdPlacement =
  | "header"
  | "inArticle"
  | "sidebar"
  | "mobileAnchor";

export type AdSlotSize = "banner" | "rectangle" | "anchor";

/**
 * AdSense configuration — all values come from environment variables.
 * Client/slot IDs must be set explicitly; empty means ads stay in reserved
 * placeholder mode and the AdSense script is not loaded.
 */
export type AdsConfig = {
  clientId: string | null;
  slots: Record<AdPlacement, string | null>;
  autoAds: boolean;
};

function readPublicEnv(name: string): string | null {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

export function getAdsConfig(): AdsConfig {
  return {
    clientId: readPublicEnv("NEXT_PUBLIC_ADSENSE_CLIENT_ID"),
    slots: {
      header: readPublicEnv("NEXT_PUBLIC_ADSENSE_SLOT_HEADER"),
      inArticle: readPublicEnv("NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE"),
      sidebar: readPublicEnv("NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR"),
      mobileAnchor: readPublicEnv("NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_ANCHOR"),
    },
    autoAds: readPublicEnv("NEXT_PUBLIC_ADSENSE_AUTO_ADS") === "true",
  };
}

export function isAdSenseConfigured(): boolean {
  const clientId = getAdsConfig().clientId;
  return Boolean(clientId && clientId.startsWith("ca-pub-"));
}

export function canRenderLiveAd(placement: AdPlacement): boolean {
  const config = getAdsConfig();
  return Boolean(
    isAdSenseConfigured() && config.clientId && config.slots[placement],
  );
}

export function reservedMinHeight(size: AdSlotSize): number {
  switch (size) {
    case "banner":
      return 90;
    case "rectangle":
      return 250;
    case "anchor":
      return 60;
    default:
      return 90;
  }
}
