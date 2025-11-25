// import { Page, expect } from "@playwright/test";

// export class AccountPage {

//   constructor(private page: Page) {}

//   tab = (name: string) =>
//     this.page.locator("div[id='__next'] div[class='2xl:container mb-10 2xl:mx-auto px-5 min-h-[calc(100dvh-30dvh)]'] a:nth-child(1)")

//   // page.getByRole("tab", { name, exact: true });

//   async openProfilePlanes() {
//     await this.tab("My Profile / Planes").click();
//     await expect(this.page.getByText("Manage fleet")).toBeVisible();
//   }
// }


//   // page.getByRole("tab", { name, exact: true });

//   async openProfilePlanes() {
//     await this.tab("My Profile / Planes").click();
//     await expect(this.page.getByText("Manage fleet")).toBeVisible();
//   }
// }
//   // page.getByRole("tab", { name, exact: true });

//   async openProfilePlanes() {
//     await this.tab("My Profile / Planes").click();
//     await expect(this.page.getByText("Manage fleet")).toBeVisible();
//   }
// }




import { Page, expect } from "@playwright/test";

export class AccountPage {
  constructor(private page: Page) {}

  tab = (name: string) =>
    this.page.getByRole("link", { name, exact: false });

  async openProfilePlanes() {
    await this.tab("My Profile / Planes").click();
    await expect(this.page.getByText("Manage fleet")).toBeVisible();
  }
}
