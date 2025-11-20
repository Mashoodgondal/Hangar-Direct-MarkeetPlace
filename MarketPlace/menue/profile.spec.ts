import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { AccountPage } from "../../pages/account";

test("Avatar → Account → My Profile/Planes", async ({ page }) => {
  const home = new HomePage(page);
  const account = new AccountPage(page);

  await home.openHome();

  // Ensure logged-in user
  if (!(await home.isUserLogedIn())) {
    throw new Error("User is not logged in. Login first before running this test.");
  }

  // Go to Account page
  await home.goToAccountPage();

  // Click the My Profile/Planes tab
  await account.openProfilePlanes();
});
