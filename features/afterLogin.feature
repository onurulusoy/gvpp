#encoding: UTF-8
@loginSuccess_tests
Feature: Login Success Feature
  As a user of VIO
  I want to login
  So that I should write my username and room name

  Background:
    Given I am on the vio login page
    When I see "nick_name"
    Then I write my username "onurulu"
#    When I see "login_pass"
#    Then I write my password ""
    When I see "oda"
    Then I write room name "odat2"
    Then I click Login Button

  @success_login
  Scenario: Toolbars
    When I see "pintoolbarButton" icon
    Then I click "pintoolbarButton" icon
    And I should see "fullScreen" icon
    And I click "fullScreen" icon