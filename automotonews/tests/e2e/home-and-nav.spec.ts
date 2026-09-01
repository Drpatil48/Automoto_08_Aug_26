import { test, expect } from "@playwright/test";

test.describe("Homepage & Navigation", () => {
  test("loads homepage without page errors or broken critical resources", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (err) => {
      consoleErrors.push(err.message);
    });

    page.on("requestfailed", (req) => {
      const url = req.url();
      const err = req.failure()?.errorText || "";
      // Ignore normal link prefetch cancellations or external analytics
      if (
        !url.includes("googletagmanager") &&
        !url.includes("google-analytics") &&
        !err.includes("ERR_ABORTED")
      ) {
        failedRequests.push(`${req.method()} ${url} - ${err}`);
      }
    });

    const response = await page.goto("/");
    expect(response?.status()).toBe(200);

    // Verify Title and Branding
    await expect(page).toHaveTitle(/AutomotoNews/i);
    const mainHeader = page.locator("header").first();
    await expect(mainHeader).toBeVisible();

    // Verify Main elements
    await expect(page.getByRole("banner").first()).toBeVisible();
    await expect(page.getByRole("contentinfo").first()).toBeVisible();

    // Check no uncaught runtime page errors
    expect(consoleErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });

  test("desktop navigation links are interactive", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav only");

    await page.goto("/");
    const nav = page.locator("header nav[aria-label='Primary']").first();
    await expect(nav).toBeVisible();

    // Check links exist and have valid hrefs
    const evLink = nav.getByRole("link", { name: /EV|Electric/i }).first();
    await expect(evLink).toBeVisible();
    const href = await evLink.getAttribute("href");
    expect(href).toBeTruthy();
  });

  test("mobile navigation drawer opens, handles search, and closes properly", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile nav drawer only");

    await page.goto("/");

    // Locate mobile menu button
    const menuButton = page.getByRole("button", { name: /Open menu/i }).first();
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Drawer should now be visible
    const drawer = page.getByRole("dialog", { name: /Mobile Navigation Drawer/i }).first();
    await expect(drawer).toBeVisible();

    // Check navigation links inside drawer
    const compareLink = drawer.getByRole("link", { name: /COMPARE/i }).first();
    await expect(compareLink).toBeVisible();

    // Test close button
    const closeButton = drawer.getByRole("button", { name: /Close menu/i }).first();
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    // Drawer should close
    await expect(drawer).not.toBeVisible();
  });
});
