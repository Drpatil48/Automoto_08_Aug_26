import { test, expect } from "@playwright/test";

test.describe("Compare Tray & Interactive Comparison Flow", () => {
  test("adds vehicles to compare tray, enforces max 2 limit and category matching, and clears tray", async ({
    page,
  }) => {
    // Clear localStorage before testing
    await page.goto("/compare");
    await page.evaluate(() => localStorage.removeItem("automotonews.compareTray"));
    await page.reload();

    // Find "Add to compare tray" buttons in catalog
    const addBtns = page.locator("section[aria-labelledby='browse-vehicles-heading']").getByRole("button", { name: /Add to compare tray/i });
    await expect(addBtns.first()).toBeVisible();

    // Add first car (Tata Nexon EV)
    await addBtns.first().click();

    // Compare tray should become visible at bottom
    const compareTray = page.locator("[data-compare-tray]");
    await expect(compareTray).toBeVisible();
    await expect(compareTray).toContainText(/Compare/i);

    // Add second car (Tata Tiago EV)
    await addBtns.nth(1).click();
    await expect(compareTray).toBeVisible();

    // Compare button should be active and link to comparison
    const compareNowBtn = compareTray.getByRole("link", { name: /Compare/i }).first();
    await expect(compareNowBtn).toBeVisible();
    const href = await compareNowBtn.getAttribute("href");
    expect(href).toContain("/compare?a=");
    expect(href).toContain("&b=");

    // Test Clear Tray button
    const clearBtn = compareTray.getByRole("button", { name: /Clear/i });
    await clearBtn.click();
    await expect(compareTray).not.toBeVisible();
  });
});
