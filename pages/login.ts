import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
//   emailField(): Locator {
//     return this.page.locator("input[name='email'], input[type='email']");
//   }

//   passwordField(): Locator {
//     return this.page.locator("input[name='password'], input[type='password']");
//   }

//   loginButton(): Locator {
//     return this.page.locator("button:has-text('Login'), button:has-text('Sign in')");
//   }

  googleTab(): Locator {
    return this.page.locator("button:has-text('Google'), div:has-text('Google')");
  }

  facebookTab(): Locator {
    return this.page.locator("button:has-text('Facebook'), div:has-text('Facebook')");
  }

  welcomeText(): Locator {
    return this.page.locator("text=Welcome Back");
  }

  successToast(): Locator {
    return this.page.locator("text=logIn successfully");
  }

  errorMessage(): Locator {
    return this.page.locator(".text-red-500, .error-message, text=Invalid");
  }

  // Actions
  async isLoginPageVisible() {
    await expect(this.welcomeText()).toBeVisible();
  }

  async login(email: string, password: string) {
    // await this.emailField().fill(email);
    // await this.passwordField().fill(password);
    // await this.loginButton().click();
    await this.page.fill('#email',email)
    await this.page.fill('#password',password)
    await this.page.getByText('Sign in').click()

  }

  async clickGoogleTab() {
    await this.googleTab().click();
  }

  async clickFacebookTab() {
    await this.facebookTab().click();
  }
}
