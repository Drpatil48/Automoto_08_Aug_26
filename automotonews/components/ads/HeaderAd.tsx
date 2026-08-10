import { AdSlot } from "@/components/ads/AdSlot";
import { reservedMinHeight } from "@/lib/ads";

/** Below-header display unit — reserved height to limit CLS. */
export function HeaderAd() {
  const minHeight = reservedMinHeight("banner");

  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-3" style={{ minHeight: minHeight + 24 }}>
        <AdSlot placement="header" size="banner" className="w-full" />
      </div>
    </div>
  );
}
