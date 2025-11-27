import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  // signInButton = () => this.page.getByRole("button", { name: "Sign in" });
  // signInButton = () => this.page.getByText('Sign in', { exact: true })
  avatar = () => this.page.locator('button[aria-haspopup="menu"]');

  async openHome() {
    await this.page.goto("https://hangardirect-github-io.vercel.app/");

  }
     async checkVisibility(){
      await expect(this.page.getByText('Your one place for hangar space')).toBeVisible()
     }
     async checkbutotnVisiblity(){
      await expect(this.page.getByRole("button",{ name: "Sign in"})).toBeVisible()
     }
  async clickSignupAndGoToLogin() {
    // await this.signInButton().click();
  //  await this.signInButton().click()
  await this.page.locator('text=Sign in').click({ force: true });

    await expect(this.page.getByText("Welcome Back")).toBeVisible();
  }

  async openAvatarMenu() {
    await this.avatar().click();
    await expect(this.page.getByRole("menu")).toBeVisible();
  }

  async goToAccountPage() {
    await this.openAvatarMenu();
    await this.page.getByRole("menuitem", { name: "Account" }).click();
    await expect(this.page.getByText("My Account")).toBeVisible();
  }
}



