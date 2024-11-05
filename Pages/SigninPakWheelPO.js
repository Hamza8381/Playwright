import { expect } from "@playwright/test";
class SignIn {
  constructor(page) {
    this.page = page;
    this.continueWithEmail = '[data-login-method="SignInWithEmail"]';
    this.username = "#username-popup";
    this.password = "#pwd-popup";
    this.signIn = "#email-submit-btn";
  }

  async signInfun() {
    await this.page.click(this.continueWithEmail);
    await this.page.fill(this.username, "Hamzasaleem129@gmail.com");
    await this.page.fill(this.password, "Hamza129");
    await this.page.click(this.signIn);
  }
  async signInLink() {
    await this.page.goto("https://www.pakwheels.com/login");
  }
  async signInSuccessful() {
    const locator = this.page.locator('[class="dropdown"][id="user-menu"]');
    await expect(locator).toBeVisible();
  }
}
module.exports = SignIn;
