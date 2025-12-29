// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../../pages/login";
// import { HomePage } from "../../pages/homePage";

// test.describe("Login Page – Full Validation", () => {

//   test.beforeEach(async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     // await loginPage.isLoginPageVisible();
//   });

//   test('welcome text',async({page})=>{
//     const login = new LoginPage(page)
//     await login.waitForLoginForm()
//   //  await expect(login.welcomeText()).toBeVisible()
// })

//   test("Empty Email → show email validation error", async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.login("", "Password123");
//     await expect(login.emptyEmailOrPassword()).toBeVisible();
//   });

//   test("Empty Password → show password validation error", async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.login("test@gmail.com", "");
//     await expect(login.emptyEmailOrPassword()).toBeVisible();
//   });

//   test("Invalid Email Format", async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.login("wrongemail", "Password123");
//     await expect(login.emailFieldError()).toBeVisible();
//   });

//   test("Weak Password (< 8 chars)", async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.login("test@gmail.com", "123");
//     await expect(login.passwordFieldError()).toBeVisible();
//   });

//   test("Wrong Credentials → toast appears", async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.login("test@gmail.com", "WrongPass");
//     await expect(login.invalidToast()).toBeVisible();
//   });

//   test("Valid Login → success toast", async ({ page }) => {
//     const homepage = new HomePage(page)
//     const login = new LoginPage(page);
//     await login.login("mashoodgondalofficial@gmail.com", "123123123");
//     await homepage.checkhomePage();
//   });

// });





// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../../pages/login";
// import { HomePage } from "../../pages/homePage";
// import { SignupPage } from "../../pages/signup";

// test.describe("Login Page – Core Flows", () => {

//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
//   });

//   test("Valid Login → user lands on Home page", async ({ page }) => {
//     const login = new LoginPage(page);

//     const home = await login.login(
//       "mashoodgondalofficial@gmail.com",
//       "123123123"
//     );

//     await home.checkVisibility();
//   });

//   test("Navigate to Signup page from Login", async ({ page }) => {
//     const login = new LoginPage(page);

//     const signup = await login.gotoSignup();

//     await signup.isSignupPageVisible();
//   });

// });



import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login";
import { HomePage } from "../../pages/homePage";

test.describe("Login Page – Full Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
  });

  // ---------- BASIC UI ----------
  test("Login page loads successfully", async ({ page }) => {
    await expect(page.getByLabel("Email Address")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  });

  // ---------- NEGATIVE TEST CASES ----------
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

  // ---------- POSITIVE TEST CASE ----------
  test("Valid Login → user lands on Home page", async ({ page }) => {
    const login = new LoginPage(page);

    const home = await login.login(
      "mashoodgondalofficial@gmail.com",
      "123123123"
    );

    await home.checkVisibility();
  });

  // ---------- NAVIGATION ----------
  test("Navigate to Signup page from Login page", async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoSignup();

    await expect(page).toHaveURL(/signup/);
  });

});
