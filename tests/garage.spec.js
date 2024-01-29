import { test, expect } from "@playwright/test";
import { GaragePage } from "./POM/garage.page";

test.describe("Garage add car tests", () => {
  test("Add car", async ({ page }) => {
    const garagePage = new GaragePage(page);
    await page.goto("/");
    await garagePage.addCarButton.click();
    await garagePage.brandDropdown.selectOption("Porsche");
    await garagePage.modelDropdown.selectOption("Panamera");
    await garagePage.mileageInput.fill("100");
    await garagePage.addButton.click();
    await garagePage.addFuelExpenseButton.first().click();
    await garagePage.numberOfLiters.fill("50");
    await garagePage.totalCost.fill("35000");
    await garagePage.mileageInput.fill("150");
    await garagePage.addButton.click();
    await expect(garagePage.tableCellCurrency).toHaveText("35000.00 USD");
  });
});