import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.confirmationMessage = page.getByText('Thank you for your order!');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation() {
    await expect(this.confirmationMessage).toBeVisible();
  }
}
