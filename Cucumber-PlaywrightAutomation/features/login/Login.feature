Feature: Automation using Table 

    Scenario: Automation using increase table row
        Given User visit the form page
        When Enter the 'admin' details
        Then verify that row value is increase or not
        When Remove one rows
        Then verify that rows value is decrease or not 

        # When User Enter the 'user_1' role credentials
        # Then Assert the mail subject if correct