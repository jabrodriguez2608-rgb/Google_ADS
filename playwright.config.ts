import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:4321",
    viewport: { width: 360, height: 800 },
  },
  webServer: {
    command: "npm run preview",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
  reporter: "list",
});
