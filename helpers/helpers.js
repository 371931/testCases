export const selectValueFromDropdown = async (
  page,
  dropdownSelector,
  optionSelector,
  count = 1
) => {
  console.log({ optionSelector });
  // Click the dropdown to open it
  await page.locator(dropdownSelector).click();

  await page.waitForTimeout(3000);

  // Get the visible option elements by filtering out any hidden ones
  const options = await page.locator(optionSelector).elementHandles();

  // Click the first visible option
  if (options.length > 0 && options[count - 1]) {
    await options[count - 1].click();
  } else {
    throw new Error(`No visible options found for selector: ${optionSelector}`);
  }
};

export const waitForSelectorAndClick = async (page, selector, options = {}) => {
  await page.waitForSelector(selector, options);
  await page.locator(selector).click();
};

export const timeOutAndClick = async (page, selector, timeOut = 5000) => {
  await page.waitForTimeout(timeOut);
  await waitForSelectorAndClick(page, selector);
};
