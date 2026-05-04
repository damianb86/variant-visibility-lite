import AxeCoreBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("preview has no obvious axe violations", async ({ page }) => {
  await page.goto("/preview");
  await page.evaluate(async () => {
    await customElements.whenDefined("s-table");
    await customElements.whenDefined("s-page");
  });
  const results = await new AxeCoreBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
