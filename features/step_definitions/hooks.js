module.exports = function () {
    // runs Before each and every single scenario
    this.Before(function () {
        browser.reload();
        browser.windowHandleSize({ width: 2560, height: 1440 });
        console.log('Before Scenario By hooks.js');
    });

    

};