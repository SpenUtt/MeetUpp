Feature 3: Specify Number of Events 

Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given: Multiple events are displayed to the user
When: the user has not specified the number of events to be viewed on one page
Then: the default number of events per page is 32

Scenario 2: User can change the number of events they want to see.
Given: Multiple events are displayed to the user 
When: the user would like to view more events per page than the default of 32
Then: the user can open a menu to select the number of events they want to see 
