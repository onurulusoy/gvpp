#encoding: UTF-8
@loginSuccess_tests
Feature: Login Success Feature
  As a user of VIO
  I want to login
  So that I should write my username and room name

    Background:
      Given I am on the vio login page

      @success_login
  Scenario: Success Login
    When I see "nick_name"
    Then I write my username "onurulu"
#    When I see "login_pass"
#    Then I write my password ""
    When I see "oda"
    Then I write room name "odat2"
    Then I click Login Button

#  @guest_login
#  Scenario: Guest Login
#    When I see "guestCheckBox"
#    Then I click Guest Button
#    Then I see "login_name"
#    Then I write my username "onurulu"
#    When I see "login_room"
#    Then I write room name "odat2"
#    Then I click Login Button

      @fail_login1
  Scenario: Fail Login1
    When I click Login Button
    Then I should see the error message
        |Please make sure that you have enter a room name and nickname.|

      @fail_login2
  Scenario: Fail Login2
    When I see "nick_name"
    Then I write my username "onurulu"
    When I click Login Button
    Then I should see the error message
      |Please make sure that you have enter a room name.|

      @fail_login3
  Scenario: Fail Login3
    When I see "nick_name"
    Then I write my username "asdf+"
    When I click Login Button
    Then I should see the error message
      |Nickname can only contain letters, numbers and following characters: '_' , '-', '@'|

  @fail_login4
  Scenario: Fail Login4
    When I see "oda"
    Then I write room name "odat2"
    When I click Login Button
    Then I should see the error message
      |Please make sure that you have enter a nickname.|

     @success_login
  Scenario: Success Login
    When I see "nick_name"
    Then I write my username "onurulu"
#    When I see "login_pass"
#    Then I write my password ""
    When I see "oda"
    Then I write room name "ASDF+"
    Then I click Login Button
    Then I should see the error message
      |Room name can only contain smallcase letters, numbers and '-' character except Turkish special characters.|