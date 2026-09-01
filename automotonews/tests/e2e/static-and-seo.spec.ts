import { test, expect } from "@playwright/test";

test.describe("Static Pages, SEO & 404 Error Handling", () => {
  const staticPages = [
    { path: "/about-us", heading: /About Us/i },
    { path: "/contact", heading: /Contact/i },
    { path: "/disclaimer", heading: /Disclaimer/i },
    { path: "/privacy-policy", heading: /Privacy Policy/i },
  ];

  for (const item of staticPages) {
    test(`static page ${item.path} renders properly with heading and meta`, async ({ page }) => {
      const response = await page.goto(item.path);
      expect(response?.status()).toBe(200);

      const h1 = page.locator("main h1").first();
      await expect(h1).toBeVisible();
      await expect(h1).toHaveText(item.heading);

      // Breadcrumb is present
      const breadcrumb = page.locator("main nav[aria-label='Breadcrumb']").first();
      await expect(breadcrumb).toBeVisible();
    });
  }

  test("robots.txt serves valid robots instructions", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text.toLowerCase()).toContain("user-agent:");
    expect(text).toContain("Sitemap:");
  });

  test("sitemap.xml serves valid XML format", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain("<urlset");
  });

  test("non-existent route renders standard 404 page", async ({ page }) => {
    await page.goto("/completely-non-existent-page-xyz-404");
    await expect(page.locator("main h1, main h2").first()).toContainText(/404|Not Found|Page not found/i);
    // Home button should be available inside main
    const homeLink = page.locator("main").getByRole("link", { name: /Go home/i }).first();
    await expect(homeLink).toBeVisible();
  });
});
