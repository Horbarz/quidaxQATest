Feature: Single Input Field
    The test will be focused on validating single input fields

    Background: Navigate into app
        Given users navigate to the selenium demo app
    
    Scenario: Test to ensure that the field is enabled for input
        When users open the simple form page
        When users enter "<random_text>" into the input field
        Then input field is enabled

        Examples:
        |random_text |
        |Hello world |
    
    Scenario: Test to ensure that the input accepts a string as input
        When users open the simple form page
        When users enter "<random_text>" into the input field
        Then input field accepts "<random_text>"

         Examples:
        |random_text |
        |Hello People |
    
    Scenario: Test to ensure that when the show message button is clicked, inputed message should appear below the input field
        When users open the simple form page
        When users enter "<random_text>" into the input field
        When users click the show message button
        Then inputed message "<random_text>" should appear below the input field

        Examples:
        |random_text |
        |Welcome Home |

    Scenario: Test to ensure that the input accepts an integer as input
        When users open the simple form page
        When users enter "<integer>" into the input field
        Then input field accepts "<integer>"

        Examples:
        |integer |
        |450 |
    
    Scenario: Test to ensure that when the show message button is clicked, the integer should appear below the input field
        When users open the simple form page
        When users enter "<integer>" into the input field
        When users click the show message button
        Then inputed message "<integer>" should appear below the input field
         
        Examples:
        |integer |
        |450 |

     Scenario: Test to ensure that the input accepts special character as input
        When users open the simple form page
        When users enter "<character>" into the input field
        Then input field accepts "<character>"

        Examples:
        |character |
        |@!@@(__) |
    
    Scenario: Test to ensure that when the show message button is clicked, the special character should appear below the input field
        When users open the simple form page
        When users enter "<character>" into the input field
        When users click the show message button
        Then inputed message "<character>" should appear below the input field
         
        Examples:
        |character |
        |@!@@(__) |
    
     Scenario: Test to ensure that there is no limit to the length of message that can be entered
        When users open the simple form page
        When users enter "<long_text>" into the input field
        When users click the show message button
        Then inputed message "<long_text>" should appear below the input field
         
        Examples:
        |long_text |
        |Lor89em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. |

    