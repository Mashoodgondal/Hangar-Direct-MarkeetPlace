import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";


test.describe("Home Page – Signup or Avatar Flow", () => {
  
test('checkt page visibulity',async({page})=>{
  const home = new HomePage(page)
  home.openHome
  home.checkPageVisible()
  home.checkButton()
  home.checkAvator()
  home.isSignupVisible()
  home.isUserLogedIn()
     const login = await home.isUserLogedIn()
     if(login){
      console.log("user is logedIn")
     await expect(home.avatar()).toBeVisible();
     }
     else{
     console.log("User is not logedIn")
     }
    await home.clickSignupAndGoToLogin()
   
  
})

})



//   test("Verify avatar if logged in OR click signup if logged out", async ({ page }) => {
  //     const home = new HomePage(page);

//     // Step 1: Open main page
//     await home.openHome();

//     // Step 2: Check if user is already logged in
//     const loggedIn = await home.isUserLoggedIn();

//     if (loggedIn) {
//       console.log("User is logged in → Avatar found.");
//       await expect(home.avatar()).toBeVisible();
//     } 
//     else {
//       console.log("User is NOT logged in → Signup button visible.");

//       // Signup button should be visible
//       await expect(home.signInButton()).toBeVisible();


//       // Step 3: Click Signup and verify navigation
//       await home.clickSignupAndGoToLogin();

//       // Step 4: Verify landing page is login/signup page
//       await expect(page.url()).toMatch('https://hangardirect-github-io.vercel.app/signin?ref=/');
//     }
//   });

// });
