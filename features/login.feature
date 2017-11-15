Feature: Example about login function 
   Test the login function

   Background: The background
    Given I login the app with username "automationtestervietnam@gmail.com" and pass "chimpdemo123456"
@watch
   Scenario: Verify that user can login
    Then I see the user icon with name "AUTOMATION TESTERVIETNAM"
    When I click on the user icon
    And I select the option "My Profile"
    Then I see the page "My Profile1" displayed

@watch
   Scenario: Verify that user can login 2
    Then I see the user icon with name "AUTOMATION TESTERVIETNAM"
    When I click on the user icon
    And I select the option "My Profile123456"