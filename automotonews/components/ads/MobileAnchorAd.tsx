import { AdSlot } from "@/components/ads/AdSlot";
import { reservedMinHeight } from "@/lib/ads";

/**
 * Mobile sticky footer anchor unit.
 * Fixed reserved height + safe-area padding to limit CLS with the compare tray.
 */
export function MobileAnchorAd() {
  const minHeight = reservedMinHeight("anchor");

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div
        className="pointer-events-auto border-t border-border bg-surface/95 px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur"
        style={{ minHeight: minHeight + 16 }}
      >
        <AdSlot placement="mobileAnchor" size="anchor" />
      </div>
    </div>
  );
}
