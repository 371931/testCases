import {
  selectValueFromDropdown,
  waitForSelectorAndClick,
} from "../../../helpers/helpers";

export const createActions = async (page, module, environment) => {
  if (environment == "prod") {
    // Click button:has-text("Create Load")
    await page.locator('button:has-text("Create Load")').click();
    await page.waitForURL(
      "https://golive.settyl.com/operationalplanning/loadsmanagement/?create=true"
    );
    // Click button:has-text("Next")
    await page.locator('button:has-text("Next")').click();
    // Click .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
    await page
      .locator(
        ".ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
      )
      .first()
      .click();
    // Click div:nth-child(3) > .ant-select-item-option-content
    await page
      .locator("div:nth-child(3) > .ant-select-item-option-content")
      .click();
    // Click div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
    await page
      .locator(
        "div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
      )
      .first()
      .click();
    // Click text=Sivakumar >> nth=1
    await page.locator("text=Sivakumar").nth(1).click();
    // Click div:nth-child(2) > .sc-fXSgeo > .customGrid > div > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
    await page
      .locator(
        "div:nth-child(2) > .sc-fXSgeo > .customGrid > div > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
      )
      .first()
      .click();
    // Click div:nth-child(9) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div:nth-child(2) > .ant-select-item-option-content
    await page
      .locator(
        "div:nth-child(9) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div:nth-child(2) > .ant-select-item-option-content"
      )
      .click();

    // Click div:nth-child(3) > .sc-fXSgeo > .customGrid > div > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
    await page
      .locator(
        "div:nth-child(3) > .sc-fXSgeo > .customGrid > div > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
      )
      .first()
      .click();
    // Click div:nth-child(10) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div > .ant-select-item-option-content >> nth=0
    await page
      .locator(
        "div:nth-child(10) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div > .ant-select-item-option-content"
      )
      .first()
      .click();
    // Click div:nth-child(3) > .sc-fXSgeo > .customGrid > div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item
    await page
      .locator(
        "div:nth-child(3) > .sc-fXSgeo > .customGrid > div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
      )
      .click();
    // Click text=Ronaldo >> nth=1
    await page.locator("text=Ronaldo").nth(1).click();
    // Click button:has-text("Next")
    await page.locator('button:has-text("Next")').click();

    await selectValueFromDropdown(
      page,
      "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div[2]/div[2]/div/div/div/div/div/span[2]",
      "//div[@title='Mumbai (ex Bombay)_INBOM']"
    );
    // Click div[role="button"]:has-text("Delivery")
    await page.locator('div[role="button"]:has-text("Delivery")').click();

    await selectValueFromDropdown(
      page,
      "//*[@id='formrenderer-form-step-container']/div/form/div[1]/div[2]/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div/div/div/div/span[2]",
      "//div[@title='Chennai (ex Madras)_INMAA']",
      2
    );

    // Click button:has-text("Submit")
    await page.locator('button:has-text("Submit")').click();
    await page.waitForURL(
      "https://golive.settyl.com/operationalplanning/loadsmanagement/"
    );
  }
};
