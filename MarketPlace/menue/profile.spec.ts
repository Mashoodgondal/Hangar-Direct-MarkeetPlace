import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { AccountPage } from "../../pages/account";
import { LoginPage } from "../../pages/login";



test("Avatar → Account → My Profile/Planes", async ({ page }) => {

    // Always start clean
    await page.context().clearCookies();
  
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);
  
    // Step 1: Open home page
    await home.openHome();
  
    // Step 2: Go to login page (Sign in button WILL appear because cookies cleared)
    await home.clickSignupAndGoToLogin();
  
    // Step 3: Assert login page
    
    await expect(login.welcomeText()).toBeVisible();
  
    // Step 4: Login
    // await login.login("mashoodgondalofficial@gmail.com", "123123123");
  
    // Step 5: Ensure homepage is loaded
    // await expect(home.avatar()).toBeVisible();
  
    // // Step 6: Open avatar menu
    // await home.openAvatarMenu();
  
    // // Step 7: Go to Account page
    // await home.goToAccountPage();
  
    // // Step 8: Click My Profile/Planes tab
    // await account.openProfilePlanes();
  });
  






// test("Avatar → Account → My Profile/Planes", async ({ page }) => {
//   const home = new HomePage(page);
//   const account = new AccountPage(page);
//    const login = new LoginPage(page)
 
//   await home.openHome();
//   await home.clickSignupAndGoToLogin()
//   await login.welcomeText().isVisible()
// //    await login.goto()
// //  await home.
// //    await login.login("mashoodgondalofficial@gmail.com", "123123123")
// await login.login("mashoodgondalofficial@gmail.com", "123123123");
//    expect(home.checkPageVisible());
// // //   Ensure logged-in user
// //   if (!(await home.isUserLogedIn())) {
// //     throw new Error("User is not logged in. Login first before running this test.");
// //   }
// //   await home.openAvatarMenu();
// //   // Go to Account page
// //   await home.goToAccountPage();

// //   // Click the My Profile/Planes tab
// //   await account.openProfilePlanes();
// });
