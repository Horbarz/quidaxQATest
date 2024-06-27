Feature: Two Input Field
    The test will be focused on validating two input fields

    Background: Navigate into app
        Given users navigate to the app
        When users open the simple form page and scroll to the two input fields card

     Scenario: Test to ensure that both input fields accept positive integers and the sum is calculated
        When users enter a value for "<A>" and "<B>"
        When users click on the get total button
        Then sum for integer "<A>" and "<B>" is calculated and displayed
         Examples:
        |A | B |
        |15| 21|

     Scenario: Test to ensure that both input fields accept negative integers and the sum is calculated
        When users enter a value for "<A>" and "<B>"
        When users click on the get total button
        Then sum for integer "<A>" and "<B>" is calculated and displayed
         Examples:
        |A | B |
        |-10| -5|

     Scenario: Test to ensure that both input fields accept decimals and the sum is calculated
        When users enter a value for "<A>" and "<B>"
        When users click on the get total button
        Then sum for decimal "<A>" and "<B>" is calculated and displayed
         Examples:
        |A | B |
        |0.5| 0.4|


