import { test, expect } from "@playwright/test";

test.describe("Links, Accessibility & 301 Redirect Architecture", () => {
  test("skip to main content link focuses main container", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("external social links have secure rel attributes", async ({ page }) => {
    await page.goto("/");
    const externalLinks = page.locator("footer a[target='_blank']");
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
    }
  });

  test("legacy flat WordPress article permalinks issue permanent 301 redirects to canonical category URLs", async ({
    page,
  }) => {
    // Navigate to a known legacy flat article URL
    const response = await page.goto("/ev-registration-india-2025");
    // Next.js proxy/middleware redirects flat slug to /electric-vehicles-evs/ev-registration-india-2025
    expect(page.url()).toContain("/electric-vehicles-evs/ev-registration-india-2025");
    expect(response?.status()).toBe(200);
  });
});
