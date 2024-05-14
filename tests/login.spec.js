const { test, expect } = require('@playwright/test');
const { LogInPage } = require('../src/page-object/log-in-page.js');
const { HomePage } = require('../src/page-object/home-page.js');
const { Urls, Credentials, Timeouts } = require('../src/configs');
const { expectedName, expectedRole } = require('../test-parameters/login.js');

test.describe('Log In tests', () => {
  test.beforeEach(async ({ page }) => {
    await test.step(`Navigate to the Log In page`, async () => {
      await page.goto(Urls.BaseUrl);
    });
  });

  test(`Log In to the existing account with username: '${expectedName}' and role: ${expectedRole} @positive @ui`, async ({
    page,
  }) => {
    const logInPage = new LogInPage(page);
    const homePage = new HomePage(page);

    await test.step(`Perform Logging In`, async () => {
      await logInPage.getEmailOrPhoneFieldLocator().fill(Credentials.email);
      await logInPage.getPasswordFieldLocator().fill(Credentials.password);

      await expect(logInPage.getSignInButtonLocator()).toBeVisible();
      await expect(logInPage.getEmailOrPhoneFieldLocator()).not.toBeEmpty();
      await expect(logInPage.getPasswordFieldLocator()).not.toBeEmpty();

      await logInPage.getSignInButtonLocator().click();
    });

    await test.step(`Verify Logging In is successful`, async () => {
      expect(page).toHaveURL(Urls.HomePageUrl);
      await expect(homePage.getHomeTitleLocator()).toBeVisible({ timeout: Timeouts.extendedTimeout });
      await expect(homePage.getSearchFieldLocator()).toBeVisible({ timeout: Timeouts.extendedTimeout });
      await expect(homePage.getStartPostFieldLocator()).toBeVisible({ timeout: Timeouts.extendedTimeout });
      await expect(homePage.getSideBarLocator()).toContainText(expectedName, { timeout: Timeouts.extendedTimeout });
    });
  });
});
