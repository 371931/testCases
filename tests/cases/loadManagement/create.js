import {
  selectValueFromDropdown,
  waitForSelectorAndClick,
} from "../../../helpers/helpers";

export const createActions = async (page, module, environment) => {
  // Click on "Create Load" button
  const createBtnSelector =
    module != "ltl" ? "text=Create Load" : "text=Create LTL";
  await waitForSelectorAndClick(page, createBtnSelector);

  await waitForSelectorAndClick(page, "text=Next");

  environment == "staging" &&
    (await waitForSelectorAndClick(page, "text=Next"));

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
