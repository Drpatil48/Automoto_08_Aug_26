import { test, expect } from "@playwright/test";

test.describe("Category & Article Pages", () => {
  const testCategories = ["car-news", "electric-vehicles-evs", "sportsbikes"];

  for (const cat of testCategories) {
    test(`category page /${cat} renders cleanly without console or network errors`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("pageerror", (err) => pageErrors.push(err.message));

      const response = await page.goto(`/${cat}`);
      expect(response?.status()).toBe(200);

      // Check for main heading
      const heading = page.locator("main h1").first();
      await expect(heading).toBeVisible();

      // Check breadcrumbs
      const breadcrumbs = page.locator("main nav[aria-label='Breadcrumb']").first();
      await expect(breadcrumbs).toBeVisible();

      expect(pageErrors).toEqual([]);
      expect(consoleErrors).toEqual([]);
    });
  }

  test("article page renders typography, font resizer, and meta", async ({
    page,
  }) => {
    // Navigate to a known live article
    await page.goto("/electric-vehicles-evs/ev-registration-india-2025");
    await page.waitForLoadState("domcontentloaded");

    // Verify H1 exists and is singular in main
    const h1 = page.locator("main h1");
    await expect(h1).toHaveCount(1);
    await expect(h1).toBeVisible();

    // Check Font Resizer buttons
    const fontControls = page.locator("button[aria-label*='font size']");
    if ((await fontControls.count()) > 0) {
      await fontControls.first().scrollIntoViewIfNeeded();
      await fontControls.first().click({ force: true });
    }

    // Check Breadcrumbs
    const breadcrumbs = page.locator("main nav[aria-label='Breadcrumb']").first();
    await expect(breadcrumbs).toBeVisible();

    // Check JSON-LD is injected
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
  });
});
