import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";


test.describe("Home Page – Signup or Avatar Flow", () => {
  
test('checkt page visibulity',async({page})=>{
  const home = new HomePage(page)
  home.openHome
  home.checkPageVisible()
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
    await home.clickSignupAndGoToLogin()
   
  
})

})


