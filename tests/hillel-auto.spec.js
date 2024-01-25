import { test, expect } from "@playwright/test";

test.describe("Hillel auto first test", () => {
  test("Registration", async ({ page }) => {
    const emailInput = page.locator("#signupEmail");
    const passwordInput = page.locator('input[name="password"]');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
    const randomUser = Math.floor(Math.random() * 1000);
    const email = `random_user${randomUser}@test.com`;
    const waitIconUserProfile = page.locator("#userNavDropdown");
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    await page.locator("button.btn-primary").click();
    await page.locator("#signupName").fill("Max");
    await expect(page.locator("#signupName")).toHaveValue("Max");
    await page.locator("#signupLastName").fill("Ra");
    await emailInput.fill(email);
    await expect(emailInput).toHaveValue(email);
    await passwordInput.fill("Qwerty1234");
    await expect(passwordInput).toHaveValue("Qwerty1234");
    await repeatPasswordInput.fill("Qwerty1234");
    await expect(repeatPasswordInput).toHaveValue("Qwerty1234");
    await page.locator("button", { hasText: "Register" }).click();
    await waitIconUserProfile.waitFor({ state: 'visible' });
  });
});