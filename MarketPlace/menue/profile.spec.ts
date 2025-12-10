// import { test, expect } from "@playwright/test";
// import { HomePage } from "../../pages/homePage";
// import { AccountPage } from "../../pages/account";
// import { LoginPage } from "../../pages/login";



// test("Avatar → Account → My Profile/Planes", async ({ page }) => {
//     const home = new HomePage(page);
//     const login = new LoginPage(page);
//     const account = new AccountPage(page);
  
//     // Step 1: Open home page
//     await home.openHome();
//     await home.checkPageVisible()
//     await home.clickSignupAndGoToLogin();
//     await login.waitForLoginForm()
//     await login.login("mashoodgondalofficial@gmail.com", "123123123");
//     await expect(home.avatar()).toBeVisible();
//     });
//     // Step 3: Assert login page
    
  
//     // Step 4: Login
  
//     // Step 5: Ensure homepage is loaded
  
//     // // Step 6: Open avatar menu
//     // await home.openAvatarMenu();
  
//     // // Step 7: Go to Account page
//     // await home.goToAccountPage();
  
//     // // Step 8: Click My Profile/Planes tab
//     // await account.openProfilePlanes();
  





import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { AccountPage } from "../../pages/account";
import { LoginPage } from "../../pages/login";

test("Avatar → Account → My Profile/Planes", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const account = new AccountPage(page);

  // Step 1: open home
  await home.openHome();
  // await home.checkPageVisible();

  // Step 2: go to login page
  await home.clickSignupAndGoToLogin();

  // Step 3: login
  await login.login("mashoodgondalofficial@gmail.com", "123123123");

  // Step 4: wait for home avatar
  await expect(home.avatar()).toBeVisible({ timeout: 8000 });

  // Step 5: go to account
  await home.goToAccountPage();

  // Step 6: open "My Profile / Planes"
  await account.openProfilePlanes();
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