#encoding: UTF-8
@afterLoginActions
Feature: After Login Actions Feature
  As a user of GVPP SMB
  I want to login
  After that I can check the navigation menu

  Background:
    Given I am on the SMB login page
    When I see "login-input"
    Then I write my username "lbtrung-smba2"
    When I see "password-input"
    Then I write my password "1234"
    Then I click Login Button

  @navigation_menu
  Scenario: Navigation Menu
    Then I should see "navigation-menu" icon