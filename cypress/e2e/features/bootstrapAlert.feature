Feature: BootStrap Alerts
    The test will be focused on validating bootstrap alerts

    Background: Navigate into app
        Given users navigate to the app to test bootstrap alerts

    Scenario: Test to verify that clicking on the autoclosable <status> message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        Then "<status>" auto message is displayed
        Examples:
        |status|
        |success|

      Scenario: Test to verify that an autoclosable <status> message closes after <timeout>secs
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        When user waits for <timeout> seconds
        Then assert that the auto "<status>" message is closed
        Examples:
        |status|timeout|
        |success|5|

      Scenario: Test to verify that clicking on the normal message button, a <status> message is returned.
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        Then "<status>" normal message is displayed
        Examples:
        |status|
        |success|

      Scenario: Test to verify that a normal <status> message can be closed manually
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        When users click the normal close "<status>" button
        Then assert that the normal "<status>" message is closed
        Examples:
        |status|
        |success|

    Scenario: Test to verify that clicking on the autoclosable <status> message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        Then "<status>" auto message is displayed
        Examples:
        |status|
        |warning|

      Scenario: Test to verify that an autoclosable <status> message closes after  <timeout>secs
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        When user waits for <timeout> seconds
        Then assert that the auto "<status>" message is closed
        Examples:
        |status|timeout|
        |warning|3|

      Scenario: Test to verify that clicking on the normal message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        Then "<status>" normal message is displayed
        Examples:
        |status|
        |warning|

      Scenario: Test to verify that a normal <status> message can be closed manually
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        When users click the normal close "<status>" button
        Then assert that the normal "<status>" message is closed
        Examples:
        |status|
        |warning|

    Scenario: Test to verify that clicking on the autoclosable <status> message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        Then "<status>" auto message is displayed
        Examples:
        |status|
        |danger|

      Scenario: Test to verify that an autoclosable <status> message closes after  <timeout>secs
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        When user waits for <timeout> seconds
        Then assert that the auto "<status>" message is closed
        Examples:
        |status|timeout|
        |danger|5|

      Scenario: Test to verify that clicking on the normal message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        Then "<status>" normal message is displayed
        Examples:
        |status|
        |danger|

      Scenario: Test to verify that a normal <status> message can be closed manually
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        When users click the normal close "<status>" button
        Then assert that the normal "<status>" message is closed
        Examples:
        |status|
        |danger|

    Scenario: Test to verify that clicking on the autoclosable <status> message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        Then "<status>" auto message is displayed
        Examples:
        |status|
        |info|

      Scenario: Test to verify that an autoclosable <status> message closes after  <timeout>secs
        When user opens the bootstrap alert page
        When users click on the Autocloseable "<status>" message button
        When user waits for <timeout> seconds
        Then assert that the auto "<status>" message is closed
        Examples:
        |status|timeout|
        |info|6|

      Scenario: Test to verify that clicking on the normal message button, a <status> message is  returned.
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        Then "<status>" normal message is displayed
        Examples:
        |status|
        |info|

      Scenario: Test to verify that a normal <status> message can be closed manually
        When user opens the bootstrap alert page
        When users click on the normal "<status>" message button
        When users click the normal close "<status>" button
        Then assert that the normal "<status>" message is closed
        Examples:
        |status|
        |info|

    