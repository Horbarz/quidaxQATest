Feature: Single Select List Demo
    The test will be focused on validating single select list

    Background: Navigate into app
        Given users navigate to the app to test single list selection

      Scenario: Test to verify that <day> can be selected from the dropdown list
        When user opens the dropdown list page
        When users selects "<day>" as dropdown item
        Then the selected "<day>" is displayed successfully

        Examples:
        |day      |
        |Monday   |
        |Tuesday  |
        |Wednesday|
        |Thursday |
        |Friday   |
        |Saturday |
        |Sunday   |
    