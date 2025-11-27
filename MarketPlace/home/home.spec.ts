import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";

test.describe("Home Page – Signup or Avatar Flow", () => {
  
test('checkt page visibulity',async({page})=>{
  const home = new HomePage(page)
 await home.openHome()
  await home.checkVisibility()
//  await home.checkbutotnVisiblity()
    await home.clickSignupAndGoToLogin()
})

})





// home.openHome
// home.checkPageVisible()
// home.checkButton()
// home.checkAvator()
// home.isSignupVisible()
// home.isUserLogedIn()
  //  const login = await home.isUserLogedIn()
  //  if(login){
  //   console.log("user is logedIn")
  //  await expect(home.avatar()).toBeVisible();
  //  }
  //  else{
  //  console.log("User is not logedIn")
  //  }
// home.openHome
// home.checkPageVisible()
// home.checkButton()
// home.checkAvator()
// home.isSignupVisible()
// home.isUserLogedIn()
  //  const login = await home.isUserLogedIn()
  //  if(login){
  //   console.log("user is logedIn")
  //  await expect(home.avatar()).toBeVisible();
  //  }
  //  else{
  //  console.log("User is not logedIn")
  //  }