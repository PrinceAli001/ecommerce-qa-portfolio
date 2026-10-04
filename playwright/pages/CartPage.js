import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async verifyProductInBasket(productName) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async verifyProductNotInBasket(productName) {
    await expect(this.page.getByText(productName)).not.toBeVisible();
  }

  async removeProduct(productName) {
    const product = this.page.locator('.cart_item').filter({
      hasText: productName
    });

    await product.getByRole('button', { name: 'Remove' }).click();
  }

  async proceedToCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
