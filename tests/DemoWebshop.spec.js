import { test, expect } from "@playwright/test";
const RegisterPage = require("../Pages/registerPagePO");
const LoginPage = require("../Pages/loginPagePO");

test.beforeEach(async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
});

test.describe("DemoWebshop Register and Login usin POM", () => {
  test("Register a new user", async ({ page }) => {
    const register = new RegisterPage(page);
    await register.registerUser();
    await register.registrationSuccessful();
    await page.waitForTimeout(4000);
  });

  test("Login with Registered User", async ({ page }) => {
    const lg = new LoginPage(page);
    await lg.Loginfun();
    await lg.LoginSuccessful();
    await page.waitForTimeout(4000);
  });
});
