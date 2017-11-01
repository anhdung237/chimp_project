var loginPage = require('../../pages/loginPage')
var mainPage = require('../../pages/mainPage')

module.exports = function () {
    
    this.Given(/^I login the app with username "([^"]*)" and pass "([^"]*)"$/, function (username, pass) {
        loginPage.open();
        loginPage.login(username, pass);
    });
    
};