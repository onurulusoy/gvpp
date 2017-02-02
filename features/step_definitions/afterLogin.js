var seleniumWebdriver = require('selenium-webdriver');
//var async = require('async');

var By = seleniumWebdriver.By;

//const assert = require('assert');

module.exports = function () {

    this.Then(/^I see "([^"]*)" icon$/, function (selection) {
        var condition = seleniumWebdriver.until.elementLocated(By.id(selection));
        return this.driver.wait(condition, 10000);
    });

    this.Then(/^I click "([^"]*)" icon$/, function (text) {
        return this.driver.findElement(By.id(text)).then(function (element) {
            return element.click();
        });
    });

    this.When(/^I should see "([^"]*)" icon$/, function (text) {
        return this.driver.findElement(By.id(text)).then(function (element) {
            return element;
        });
    });

};