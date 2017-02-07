#encoding: UTF-8
@login_tests
Feature: Login Feature
  As a user of GVPP SMB
  I want to login
  So that I should write my username and password

    Background:
      Given I am on the SMB login page

      @success_login
  Scenario: Success Login
    When I see "login-input"
    Then I write my username "lbtrung-smba2"
    When I see "password-input"
    Then I write my password "1234"
    Then I click Login Button

      @fail_login1
  Scenario: Fail Login1
    When I see "btn btn-primary" icon
    When I click Login Button
    Then I should see the error message
        |The provided account information is invalid. Username and password are case-sensitive fields.|

      @fail_login2
  Scenario: Fail Login2
    When I see "login-input"
    Then I write my username "lbtrung-smba2"
    When I click Login Button
    Then I should see the error message
        |The provided account information is invalid. Username and password are case-sensitive fields.|

      @fail_login3
  Scenario: Fail Login3
    When I see "password-input"
    Then I write my password "1234"
    When I click Login Button
    Then I should see the error message
        |The provided account information is invalid. Username and password are case-sensitive fields.|

      @fail_login4
  Scenario: Fail Login4
    When I see "login-input"
    Then I write my username "lbtrung-smba2"
    When I see "password-input"
    Then I write my password "12345"
    Then I click Login Button
    Then I should see the error message
        |The provided account information is invalid. Username and password are case-sensitive fields.|