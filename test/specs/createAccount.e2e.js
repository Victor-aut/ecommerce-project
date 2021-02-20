const SigninPage = require('../pageobjects/signin.page');

describe('Create an account', () => {
  before(() => {
    require('expect-webdriverio');
  });

  it('Go to the sign in form', () => {
    SigninPage.open();

    let random = Math.floor(Math.random() * 9999);
    let email = `ragnar_${random}@test.com`;

    SigninPage.enterEmail(email);
    expect($('.page-subheading')).toHaveTextContaining('YOUR PERSONAL INFORMATION');

    SigninPage.selectTitle()
      .enterFullName('Victor', 'Ragnar')
      .enterPassword('mySecretPassword')
      .enterBirthDate(22, 4, 2000)
      .enterAdress('Victor', 'Ragnar', 'Fake address 35')
      .enterLocation('Austin', 43, '58974')
      .enterMobilePhone('(55) 456-582-2154')
      .setAlias('Texas Address')
      .clickRegisterButton();

    expect($('.info-account')).toHaveTextContaining('Welcome to your account.');
  });
});
