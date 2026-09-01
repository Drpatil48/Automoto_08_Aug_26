import { test, expect } from "@playwright/test";

test.describe("Theme System (Light & Dark Mode)", () => {
  test("defaults to light theme, toggles to dark, updates localStorage, and persists across refresh", async ({
    page,
  }) => {
    // Clear localStorage before testing to verify default behavior
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("automotonews-theme"));
    await page.reload();

    // Default theme is light
    const html = page.locator("html");
    await expect(html).toHaveClass(/light/);

    const themeBtn = page.locator("header").getByRole("button", { name: /मोड/i }).first();
    await expect(themeBtn).toBeVisible();

    // Click to switch to Dark Mode
    await themeBtn.click();
    await expect(html).toHaveClass(/dark/);

    // Verify localStorage has 'dark'
    const storedTheme = await page.evaluate(() => localStorage.getItem("automotonews-theme"));
    expect(storedTheme).toBe("dark");

    // Refresh page and verify Dark Mode persists without flicker
    await page.reload();
    await expect(html).toHaveClass(/dark/);

    // Click to switch back to Light Mode
    const themeBtnAfterReload = page.locator("header").getByRole("button", { name: /मोड/i }).first();
    await themeBtnAfterReload.click();
    await expect(html).toHaveClass(/light/);

    const storedThemeLight = await page.evaluate(() => localStorage.getItem("automotonews-theme"));
    expect(storedThemeLight).toBe("light");
  });

  test("theme selection persists across navigation to other routes", async ({ page }) => {
    await page.goto("/");
    const themeBtn = page.locator("header").getByRole("button", { name: /मोड/i }).first();
    await themeBtn.click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    // Navigate to Compare page
    await page.goto("/compare");
    await expect(page.locator("html")).toHaveClass(/dark/);

    // Navigate to a Category page
    await page.goto("/electric-vehicles-evs");
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("mobile drawer theme toggle works on mobile viewport", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile viewport only");

    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /Open menu/i }).first();
    await menuButton.click();

    const drawer = page.getByRole("dialog", { name: /Mobile Navigation Drawer/i }).first();
    await expect(drawer).toBeVisible();

    const drawerThemeBtn = drawer.getByRole("button", { name: /मोड/i }).first();
    await expect(drawerThemeBtn).toBeVisible();
    await drawerThemeBtn.click();

    await expect(page.locator("html")).toHaveClass(/dark/);
  });
});
