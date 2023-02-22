# movie_api

- Deployed app link: https://zhikiki.github.io/meet-app/

## Description

Meet Again is a proof-of-concept progressive web app that lets you search for tech events in your city. At a glance you can see how many events are happening in a particular city and timeframe, the details of those events, and even what types of events are most common in an area.

It's currently connected to a demo Google Calendar for demonstration purposes, so the events aren't up-to-date. But because it uses the Google Calendar API, in principle it could connect to a live events calendar.

## Key features

● Filter events by city.
● Show/hide event details.
● Specify number of events shown on the page.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city.

## User Stories and Scenarios
### FEATURE 1: FILTER EVENTS BY CITY

User Story: As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
•	Given: user hasn’t searched for any city 
•	When: the user opens the app
•	Then: the user should see a list of all upcoming events 
### Scenario 2: User should see a list of suggestions when they search for a city.
•	Given: the main page is open
•	When: user starts typing in the city textbox
•	Then: the user should see a list of cities (suggestions) that match what they’ve typed 
### Scenario 3: User can select a city from the suggested list.
•	Given: the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
•	When: the user selects a city (e.g., “Berlin, Germany”) from the list
•	Then: their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city 
### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

User Story: As a user, I should be able to show/hide an event's details so that I can easily scan through an overview of events. 

### Scenario 1: An event element is collapsed by default.
•	Given: The user has not yet selected any event,
•	When: The list of events appears, regardless of whether or not filtered by city  
•	Then: Details about the event element are collapsed by default 
### Scenario 2: User can expand an event to see its details.
•	Given: a list of events is shown to the user
•	When: the user clicks on an event element
•	Then: the event element expands to show its details 
### Scenario 3: User can collapse an event to hide its details.
•	Given: A user has selected an event element to see its details 
•	When: a user clicks on a button to hide the details 
•	Then: the details are collapsed and the list of events is again visible 
### FEATURE 3: SPECIFY NUMBER OF EVENTS

User story: As a user, I should be able to specify the number of events s othat I can see how many events are taking place. 

### Scenario 1: When user hasn’t specified a number, 32 is the default number.
•	Given: Multiple events are displayed to the user
•	When: the user has not specified the number of events to be viewed on one page
•	Then: the default number of events per page is 32
### Scenario 2: User can change the number of events they want to see.
•	Given: Multiple events are displayed to the user 
•	When: the user would like to view more events per page than the default of 32
•	Then: the user can open a menu to select the number of events they want to see 

### FEATURE 4: USE THE APP WHEN OFFLINE

User Story: As a user, I should be able to vie app content offline so that I ca nstay informed in areas of limited connectivity.

### Scenario 1: Show cached data when there’s no internet connection.
•	Given: there is no internet connection
•	When: the user wants to view event information 
•	Then: cached data will be displayed 
### Scenario 2: Show error when user changes the settings (city, time range).
•	Given: there is no internet connection and the user is viewing cached data
•	When: the user changes filter settings (e.g. city, time range) 
•	Then: an error message will be displayed indicating that the app is showing offline data 

### FEATURE 5: DATA VISUALIZATION

User Story: As a user, I should be able to see a chart of the number of upcoming events by city so that I can visually interpret that datat about number of events in my selected city. 

### Scenario 1: Show a chart with the number of upcoming events in each city.
•	Given: a list of events filtered by city is displayed to the user 
•	When: the user selects “chart view” 
•	Then: a chart will be displayed showing the number of events in a selected city within a given time range 
