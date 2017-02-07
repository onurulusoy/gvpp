#encoding: UTF-8
@UCDGroup_tests
Feature: UCD Group Feature
  As a user of GVPP SMB
  I want to test UCD Group
  So that I should fill required fields

  Background:
    Given I am on the SMB login page
    When I see "login-input"
    Then I write my username "onursmb"
    When I see "password-input"
    Then I write my password "1234"
    Then I click Login Button

  @addUCDGroup
  Scenario: Add UCD Group
    When I see the management side bar
    Then I click UCD Group
    Then I see Groups title
    And I click Add button
    Then I write "gvppucdg" group name
    And I write "gvppucddesc" group description
    And I click ADD DN button
    And I click Create button
    Then I should see the UCD Group

  @addUCDGroupValidation
  Scenario: Add UCD Group Validation
    When I see the management side bar
    Then I click UCD Group
    Then I see Groups title
    And I click Add button
    Then I write "gvppucdg" group name
    And I write "gvppucddesc" group description
    And I click ADD DN button
    And I click Create button
    Then I should see the UCD Group
    Then I should see the Processing Error Message
    And Processing Error Message should be
      |Processing error - Username "gvppucdg" matches an existing username, directory number, user alias or service alias. Please enter another value.|

  @deleteUCDGroup
  Scenario: Delete UCD Group
    When I see the management side bar
    Then I click UCD Group
    Then I should see the UCD Group
    And I click Delete button
    And I click confirmation button
    Then I should see group has been deleted