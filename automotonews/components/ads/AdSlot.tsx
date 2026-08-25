import { AdSenseIns } from "@/components/ads/AdSenseIns";
import {
  canRenderLiveAd,
  getAdsConfig,
  reservedMinHeight,
  type AdPlacement,
  type AdSlotSize,
} from "@/lib/ads";

type AdSlotProps = {
  placement: AdPlacement;
  size?: AdSlotSize;
  className?: string;
  /** Visible label for accessibility / policy clarity */
  label?: string;
};

/**
 * Reserved-height ad unit. Server Component by default; only mounts a
 * small client island when a live AdSense slot is configured.
 */
export function AdSlot({
  placement,
  size = "rectangle",
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const config = getAdsConfig();
  const live = canRenderLiveAd(placement);
  const minHeight = reservedMinHeight(size);
  const slotId = live ? config.slots[placement] : null;

  // Empty ad inventory should not reserve editorial space or look like a
  // loading failure. The owning placement also collapses when this is false.
  if (!live || !config.clientId || !slotId) {
    return null;
  }

  return (
    <aside
      className={`ad-slot ad-slot--${size} ${className}`}
      aria-label={label}
      data-ad-placement={placement}
      data-ad-live={live ? "true" : "false"}
      style={{ minHeight }}
    >
      <p className="ad-slot__label">{label}</p>
      <div className="ad-slot__frame" style={{ minHeight }}>
        <AdSenseIns
          clientId={config.clientId}
          slotId={slotId}
          placement={placement}
          size={size}
          minHeight={minHeight}
        />
      </div>
    </aside>
  );
}
