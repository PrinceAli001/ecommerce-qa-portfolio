import { test } from '../fixtures/test-fixtures.js';
import { validUser } from '../test-data/users.js';
import { checkoutDetails } from '../test-data/checkout.js';

test('TC007 - Successful Checkout', async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage,
  checkoutOverviewPage
}) => {
  await loginPage.login(validUser.username, validUser.password);

  await productsPage.addProduct('Sauce Labs Backpack');

  await productsPage.openBasket();

  await cartPage.proceedToCheckout();

  await checkoutPage.enterCheckoutDetails(
    checkoutDetails.firstName,
    checkoutDetails.lastName,
    checkoutDetails.postalCode
  );

  await checkoutOverviewPage.finishCheckout();

  await checkoutOverviewPage.verifyOrderConfirmation();
});
