$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/googleSearch.feature");
formatter.feature({
  "name": "Google search functionality",
  "description": "  Agile Story: As a user, when I am on the google search page,\n  I should be able to search whatever I want, and see relevant information",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Search page title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on Google home page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sample.stepDefinitions.GoogleSearchStepDefs.user_is_on_google_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see title is Google",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sample.stepDefinitions.GoogleSearchStepDefs.user_should_see_title_is_google()"
});
formatter.result({
  "status": "passed"
});
});