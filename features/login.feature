Feature: Example about login function 
   Test the login function

   Background: The background
    Given I login the app with username "automationtestervietnam@gmail.com" and pass "chimpdemo123456"

   Scenario: Verify that user can login
    Then I see the user icon with name "AUTOMATION TESTERVIETNAM"