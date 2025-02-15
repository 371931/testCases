const { test, expect } = require("@playwright/test");
const {
  selectValueFromDropdown,
  waitForSelectorAndClick,
  timeOutAndClick,
} = require("../helpers/helpers");
const { createActions } = require("./cases/loadManagement/create");
const { editActions } = require("./cases/loadManagement/edit");
const { viewDetailsActions } = require("./cases/loadManagement/viewDetails");

test("Create, Edit, and View Load Record", async ({ page }) => {
  test.setTimeout(120000);

  // Navigate to the website
  await page.goto(
    "https://staging.golive.settyl.com/operationalplanning/loadsmanagement/"
  );

  // Enter email and password
  await page.fill('input[name="emailId"]', "tawadid274@dcbin.com");
  await page.fill('input[name="password"]', "12345678");

  // Submit the login form
  await page.click('button:has-text("Sign In")');

  await createActions(page);
  await editActions(page);
  await viewDetailsActions(page);

  await page.pause();

  await page.close();
});
