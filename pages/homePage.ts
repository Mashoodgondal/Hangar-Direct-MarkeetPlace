import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

 
  signInButton = () =>
    this.page.locator("button", { hasText: "Sign in" });

  
  avatar = () => this.page.locator('button[aria-haspopup="menu"]');

  avatarMenuItem = (item: string) =>
    this.page.getByRole("menuitem", { name: item });

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
  async openAvatarMenu() {
    await this.avatar().click();
    await expect(this.page.getByRole("menu")).toBeVisible();
  }
  async goToAccountPage() {
    await this.openAvatarMenu();
    await this.avatarMenuItem("Account").click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.getByText("My Account")).toBeVisible();
  }
 
}