// import { Locator, Page, expect } from "@playwright/test";

// export class LoginPage {
//   readonly page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }    
//       async goto(){
//         await this.page.goto('https://hangardirect-github-io.vercel.app/signin?ref=/')
//       }
//   googleTab(): Locator {
    
//     return this.page.getByText('Sign in with Google')
//   }

//   facebookTab(): Locator {
    
//     return this.page.getByText('Sign in with Facebook')
//   }

//   welcomeText(): Locator {
//     return this.page.locator("text=Welcome Back");
//   }

//   successToast(): Locator {
//     return this.page.locator("text=Logged in successfully");
//   }
//   invalidToast = () => this.page.locator("text=Invalid credentials");

//   errorMessage(): Locator {
//     return this.page.locator("text = Invalid login credentials");
//   }
//   emailFieldError = () =>
//     this.page.locator("text=Please enter a valid email address");

//   passwordFieldError = () =>
//     this.page.locator("text=Password must be greater than 8 characters");
//   async isLoginPageVisible() {
//     await expect(this.welcomeText()).toBeVisible();
//   }
//   async login(email: string, password: string) {
//     await this.page.fill('#email',email)
//     await this.page.fill('#password',password)
//     await this.page.getByText('Sign in').click()
//   }
//   async clickGoogleTab() {
//     await this.googleTab().click();
//   }
//   async clickFacebookTab() {
//     await this.facebookTab().click();
//   }
// }


import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://hangardirect-github-io.vercel.app/signin?ref=/");
  }



  emailField = () => this.page.locator("#email");
  passwordField = () => this.page.locator("#password");

  
  loginButton = () => this.page.getByRole("button", { name: "Sign In" });

  googleTab = () => this.page.getByText("Sign in with Google");
  facebookTab = () => this.page.getByText("Sign in with Facebook");


  welcomeText = () => this.page.getByText("Welcome Back");

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

  async isLoginPageVisible() {
    await expect(this.welcomeText()).toBeVisible();
  }
}
