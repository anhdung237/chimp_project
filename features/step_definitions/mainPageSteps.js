var loginPage = require('../../pages/loginPage');
var mainPage = require('../../pages/mainPage');
var page = require('../../pages/page');

module.exports = function () {
    
    this.When(/^I click on the user icon$/, function () {
        mainPage.userIcon.click();
    });
    
    this.Then(/^I see the user icon with name "([^"]*)"$/, function (name) {
        expect(mainPage.username(name).waitForVisible()).toBe(true);
    });

    this.When(/^I select the option "([^"]*)"$/, function (option) {
        mainPage.option(option).click();
    });

    this.Then(/^I see the page "([^"]*)" displayed$/, function (page) {
        expect(mainPage.isPageDisplayed(page)).toBe(true);
    });
};