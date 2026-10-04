import { test } from '../fixtures/test-fixtures.js';
import { validUser } from '../test-data/users.js';

test('TC006 - Remove product from basket', async ({
  loginPage,
  productsPage,
  cartPage
}) => {
  await loginPage.login(validUser.username, validUser.password);

  await productsPage.addProduct('Sauce Labs Backpack');

  await productsPage.openBasket();

  await cartPage.removeProduct('Sauce Labs Backpack');

  await cartPage.verifyProductNotInBasket('Sauce Labs Backpack');
});
