import { test } from '../fixtures/test-fixtures.js';
import { validUser, invalidUser } from '../test-data/users.js';

test.describe('Login functionality', () => {

  test('TC001 - Valid Login', async ({ loginPage }) => {
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.verifyProductsPage();
  });

  test('TC002 - Invalid Password', async ({ loginPage }) => {
    await loginPage.login(validUser.username, invalidUser.password);
    await loginPage.verifyErrorMessage();
  });

  test('TC003 - Empty Username', async ({ loginPage }) => {
    await loginPage.login('', validUser.password);
    await loginPage.verifyErrorMessage();
  });

});
