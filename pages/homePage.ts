import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  // // Stable button locator even with SVG inside
  signInButton = () =>
    this.page.locator("button", { hasText: "Sign in" });

  // Stable avatar locator
  avatar = () => this.page.locator('button[aria-haspopup="menu"]');

  async openHome() {
    await this.page.goto("https://hangardirect-github-io.vercel.app/");
  }
  async checkPageVisible(){
     this.page.getByText('Your one place for hangar space')
  }
  async checkButton(){
    //  this.page.locator("button", {hasText : "Sign in"});
     this.signInButton()
  }
  async checkAvator(){
    this.avatar()
  }
  async isUserLogedIn(){
    return await this.avatar().isVisible().catch(() => false);
  }
  async isSignupVisible(){
    return await this.signInButton().isVisible().catch(() => false);
  }
  async clickSignupAndGoToLogin() {
    if (await this.isSignupVisible()) {
      await this.signInButton().click();
      await this.page.waitForLoadState("networkidle");
      await expect(this.page.getByText("Welcome Back")).toBeVisible()
      
    }
  }
 
}