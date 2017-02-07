var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function () {

    this.When(/^I see the management side bar$/, function () {
        var condition = seleniumWebdriver.until.elementLocated(By.className("left pushy-left do_pushy_close"));
        return this.driver.wait(condition, 10000);
    });

    this.Then(/^I click Hunt Group$/, function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[1]/ul/li[4]";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.click();
        });
    });

    this.Then('I see Groups title', function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[2]/div[1]/div[2]/div/h3/span/span[1]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    this.Then(/^I click Add button/, function () {
        return this.driver.findElement(By.className('icon icon-new')).then(function (element) {
            return element.click();
        });
    });

    this.When('I see Group Name field', function () {
        var xpath = "//*[@id='mdlBdy']/form/fieldset/div[2]/div/input";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    this.Then(/^I write "([^"]*)" group name$/, function (text) {
        var xpath = "//*[@id='mdlBdy']/form/fieldset/div[1]/div/input";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I write "([^"]*)" group description/, function (text) {
        var xpath = "//*[@id='mdlBdy']/form/fieldset/div[2]/div/input";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I write "([^"]*)" cfgda destination/, function (text) {
        var xpath = "//*[@id='mdlBdy']/form/fieldset/div[11]/div/div/input";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.sendKeys(text);
        });
    });

    this.Then(/^I click Create button$/, function () {
        var xpath = "//*[@id='ko-bs-modal-1']/div/div/div[2]/button[2]";
        return this.driver.findElement(By.xpath(xpath)).then(function (element) {
            return element.click();
        });
    });

    this.Then('I should see the Hunt Group', function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[2]/div[2]/div/div/div/div/group-list-item/div/div/div/div[2]/div[1]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    this.Then(/^I click Delete button/, function () {
        return this.driver.findElement(By.className('icon icon-delete-row')).then(function (element) {
            return element.click();
        });
    });

    this.Then(/^I click confirmation button$/, function () {
        return this.driver.findElement(By.id("ko-notif-ko-notif-1-button-1")).then(function (element) {
            return element.click();
        });
    });

    this.Then('I should see group has been deleted', function () {
        var xpath = "//*[@id='smb-manage-content']/div/div/div/div[2]/div[2]/comment()[1]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    this.Then('Processing Error Message should be', function (errorMessages) {
        var expected = [];
        expected[0] = [];
        promise = this.driver.findElements(By.className("m_alert_content"));
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

    this.Then(/^I should see the Processing Error Message$/, function () {
        var condition = seleniumWebdriver.until.elementLocated(By.className("m_alert_content"));
        return this.driver.wait(condition, 20000);
    });

};
