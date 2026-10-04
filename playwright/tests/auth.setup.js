import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { validUser } from '../test-data/users.js';

test('Authentication Setup', async ({ page, context }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    validUser.username,
    validUser.password
  );

  await expect(page.locator('.title')).toHaveText('Products');

  await context.storageState({
    path: 'playwright/.auth/user.json'
  });
});
