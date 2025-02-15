import {
  selectValueFromDropdown,
  waitForSelectorAndClick,
} from "../../../helpers/helpers";

export const createActions = async (page) => {
  // Click on "Create Load" button
  await waitForSelectorAndClick(page, "text=Create Load");

  await waitForSelectorAndClick(page, "text=Next");

  await waitForSelectorAndClick(page, "text=Next");

  await selectValueFromDropdown(
    page,
    "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div[1]/div[2]/div/div/div/div/div/span[2]",
    "//div[@title='GlobalTrade Solutions']"
  );

  // await page.click("text=Previous");

  await selectValueFromDropdown(
    page,
    "//*[@id='formrenderer-form-step-container']/div/form/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div/div/span[2]",
    "//div[@title='Manchester Steel']",
    2
  );

  await waitForSelectorAndClick(page, "text=Next");

  await selectValueFromDropdown(
    page,
    "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div[2]/div[2]/div/div/div/div/div/span[2]",
    "//div[@title='Mumbai (ex Bombay)_INBOM']"
  );

  await waitForSelectorAndClick(
    page,
    "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div/div[1]/div[2]/span"
  );

  await selectValueFromDropdown(
    page,
    "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div/div/div/div/span[2]",
    "//div[@title='Chennai (ex Madras)_INMAA']",
    2
  );

  await waitForSelectorAndClick(page, "text=Submit");
};
