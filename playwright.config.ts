import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.(e2e|spec)\.ts/,
  retries: process.env.CI ? 1 : 0,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: process.env.E2E_BASE_URL || "http://127.0.0.1:3000",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer:
    process.env.PLAYWRIGHT_START_SERVER === "true"
      ? {
          command: "npm run dev:preview",
          url: "http://127.0.0.1:3000/preview",
          reuseExistingServer: !process.env.CI,
          timeout: 120000,
        }
      : undefined,
  projects: [
    { name: "chromium", testMatch: /tests\/e2e\/.*\.ts/, use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", testMatch: /tests\/e2e\/.*\.ts/, use: { ...devices["Pixel 5"] } },
    { name: "accessibility", testMatch: /tests\/accessibility\/.*\.ts/, use: { ...devices["Desktop Chrome"] } },
  ],
});
