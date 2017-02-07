var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {

    this.Then(/^I click UCD Group$/, function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[1]/ul/li[6]/div";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I click ADD DN button/, function () {
        var xpath = "//*[@id='mdlBdy']/form/fieldset/div[6]/div[2]/div[1]/div/div/div/div/button";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.click();
        });
    });

    this.Then('I should see the UCD Group', function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[2]/div[2]/div/div/div/div/group-list-item/div[2]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

};