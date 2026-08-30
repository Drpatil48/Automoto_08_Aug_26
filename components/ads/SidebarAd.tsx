import { AdSlot } from "@/components/ads/AdSlot";

/** Desktop sidebar rail — hidden on small screens. */
export function SidebarAd() {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-24">
        <AdSlot placement="sidebar" size="rectangle" />
      </div>
    </div>
  );
}
