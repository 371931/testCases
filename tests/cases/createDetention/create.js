import {
  selectValueFromDropdown,
  waitForSelectorAndClick,
} from "../../../helpers/helpers";

export const createActions = async (page, module, environment) => {
  await waitForSelectorAndClick(
    page,
    `#rc-tabs-0-panel-0 > div:nth-child(1) > div > div.sc-EgOXT.fGjnek > div.ant-table-wrapper.custom-table > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-cell-fix-right.ant-table-cell-fix-right-first > div > div:nth-child(2) > button > div`
  );

  await waitForSelectorAndClick(
    page,
    "xpath=/html/body/div[2]/div/div/div/div[2]/div/div/button[2]/span/div"
  );

  await page
    .locator(
      "text=Non - Collaborative DocumentNo approval is required for the Freight Charges. Inv"
    )
    .click();

  await waitForSelectorAndClick(
    page,
    `#webcomponents-sidemodal > div.webcomponents-footerContainer > footer > div > button.sc-sLsrZ.cJiVdI`
  );
  await waitForSelectorAndClick(
    page,
    `#webcomponents-sidemodal > div.webcomponents-footerContainer > footer > div > button.sc-sLsrZ.cJiVdI`
  );

  await waitForSelectorAndClick(
    page,
    `#webcomponents-sidemodal > div.sc-cVzyXs.iQdrK.webcomponents-sideModal-content > div > div > form > div.sc-tagGq.fJPzIS > div.sc-fXSgeo.fDeZNt.formSectionContent > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > div:nth-child(1) > button`
  );

  // Click input[name="transitDetails\.0\.departureTime"]
  await page
    .locator('input[name="transitDetails\\.0\\.departureTime"]')
    .click();
  // Click text=27 >> nth=2
  await page.locator("text=27").nth(2).click();
  // Click button:has-text("Ok")
  await page.locator('button:has-text("Ok")').click();

  // Click text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [aria-label="expand row"]
  await page
    .locator(
      'text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [aria-label="expand row"]'
    )
    .click();
  // Click text=1Stop TypePickupEntity NameCreate NewMumbai (ex Bombay)_INBOMAllowed Free TimeDa >> [placeholder="Enter Detention Rate"]
  await page
    .locator(
      'text=1Stop TypePickupEntity NameCreate NewMumbai (ex Bombay)_INBOMAllowed Free TimeDa >> [placeholder="Enter Detention Rate"]'
    )
    .click();
  // Fill text=1Stop TypePickupEntity NameCreate NewMumbai (ex Bombay)_INBOMAllowed Free TimeDa >> [placeholder="Enter Detention Rate"]
  await page
    .locator(
      'text=1Stop TypePickupEntity NameCreate NewMumbai (ex Bombay)_INBOMAllowed Free TimeDa >> [placeholder="Enter Detention Rate"]'
    )
    .fill("32");
  // Click text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [placeholder="Enter Detention Rate"]
  await page
    .locator(
      'text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [placeholder="Enter Detention Rate"]'
    )
    .click();
  // Fill text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [placeholder="Enter Detention Rate"]
  await page
    .locator(
      'text=2Stop TypeDeliveryEntity NameCreate NewChennai (ex Madras)_INMAAAllowed Free Tim >> [placeholder="Enter Detention Rate"]'
    )
    .fill("54");
  // Click input[name="transitDetails\.1\.departureTime"]
  await page
    .locator('input[name="transitDetails\\.1\\.departureTime"]')
    .click();
  // Click div:nth-child(9) > div > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel > .ant-picker-datetime-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > tr:nth-child(5) > td:nth-child(7) > .ant-picker-cell-inner
  await page
    .locator(
      "div:nth-child(9) > div > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel > .ant-picker-datetime-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > tr:nth-child(5) > td:nth-child(7) > .ant-picker-cell-inner"
    )
    .click();
  // Click button:has-text("Ok") >> nth=1
  await page.locator('button:has-text("Ok")').nth(1).click();
  // Click button:has-text("Next")
  await page.locator('button:has-text("Next")').click();
  // Click .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
  await page
    .locator(
      ".ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
    )
    .first()
    .click();
  // Click .ant-select-item-option-content >> nth=0
  await page.locator(".ant-select-item-option-content").first().click();
  // Click div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item >> nth=0
  await page
    .locator(
      "div:nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
    )
    .first()
    .click();
  // Click text=Sivakumar >> nth=1
  await page.locator("text=Sivakumar").nth(1).click();
  // Click button:has-text("Submit")
  await page.locator('button:has-text("Submit")').click();
};
