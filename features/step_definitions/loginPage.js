var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {
    this.Given(/^I am on the vio login page$/, function () {
        return this.driver.get('https://cavun.so-labs.netas.com.tr/');
    });

    this.When(/^I see "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.id(text)).then(function (element) {
            return element;
        });
    });

    this.Then(/^I write my username "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.id('nick_name')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    // this.Then(/^I write my password "([^"]*)"$/, function (text) {
    //     return this.driver.findElement(By.id('login_pass')).then(function (element) {
    //         return element.sendKeys(text);
    //     });
    // });

    this.Then(/^I write room name "([^"]*)"$/, function (text) {
        return this.driver.findElement(By.id('oda')).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I click Login Button/, function () {
        return this.driver.findElement(By.id('butonGiris')).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I click Guest Button/, function () {
        var xpath = "//*[@class='btnGuest']/label";
        promise = this.driver.findElement(By.xpath(xpath));
        promise.then(function(element) {
            return element.click();
        });
    });

     this.Then(/^I should see the error message$/, function (errorMessages) {
         var xpath = "//*[@id='alertMessage']/span";
         var expected = [];
         expected[0] = [];
         promise = this.driver.findElements(By.xpath(xpath));
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