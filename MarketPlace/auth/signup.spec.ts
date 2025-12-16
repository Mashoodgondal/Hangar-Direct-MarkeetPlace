import { test, expect } from "@playwright/test";
import { SignupPage } from "../../pages/signup";
import { LoginPage } from "../../pages/login";

test.describe("Signup Page – Full Validation", () => {
  
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    await login.goto()
     login.gotoSinupLink()
    const signup = new SignupPage(page);
   
    await signup.isSignupPageVisible();
  });

  test("Empty all fields → show required errors", async ({ page }) => {
    const signup = new SignupPage(page);
  
    await signup.clickSignupButton();
  
    await expect(signup.firstNameError()).toBeVisible();
    await expect(signup.lastNameError()).toBeVisible();
    await expect(signup.emailRequiredError()).toBeVisible();
    await expect(signup.passwordRequiredError()).toBeVisible();
    await expect(signup.confirmPasswordRequiredError()).toBeVisible();
  });
  
  test("Invalid Email Format", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.fillForm({
      firstName: "John",
      lastName: "Doe",
      email: "wrongEmail",
      password: "Password123",
      confirmPassword: "Password123",
      referral: ""
    });

    await signup.clickSignupButton();
    await expect(signup.emailError()).toBeVisible();
  });

  test("Weak Password (< 8 chars)", async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.fillForm({
      firstName: "John",
      lastName: "Doe",
      email: "test@gmail.com",
      password: "123",
      confirmPassword: "123",
      referral: ""
    });

    await signup.clickSignupButton();
    await expect(signup.passwordError()).toBeVisible();
  });
    
  test("Password and Confirm Password mismatch", async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.fillForm({
      firstName: "John",
      lastName: "Doe",
      email: "test@gmail.com",
      password: "Password123",
      confirmPassword: "WrongPassword",
      referral: "12"
    });

    await signup.clickSignupButton();
    await expect(signup.confirmPasswordError()).toBeVisible();
  });

  

  test("Check Google & Facebook tabs visible", async ({ page }) => {
    const signup = new SignupPage(page);

    await expect(signup.googleTab()).toBeVisible();
    await expect(signup.facebookTab()).toBeVisible();
  });

  test("Go to Signup Page by clicking Sign Up link on Login Page", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.gotoSinupLink();

    const signup = new SignupPage(page);
    await expect(signup.pageTitle()).toBeVisible();
  });

  
  test("Valid Signup → success toast", async ({ page }) => {
    const signup = new SignupPage(page);
    const login = new LoginPage(page)
    await signup.fillForm({
      firstName: "John",
      lastName: "Doe",
      email: `auto_${Date.now()}@gmail.com`,
      password: "Password123",
      confirmPassword: "Password123",
      referral: "12345"
    });

    await signup.clickSignupButton();
    //  expect(login.isLoginPageVisible);
  });

});