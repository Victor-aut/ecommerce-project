const Page = require('./page');

//sub page containing specific selectors and methods for a specific page
class LoginPage extends Page {

//define selectors using getter method
  get inputUsername () {return $('#email');}
  get inputPassword () {return $('#passwd');}
  get btnSubmit () {return $('#SubmitLogin');}
  get btnHome () {return $('[title="Home"]')}

/** a method to encapsule automation code to interact with the page
    e.g. to login using username and password**/
  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  goToHomePage() {
    this.btnHome.click()
  }

//overwrite specifc options to adapt it to page object
  open() {
    return super.open('index.php?controller=authentication&back=my-account');
  }
}

module.exports = new LoginPage();