import { expect, Page } from "@playwright/test";

export class ForgotPassword{
    constructor(private page: Page){}

    async isPagevisible(){
        await expect( this.page.getByText("Forgot Password")).toBeVisible()
    }
    async enterEmail(email:string){
         await this.page.locator('#email').fill(email)

    }
    async clickToReset(){
        await this.page.getByText('Send Reset Link').click()
        await expect(this.page.getByText('Reset Password')).toBeVisible()
    }
    async goBackToSignIn(){
        await this.page.getByText('Sign in').click()
        await expect(this.page.getByText('Welcome Back')).toBeVisible()
    }

}
