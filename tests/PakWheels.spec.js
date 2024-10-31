import { test, expect } from "@playwright/test";
const Signup = require("../Pages/signUpPakWheelPO");

test.describe("Pakwheel Signup and SignIn using POM", () => {
  test("SignUp", async ({ page }) => {
    const signup = new Signup(page);
    await signup.signupLink();
    await signup.Signupnewuser();
    await signup.signupSuccessful();
    await page.waitForTimeout(4000);
  });
});
