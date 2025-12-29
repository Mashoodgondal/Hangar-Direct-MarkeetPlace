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
    const login = new LoginPage(page);
    await login.goto();
  });

  test("Login page loads successfully", async ({ page }) => {
    const login = new LoginPage(page);
    await login.waitForLoginForm();
  });

  test("Empty Email → show required validation", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("", "Password123");

    await expect(login.emptyEmailOrPassword()).toBeVisible();
  });

  test("Empty Password → show required validation", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("test@gmail.com", "");

    await expect(login.emptyEmailOrPassword()).toBeVisible();
  });

  test("Invalid Email Format → show email error", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("wrongemail", "Password123");

    await expect(login.emailFieldError()).toBeVisible();
  });

  test("Weak Password (< 8 chars) → show password error", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("test@gmail.com", "123");

    await expect(login.passwordFieldError()).toBeVisible();
  });

  test("Wrong Credentials → invalid credentials toast", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("test@gmail.com", "WrongPass");

    await expect(login.invalidToast()).toBeVisible();
  });

  test("Valid Login → user lands on Home page", async ({ page }) => {
    const login = new LoginPage(page);

    const home = await login.login(
      "mashoodgondalofficial@gmail.com",
      "123123123"
    );

    await home.checkVisibility();
  });

  test("Navigate to Signup page from Login", async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoSignup();

    await expect(page).toHaveURL(/signup/);
  });

});
