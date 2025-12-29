import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login";
import { HomePage } from "../../pages/homePage";

test.describe("Login Page – Full Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
  });

  test("Login page loads successfully", async ({ page }) => {
    await expect(page.getByLabel("Email Address")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  });

  test("Empty Email → show required validation", async ({ page }) => {
    const login = new LoginPage(page);

    await page.getByLabel("Email Address").fill("");
    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page.locator("text=Required")).toBeVisible();
  });

  test("Empty Password → show required validation", async ({ page }) => {
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByLabel("Password").fill("");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page.locator("text=Required")).toBeVisible();
  });

  test("Invalid Email Format → show email validation error", async ({ page }) => {
    await page.getByLabel("Email Address").fill("wrongemail");
    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page.locator("text=valid email")).toBeVisible();
  });

  test("Weak Password (< 8 chars) → show password validation error", async ({ page }) => {
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByLabel("Password").fill("123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page.locator("text=8")).toBeVisible();
  });

  test("Wrong Credentials → invalid credentials toast appears", async ({ page }) => {
    await page.getByLabel("Email Address").fill("test@gmail.com");
    await page.getByLabel("Password").fill("WrongPass");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(
      page.locator("text=Invalid login credentials")
    ).toBeVisible();
  });

  test("Valid Login → user lands on Home page", async ({ page }) => {
    const login = new LoginPage(page);

    const home = await login.login(
      "mashoodgondalofficial@gmail.com",
      "123123123"
    );

    await home.checkVisibility();
  });


  test("Navigate to Signup page from Login page", async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoSignup();

    await expect(page).toHaveURL(/signup/);
  });

});
