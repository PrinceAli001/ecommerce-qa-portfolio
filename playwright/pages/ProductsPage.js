import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.cart = page.locator('#shopping_cart_container');
  }

  async verifyProductsPage() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addProduct(productName) {
    const product = this.page.locator('.inventory_item').filter({
      hasText: productName
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openBasket() {
    await this.cart.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
