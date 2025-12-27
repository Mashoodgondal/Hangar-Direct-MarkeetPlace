import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";

test.describe("Home Page – Signup or Avatar Flow", () => {

  test('checkt page visibulity', async ({ page }) => {
    const home = new HomePage(page)
    await home.openHome()
    await home.checkVisibility()

  })

})


































