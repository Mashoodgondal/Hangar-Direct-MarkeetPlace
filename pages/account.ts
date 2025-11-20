import { Page, expect } from "@playwright/test";

export class AccountPage {
  constructor(private page: Page) {}

  tab = (name: string) =>
    this.page.getByRole("tab", { name, exact: true });

  async openProfilePlanes() {
    await this.tab("My Profile / Planes").click();
    await expect(this.page.getByText("My Profile Information")).toBeVisible();
  }
}
