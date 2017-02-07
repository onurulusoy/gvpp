#encoding: UTF-8
@huntGroup_tests
Feature: Hunt Group Feature
  As a user of GVPP SMB
  I want to test Hunt Group
  So that I should fill required fields

  Background:
    Given I am on the SMB login page
    When I see "login-input"
    Then I write my username "onursmb"
    When I see "password-input"
    Then I write my password "1234"
    Then I click Login Button

  @addHuntGroup
  Scenario: Add Hunt Group
    When I see the management side bar
    Then I click Hunt Group
    Then I see Groups title
    And I click Add button
    Then I write "gvpphuntg" group name
    And I write "gvpphuntdesc" group description
    And I write "gvpphuntdest" cfgda destination
    And I click Create button
    Then I should see the Hunt Group

  @addHuntGroupValidation
  Scenario: Add Hunt Group Validation
    When I see the management side bar
    Then I click Hunt Group
    Then I see Groups title
    And I click Add button
    Then I write "gvpphuntg" group name
    And I write "gvpphuntdesc" group description
    And I write "gvpphuntdest" cfgda destination
    And I click Create button
    Then I should see the Processing Error Message
    And Processing Error Message should be
      |Processing error - Username "gvpphuntg" matches an existing username, directory number, user alias or service alias. Please enter another value.|

  @deleteHuntGroup
  Scenario: Delete Hunt Group
    When I see the management side bar
    Then I click Hunt Group
    Then I should see the Hunt Group
    And I click Delete button
    Then I should see alert message for delete
    And I click confirmation button
    Then I should see group has been deleted
