const { BasePage } = require('./base-page');

exports.HomePage = class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  getHomeTitleLocator() {
    const homeTitle = '//*[@title="Home"]';
    return this.page.locator(homeTitle);
  }

  getSearchFieldLocator() {
    const searchField = '//*[@placeholder="Search"]';
    return this.page.locator(searchField);
  }

  getStartPostFieldLocator() {
    const startPostField = '//*[text()="Start a post"]';
    return this.page.locator(startPostField);
  }

  getSideBarLocator() {
    const sideBar = '//*[@aria-label="Side Bar"]';
    return this.page.locator(sideBar);
  }

  getSideBarRoleLocator() {
    const sideBarRole =
      '//*[@id="ember26"]//p[contains(@class, "identity-headline")]';
    return this.page.locator(sideBarRole);
  }
};
