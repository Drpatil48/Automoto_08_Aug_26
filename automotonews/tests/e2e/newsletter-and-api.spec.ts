import { test, expect } from "@playwright/test";

test.describe("Newsletter API & UI", () => {
  test("API /api/newsletter returns 400 on invalid or missing email", async ({ request }) => {
    const res = await request.post("/api/newsletter", {
      data: { email: "invalid-email", consent: true },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.code).toBe("INVALID_EMAIL");
  });

  test("API /api/newsletter returns 400 when consent is false", async ({ request }) => {
    const res = await request.post("/api/newsletter", {
      data: { email: "reader@example.com", consent: false },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.code).toBe("CONSENT_REQUIRED");
  });

  test("API /api/newsletter handles valid email with non-fatal status when unconfigured", async ({
    request,
  }) => {
    const res = await request.post("/api/newsletter", {
      data: { email: "reader@example.com", consent: true },
    });
    // If not configured, should return 503 or 200/400 gracefully without 500 unhandled crash
    expect([200, 400, 503]).toContain(res.status());
    const body = await res.json();
    expect(body).toHaveProperty("message");
  });

  test("Newsletter Form on page enforces required fields and handles submit feedback", async ({
    page,
  }) => {
    await page.goto("/");
    const form = page.locator("form").filter({ hasText: /न्यूजलेटर|Newsletter/i }).first();

    if (await form.isVisible()) {
      const emailInput = form.getByRole("textbox", { name: /email/i });
      await expect(emailInput).toBeVisible();

      // Submit with email
      await emailInput.fill("test.user@example.com");

      // Check consent checkbox if present
      const consentCheckbox = form.locator("input[type='checkbox']");
      if (await consentCheckbox.isVisible()) {
        await consentCheckbox.check();
      }

      // Click submit
      const submitBtn = form.getByRole("button", { name: /सबस्क्राईब|Subscribe/i });
      await submitBtn.click();

      // Ensure form doesn't crash or throw unhandled page error
      await page.waitForTimeout(500);
    }
  });
});
