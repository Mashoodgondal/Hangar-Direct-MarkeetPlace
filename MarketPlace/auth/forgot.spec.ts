import {expect, test} from "@playwright/test"
import { LoginPage } from "../../pages/login"
import { ForgotPassword } from "../../pages/forgotPassword"

test.describe("forgot password validation",()=>{
    test.beforeEach(async({page})=>{
        const loginPage = new LoginPage(page)
       await loginPage.goto()
       await loginPage.clickForgotPassword()
    })
    test('check page visibulity',async({page})=>{
        const forgotPassword = new ForgotPassword(page)
        await forgotPassword.isPagevisible()
        await forgotPassword.enterEmail('micimej193@kudimi.com')
        
    })
    test('goto login page',async({page})=>{
        const forgotPassword = new ForgotPassword(page)
        await forgotPassword.goBackToSignIn()

    })
})




// })
// test('goto login page',async({page})=>{
//     const forgotPassword = new ForgotPassword(page)
//     await forgotPassword.goBackToSignIn()

// })