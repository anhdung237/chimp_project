"use strict";

var page = require('./page');

class mainPage extends page {
    get userIcon() { return browser.element('a.userLoggedIn'); }
    get buttonEditProfile() { return browser.element('span=Edit Profile'); }
    username(name) { return browser.element("a*=" + name); }
    option(option) { return browser.element('a=' + option); }

    isPageDisplayed(page) {
        if (page == 'My Profile') {
            return this.buttonEditProfile.waitForVisible();
        } else {
            return false;
        };
    }
}
module.exports = new mainPage();