import { test } from '../fixtures/test-fixtures.js';
import { validUser } from '../test-data/users.js';

test('TC004 - Logout', async ({ loginPage, productsPage }) => {
  await loginPage.login(validUser.username, validUser.password);

  await productsPage.logout();

  await loginPage.verifyLoginPage();
});

test('TC005 - Add product to basket', async ({
  loginPage,
  productsPage,
  cartPage
}) => {
  await loginPage.login(validUser.username, validUser.password);

  await productsPage.verifyProductsPage();

  await productsPage.addProduct('Sauce Labs Backpack');

  await productsPage.openBasket();

  await cartPage.verifyProductInBasket('Sauce Labs Backpack');
});
