import { test, expect } from "@playwright/test";

test.describe("Article Interactive Features", () => {
  const articleUrl = "/electric-vehicles-evs/ev-registration-india-2025";

  test("font resizer dynamically adjusts reading typography and persists choice", async ({
    page,
  }) => {
    await page.goto(articleUrl);

    // Locate font resizer buttons
    const largeBtn = page.getByRole("button", { name: "Large font size" });
    const standardBtn = page.getByRole("button", { name: "Standard font size" });

    await expect(largeBtn).toBeVisible();
    await largeBtn.click({ force: true });

    // Verify localStorage updated
    const savedSize = await page.evaluate(() => localStorage.getItem("article_font_size"));
    expect(savedSize).toBe("lg");

    // Reset font size
    await standardBtn.click({ force: true });
    const resetSize = await page.evaluate(() => localStorage.getItem("article_font_size"));
    expect(resetSize).toBe("base");
  });

  test("reading progress bar updates on scroll", async ({ page }) => {
    await page.goto(articleUrl);

    const progressBar = page.locator("div[role='progressbar'][aria-label='Reading progress']").first();
    await expect(progressBar).toBeAttached();

    // Scroll halfway down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(100);

    const midVal = await progressBar.getAttribute("aria-valuenow");
    expect(Number(midVal)).toBeGreaterThanOrEqual(10);
  });
});
