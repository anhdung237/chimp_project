"use strict";

var page = require('./page');

class loginPage extends page {
    get buttonLogIn()  { return browser.element('a*=LOG IN'); }
    get textboxEmailAddress() { return browser.element("input[placeholder*='Email address']"); }
    get textboxPassword() { return browser.element("input[placeholder*='Top secret password']"); }
    get buttonSignIn() { return browser.element("button*=Sign in"); }

    login(username, password) {
        this.textboxEmailAddress.waitForVisible();
        this.textboxEmailAddress.setValue(username);
        this.textboxPassword.setValue(password);
        this.buttonSignIn.click();
    }

}
module.exports = new loginPage();