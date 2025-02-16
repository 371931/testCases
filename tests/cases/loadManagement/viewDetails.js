import {
  timeOutAndClick,
  waitForSelectorAndClick,
} from "../../../helpers/helpers";

// await waitForSelectorAndClick(
//   page,
//   "xpath=/html/body/div[1]/div/div/div[3]/div[2]/div/div/div/div/div/div/div[5]/div[2]/div[2]/div/div[1]/div[2]/button"
// );
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-Purchase Order Visibility']/span/span"
// );

// await waitForSelectorAndClick(page, "//*[@id='rc-tabs-3-more']");
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-Shipment Charges']/span/span"
// );

// await waitForSelectorAndClick(page, "//*[@id='rc-tabs-3-more']");
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-Shipment Charges']/span/span"
// );

// await waitForSelectorAndClick(page, "//*[@id='rc-tabs-3-more']");
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-SmartDocs']/span/span"
// );

// await waitForSelectorAndClick(page, "//*[@id='rc-tabs-3-more']");
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-Pinboard']/span/span"
// );

// await waitForSelectorAndClick(page, "//*[@id='rc-tabs-3-more']");
// await timeOutAndClick(
//   page,
//   "//*[@id='rc-tabs-3-more-popup-Audit Trail']/span/span"
// );

export const viewDetailsActions = async (page, module, environment) => {
  await page.waitForTimeout(5000);

  // view details button
  await waitForSelectorAndClick(
    page,
    "//*[@id='rc-tabs-0-panel-0']/div[1]/div/div/div[1]/div/div[2]/div[2]/div[2]/button[2]"
  );

  const tabs = [
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[2]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[3]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[4]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[5]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[6]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[7]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[8]",
      timeOut: 5000,
    },
    {
      selector:
        "//*[@id='webcomponents-sidemodal']/div[2]/div[2]/div/div[1]/div[1]/div/div[9]",
      timeOut: 15000,
    },
  ];

  for (const tab of tabs) {
    await timeOutAndClick(page, tab?.selector, tab?.timeOut);
  }

  // await page.pause();

  console.log("Finished clicking all tabs.");

  // await waitForSelectorAndClick(
  //   page,
  //   "xpath=/html/body/div[1]/div/div/div[3]/div[2]/div/div/div/div/div/div/div[5]/header/button",
  //   { timeout: 30000 } // Increase timeout to 30 seconds
  // );
};
