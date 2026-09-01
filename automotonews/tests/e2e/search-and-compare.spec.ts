import { test, expect } from "@playwright/test";

test.describe("Search & Comparison Tool", () => {
  test("search page performs queries and handles empty states", async ({ page }) => {
    await page.goto("/search");
    await expect(page.locator("main h1").first()).toHaveText(/Search/i);

    // Initial state shows search form
    await expect(page.getByRole("search").first()).toBeVisible();

    // Type query
    const searchInput = page.getByRole("searchbox", { name: /search/i }).first();
    await searchInput.fill("Tata");
    await page.getByRole("button", { name: "Search" }).first().click();

    // URL should update to /search?q=Tata
    await expect(page).toHaveURL(/\/search\?q=Tata/);

    // Results or empty state message rendered in main
    await expect(page.locator("main").first()).toBeVisible();
  });

  test("compare page allows vehicle selection, switching car/bike modes, and validations", async ({
    page,
  }) => {
    await page.goto("/compare");
    await expect(page.locator("main h1").first()).toContainText(/Compare/i);

    // Check mode buttons
    const compareCarsBtn = page.getByRole("button", { name: /Compare Cars/i }).first();
    const compareBikesBtn = page.getByRole("button", { name: /Compare Bikes/i }).first();
    await expect(compareCarsBtn).toBeVisible();
    await expect(compareBikesBtn).toBeVisible();

    // Select Vehicle A
    const selectA = page.locator("main select#compare-model-a").first();
    await expect(selectA).toBeVisible();
    await selectA.selectOption({ index: 1 });

    // Select Vehicle B
    const selectB = page.locator("main select#compare-model-b").first();
    await expect(selectB).toBeVisible();
    await selectB.selectOption({ index: 2 });

    // Comparison spec table or comparison cards should appear
    const resultsRegion = page.locator("main [role='region'][aria-label='Comparison results']").first();
    await expect(resultsRegion).toBeVisible();

    // Switch to Bikes mode
    await compareBikesBtn.click();
    // Selector options should now be visible
    await expect(selectA).toBeVisible();
  });

  test("compare category mismatch validation handles cross-category query params safely", async ({
    page,
  }) => {
    // Pass a car and a bike via query parameters
    await page.goto("/compare?a=creta&b=classic-350");
    const mismatchHeading = page.locator("main").getByRole("heading", { name: /Category Mismatch/i }).first();
    await expect(mismatchHeading).toBeVisible();
    
    const resetBtn = page.locator("main").getByRole("button", { name: /Reset Both/i }).first();
    await expect(resetBtn).toBeVisible();

    // Click Reset Both
    await resetBtn.click();
    await expect(mismatchHeading).not.toBeVisible();
  });
});
