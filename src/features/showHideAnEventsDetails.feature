Feature 2: Show/Hide an Event's Details 

Scenario 1: An event element is collapsed by default.
Given: The user has not yet selected any event,
When: The list of events appears, regardless of whether or not filtered by city  
Then: Details about the event element are collapsed by default 

Scenario 2: User can expand an event to see its details.
Given: a list of events is shown to the user
When: the user clicks on an event element
Then: the event element expands to show its details 

Scenario 3: User can collapse an event to hide its details.
Given: A user has selected an event element to see its details 
When: a user clicks on a button to hide the details 
Then: the details are collapsed and the list of events is again visible 
