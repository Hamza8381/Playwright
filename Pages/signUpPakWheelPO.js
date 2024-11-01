import { expect } from "@playwright/test";
class Signup {
  constructor(page) {
    this.page = page;
    this.fullName = '[placeholder="Full Name"]';
    this.email = '[placeholder="Email"]';
    this.password = '[placeholder="Password"]';
    this.confirmPassword = '[placeholder="Confirm Password"]';
    this.createAccount = '[type="submit"][class="btn btn-primary"]';
  }

  async Signupnewuser() {
    await this.page.fill(this.fullName, "hamza");
    await this.page.fill(this.email, "hamzii1@yopmail.com");
    await this.page.fill(this.password, "hamza129");
    await this.page.fill(this.confirmPassword, "hamza129");
    await this.page.click(this.createAccount);
  }

  async signupLink() {
    await this.page.goto("https://www.pakwheels.com/signup");
  }
  async signupSuccessful() {
    const locator = this.page.locator('[class = "mb30"]');
    await expect(locator).toBeVisible();
  }
}

module.exports = Signup;
