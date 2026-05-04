import { expect, test } from "@playwright/test";

test("opens visual preview for Variant Visibility Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Variant Visibility Lite" })).toBeVisible();
  await expect(page.getByText("Hide selected variants on storefront selectors without pretending Shopify has variant-level publishing.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
