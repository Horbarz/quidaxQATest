Feature: Multi Select List Demo
    The test will be focused on validating multiple select list

    Background: Navigate into app
        Given users navigate to the app to test multiple list selection

    Scenario: Test to verify that multiple items can be selected
        When user opens the select list page
        When user clicks on the following options
        |New York|
        |Washington|
        Then assert that the items are selected successfully
        |New York|
        |Washington|

    Scenario: Test to verify that selected items can be deselected one after the other
        When user opens the select list page
        When user clicks on the following options
        |Florida|
        |Texas|
        |Pennsylvania|
        When user clicks on a selected item
        |Florida|
        |Texas|
        |Pennsylvania|
        Then item is deselected successfully
        |Florida|
        |Texas|
        |Pennsylvania|
    
    Scenario: Test to verify that all selected options are retrieved when 'Get All Selected' button is clicked
        When user opens the select list page
        When user clicks on the following options
        |California|
        |Florida|
        |New Jersey|
        |Texas|
        |Pennsylvania|
        When user clicks on the get all selected button
        Then assert selected options are displayed
        |California|
        |Florida|
        |New Jersey|
        |Texas|
        |Pennsylvania|

    Scenario: Test to verify that if only one option is selected, when 'Get All Selected' button is clicked, the selected option is returned as the result 
        When user opens the select list page
        When user clicks on the following options
        |Florida|
        When user clicks on the get all selected button
        Then assert selected options are displayed
        |Florida|

    Scenario: Test to verify that only the first selected option is retrieved when 'First Selected' button is clicked
        When user opens the select list page
        When user clicks on the following options
        |New York|
        |Washington|
        When users click on the first selected button
        Then assert that first selected option is displayed
        |New York|
        |Washington|

    
     Scenario: Test to verify that if only one option is selected, when 'First Selected' button is clicked, the selected option is returned as the result 
        When user opens the select list page
        When user clicks on the following options
        |Ohio|
        When users click on the first selected button
        Then assert that first selected option is displayed
        |Ohio|

        
    Scenario: Test to verify that all options can be selected with ctrl+A key
        When user opens the select list page
        When user enters ctrl A
        Then assert that all items are selected

    # Scenario: Test to verify that if an option is selected first and ctrl + A is clicked, when 'First Selected' button is clicked, the first selected option is returned as the result.
    #     When user opens the select list page
    #     When user clicks on "<state>"
    #     When user enters ctrl A
    #     When users click on the first selected button
    #     Then assert that first selected option is displayed
    #     |New York|

    #     Examples:
    #     |state|
    #     |New York|


     Scenario: Test to verify that if an option is selected first then ctrl + A is entered, when 'Get All Selected' button is clicked, the all selected options are returned as the result 
        When user opens the select list page
        When user clicks on "<state>"
        When user enters ctrl A
        When user clicks on the get all selected button
        Then assert selected options are displayed
        |California|
        |Florida|
        |New Jersey|
        |New York|
        |Ohio|
        |Texas|
        |Pennsylvania|
        |Washington|

        Examples:
        |state|
        |New York|

    Scenario: Test to verify that selecting items sequentially on the list and clicking 'First Selected' button returns the first selected.  
        When user opens the select list page
        When user clicks on the following options
        |Ohio|
        |Texas|
        |Pennsylvania|
        |Washington|
        When users click on the first selected button
        Then assert that first selected option is displayed
        |Ohio|
        |Texas|
        |Pennsylvania|
        |Washington|

        Scenario: Test to verify that selecting items sequentially on the list and clicking 'Get All Selected' button, returns the all selected options.  
        When user opens the select list page
        When user clicks on the following options
        |Ohio|
        |Texas|
        |Pennsylvania|
        |Washington|
        When user clicks on the get all selected button
        Then assert selected options are displayed
        |Ohio|
        |Texas|
        |Pennsylvania|
        |Washington|

