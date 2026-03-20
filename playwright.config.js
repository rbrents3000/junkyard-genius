const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 10000 },
  retries: 1,
  workers: 4,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:8181',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
    command: 'npx @11ty/eleventy --serve --port=8181',
    port: 8181,
    timeout: 120000,
    reuseExistingServer: true,
  },
});
