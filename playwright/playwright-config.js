import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.js/
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'
      },

      dependencies: ['setup']
    }
  ]
});
