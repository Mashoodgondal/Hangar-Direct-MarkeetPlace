// import { Page, Locator, expect } from "@playwright/test";

// export class LoginPage {
//   constructor(private page: Page) { }

//   async goto() {
//     await this.page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
//   }

//   emailField = () => this.page.getByLabel("Email Address");
//   passwordField = () => this.page.getByLabel("Password");


//   loginButton = () => this.page.getByRole("button", { name: "Sign In" });

//   googleTab = () => this.page.getByText("Sign in with Google");
//   facebookTab = () => this.page.getByText("Sign in with Facebook");

//   // FIELD ERRORS (flexible match)
//   emailFieldError = () =>
//     this.page.locator("text=valid email").first();

//   passwordFieldError = () =>
//     this.page.locator("text=8").first();
//   emptyEmailOrPassword = () =>
//     this.page.locator("text=Required")

//   // TOASTS
//   invalidToast = () =>
//     this.page.locator("text=Invalid login credentials");

//   successToast = () =>
//     this.page.locator("text=Logged in successfully");

//   // ACTION
//   async login(email: string, password: string) {
//     await this.emailField().fill(email);
//     await this.passwordField().fill(password);
//     await this.loginButton().click();
//   }

//   async waitForLoginForm() {
//     await this.emailField().waitFor({ state: "visible" });
//     await this.passwordField().waitFor({ state: "visible" });
//   }

//   async clickForgotPassword() {
//     await this.page.getByText('Forgot Password?').click()
//   }
//   async gotoSinupLink() {

//     await this.page.getByRole("link", { name: "Sign up" }).click();
//     await this.page.waitForURL("https://hangardirect-github-io.vercel.app/signup");

//   }

// }


// import { Page, expect } from "@playwright/test";
// import { HomePage } from "./homePage";

// export class LoginPage {
//   constructor(private page: Page) { }

//   emailField = () => this.page.getByLabel("Email Address");
//   passwordField = () => this.page.getByLabel("Password");
//   loginButton = () =>
//     this.page.getByRole("button", { name: "Sign In" });

//   async login(email: string, password: string): Promise<HomePage> {
//     await this.emailField().fill(email);
//     await this.passwordField().fill(password);
//     await this.loginButton().click();

//     await expect(
//       this.page.getByText("Logged in successfully")
//     ).toBeVisible();

//     return new HomePage(this.page);
//   }

//   async gotoSignup() {
//     await this.page.getByRole("link", { name: "Sign up" }).click();
//     await this.page.waitForURL(
//       "https://hangardirect-github-io.vercel.app/signup"
//     );
//   }

//   async gotoSignup() {
//     await this.page.getByRole("link", { name: "Sign up" }).click();
//     await this.page.waitForURL(
//       "https://hangardirect-github-io.vercel.app/signup"
//     );
//   }
// }



import { Page, expect } from "@playwright/test";
import { HomePage } from "./homePage";
import { SignupPage } from "./signup";

export class LoginPage {
  constructor(private page: Page) { }

  emailField = () => this.page.getByLabel("Email Address");
  passwordField = () => this.page.getByLabel("Password");
  loginButton = () =>
    this.page.getByRole("button", { name: "Sign In" });

  async login(email: string, password: string): Promise<HomePage> {
    await this.emailField().fill(email);
    await this.passwordField().fill(password);
    await this.loginButton().click();

    await expect(
      this.page.getByText("Logged in successfully")
    ).toBeVisible();

    return new HomePage(this.page);
  }

  async gotoSignup(): Promise<SignupPage> {
    await this.page.getByRole("link", { name: "Sign up" }).click();
    await this.page.waitForURL("https://hangardirect-github-io.vercel.app/signup");
    return new SignupPage(this.page);
  }
}
