const { BasePage } = require('./base-page');

exports.LogInPage = class LogInPage extends BasePage {
  constructor(page) {
    super(page);
  }

  getSignInButtonLocator() {
    const signInButton =
      '//*[@id="main-content"]//button[contains(text(), "Sign in")]';
    return this.page.locator(signInButton);
  }

  getEmailOrPhoneFieldLocator() {
    const emailOrPhoneField = '//*[@id="session_key"]';
    return this.page.locator(emailOrPhoneField);
  }

  getPasswordFieldLocator() {
    const passwordField = '//*[@id="session_password"]';
    return this.page.locator(passwordField);
  }
};
