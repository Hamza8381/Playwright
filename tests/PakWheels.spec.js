import { test, expect } from "@playwright/test";
const Signup = require("../Pages/signUpPakWheelPO");
const SignIn = require("../pages/SigninPakWheelPO");
test.describe("Pakwheel Signup and SignIn using POM", () => {
  test("SignUp", async ({ page }) => {
    const signup = new Signup(page);
    await signup.signupLink();
    await signup.Signupnewuser();
    await signup.signupSuccessful();
    await page.waitForTimeout(4000);
  });

  test.only("signIn", async ({ page }) => {
    const signin = new SignIn(page);
    await signin.signInLink();
    await signin.signInfun();
    await page.pause();
    await signin.signInSuccessful();
  });
});
