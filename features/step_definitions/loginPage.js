var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {
    this.Given(/^I am on the SMB login page$/, function () {
        return this.driver.get('http://47.168.72.171:7001/gvpp-wui/#smb');
    });

    this.When(/^I see "([^"]*)"$/, function (text) {
        var condition = seleniumWebdriver.until.elementLocated(By.id(text));
        return this.driver.wait(condition, 30000);
    });

    this.Then(/^I see "([^"]*)" icon$/, function (selection) {
        var condition = seleniumWebdriver.until.elementLocated(By.className(selection));
        return this.driver.wait(condition, 15000);
    });

    this.Then(/^I write my username "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.id('login-input')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I write my password "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.id('password-input')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I click Login Button/, function () {
        return this.driver.findElement(By.className('btn btn-primary')).then(function (element) {
            return element.click();
        });
    });

     this.Then(/^I should see the error message$/, function (errorMessages) {
         var expected = [];
         expected[0] = [];
         promise = this.driver.findElements(By.className("validationMessage"));
         promise.then(function (elements) {
             async.eachSeries(elements, function (element, callback) {
                 element.getText().then(function (text) {
                     expected[0].push(text);
                     callback();
                 });
             }, function (err) {
                 if (err) {
                     console.error(err);
                 } else {
                     assert.deepEqual(errorMessages.raw(), expected)
                 }
             });
         });
     });

};