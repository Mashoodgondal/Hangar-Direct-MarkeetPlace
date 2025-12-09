import { Page, expect } from "@playwright/test";

export class SignupPage {

  constructor(public page: Page) {}

  // async goto() {
  //   await this.page.goto("https://hangardirect-github-io.vercel.app/signup");
  // }
  
  // async goto() {
  //   await this.page.goto("https://hangardirect-github-io.vercel.app/signup");
  // }
  
  // async goto() {
  //   await this.page.goto("https://hangardirect-github-io.vercel.app/signup");
  // }
  
  // async goto() {
  //   await this.page.goto("https://hangardirect-github-io.vercel.app/signup");
  // }



  firstName = () => this.page.locator("#first_name");
  lastName = () => this.page.locator("#last_name");
  email = () => this.page.locator("#email");
  password = () => this.page.locator("#password");
  confirmPassword = () => this.page.locator("#confirm_password");
  referral = () => this.page.locator("#referral");

  signupButton = () => this.page.getByRole("button", { name: "Sign Up" });

  googleTab = () => this.page.getByText("Sign up with Google");
  facebookTab = () => this.page.getByText("Sign up with Facebook");

  pageTitle = () => this.page.getByText("Get started with a free account");

  
  firstNameError = () =>
    this.page.getByText("First name can not be empty!");
  
  lastNameError = () =>
    this.page.getByText("Last name can not be empty!");
  
  emailRequiredError = () =>
    this.page.getByText("Email can not be empty!");
  
  passwordRequiredError = () =>
    this.page.getByText("Password can not be empty!");
  
  confirmPasswordRequiredError = () =>
    this.page.getByText("Confirm password can not be empty!");
  
  emailError = () => this.page.locator("text=valid email").first();
  passwordError = () => this.page.locator("text=8").first();
  confirmPasswordError = () =>
    this.page.locator("text=Password does not match");

  
  successToast = () =>
    this.page.locator("text=Account created successfully");

  

  async fillForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    referral?: string;
  }) {
    await this.firstName().fill(data.firstName);
    await this.lastName().fill(data.lastName);
    await this.email().fill(data.email);
    await this.password().fill(data.password);
    await this.confirmPassword().fill(data.confirmPassword);
    if (data.referral) await this.referral().fill(data.referral);
  }

  async clickSignupButton() {
    await this.signupButton().click();
  }

  async isSignupPageVisible() {
    await expect(this.pageTitle()).toBeVisible();
  }

}
