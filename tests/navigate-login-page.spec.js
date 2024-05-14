const { test, expect } = require('@playwright/test');
const { LogInPage } = require('../src/page-object/log-in-page.js');
const { Urls } = require('../src/configs');

test.describe('Navigate to the LogIn page', () => {
  test('Navigate to the LogIn page @positive @ui', async ({ page }) => {
    const logInPage = new LogInPage(page);

    await test.step(`Navigate to the Log In page`, async () => {
      await page.goto(Urls.BaseUrl);
    });

    await test.step(`Verify Log In page is opened`, async () => {
      await expect(logInPage.getSignInButtonLocator()).toBeVisible();
    });
  });
});
