import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
  }
  
  emailField = () => this.page.getByLabel("Email Address");
  passwordField = () => this.page.getByLabel("Password");
  
  
  loginButton = () => this.page.getByRole("button", { name: "Sign In" });

  googleTab = () => this.page.getByText("Sign in with Google");
  facebookTab = () => this.page.getByText("Sign in with Facebook");

  // FIELD ERRORS (flexible match)
  emailFieldError = () =>
    this.page.locator("text=valid email").first();

  passwordFieldError = () =>
    this.page.locator("text=8").first();
 emptyEmailOrPassword = ()=>
    this.page.locator("text=Required")
 
  // TOASTS
  invalidToast = () =>
    this.page.locator("text=Invalid login credentials");

  successToast = () =>
    this.page.locator("text=Logged in successfully");

  // ACTION
  async login(email: string, password: string) {
    await this.emailField().fill(email);
    await this.passwordField().fill(password);
    await this.loginButton().click();
  }

  async waitForLoginForm() {
    await this.emailField().waitFor({ state: "visible" });
    await this.passwordField().waitFor({ state: "visible" });
  }

  async clickForgotPassword(){
    await this.page.getByText('Forgot Password?').click()
  }
  async gotoSinupLink(){
 
      await this.page.getByRole("link", { name: "Sign up" }).click();
      await this.page.waitForURL("https://hangardirect-github-io.vercel.app/signup");
      
    }
    
  }






// import { Page } from "@playwright/test";

// export class LoginPage {
//   constructor(private page: Page) {}

//   emailField = () => this.page.getByLabel("Email Address");
//   passwordField = () => this.page.getByLabel("Password");
//   loginButton = () => this.page.getByRole("button", { name: "Sign In" });

//   async waitForLoginForm() {
//     await this.emailField().waitFor({ state: "visible" });
//   }

//   async login(email: string, password: string) {
//     await this.waitForLoginForm();
//     await this.emailField().fill(email);
//     await this.passwordField().fill(password);
//     await this.loginButton().click();
//   }
// }



//   async login(email: string, password: string) {
  //     await this.waitForLoginForm();
  //     await this.emailField().fill(email);
  //     await this.passwordField().fill(password);
  //     await this.loginButton().click();
  //   }
  // }
  


