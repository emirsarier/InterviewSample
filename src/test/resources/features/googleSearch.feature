@regression
Feature: Google search functionality
  Agile Story: As a user, when I am on the google search page,
  I should be able to search whatever I want, and see relevant information

  Scenario: Search page title verification
    When User is on Google home page
    Then  User should see title is Google