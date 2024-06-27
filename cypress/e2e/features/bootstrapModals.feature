Feature: BootStrap Modals
    The test will be focused on validating bootstrap modals

    Background: Navigate into app
        Given users navigate to the app to test bootstrap modals

    # Single Modal Automated Test
    Scenario: Test to verify that modal is launched successfully.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        Then assert that modal is launched successfully

    Scenario: Test to verify that modal has an header.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        Then assert that modal has an header

    Scenario: Test to verify that modal has a body for displaying its content.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        Then assert that modal has a body

    Scenario: Test to verify that modal has a close button
        When users opens the bootstrap modal page
        When users click on the launch modal button
        Then assert that modal has a close button
    
    Scenario: Test to verify that when the close button is clicked, the modal becomes invisible.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        When users click on the close button
        Then the modal becomes invisible

    Scenario: Test to verify that when the cancle icon is clicked, the modal becomes invisible.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        When users click on the cancel icon
        Then the modal becomes invisible

    Scenario: Test to verify that modal has a save changes button.
        When users opens the bootstrap modal page
        When users click on the launch modal button
        Then verify the save changes button is clickable
    
    Scenario: Test to verify that modal clicking the save changes button, the app refreshes and modal is invisible
        When users opens the bootstrap modal page
        When users click on the launch modal button
        When users click on the save changes button
        Then the modal becomes invisible
    
    # Multiple Modal Automated Test
    Scenario: Test to verify that multiple modals can be opened successfully
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the second modal button
        Then assert that modal_one is launched successfully
        Then assert that modal_two is launched successfully
    
    Scenario: Test to verify that the second modal can be closed successfully using the close button
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the second modal button
        When users click on the second modal close button
        Then the modal two becomes invisible

    Scenario: Test to verify that the second modal can be closed successfully using the close icon
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the second modal button
        When users click on the second modal close icon
        Then the modal two becomes invisible

    Scenario: Test to verify that the save button on the second modal functions appropriately.
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the second modal button
        When users click on the second modal save button
        Then the modal two becomes invisible

 Scenario: Test to verify that the first modal can be closed successfully using the close button
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the first modal close button
        Then the modal one becomes invisible

    Scenario: Test to verify that the first modal can be closed successfully using the close icon
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the first modal close icon
        Then the modal one becomes invisible

    Scenario: Test to verify that the save button on the second modal functions appropriately.
        When users opens the bootstrap modal page
        When users click on the first modal button
        When users click on the first modal save button
        Then the modal one becomes invisible