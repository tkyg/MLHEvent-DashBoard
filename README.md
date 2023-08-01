# MLH Event-DashBoard
[MLH Events DashBoard](https://tkyg.github.io/MLHEvent-DashBoard/)

## How It Works
1. The web application starts by loading the index.html file, which sets up the basic structure of the web page, including a hero section and a container for event cards.

2. The JavaScript code (script.js) then executes the load() function, which performs the following steps:

- Sends a GET request to a Google Apps Script API endpoint using fetch().
- The API endpoint is defined in the GetEventsEndPoint.gs script.
- The GetEventsEndPoint.gs script accesses the "Events" Google Sheets spreadsheet and constructs a JSON response with event data.
- The web application receives the JSON response containing event details like names, dates, locations, images, and RSVP links.

3. The fetched event data is then dynamically displayed on the web page:
- The JavaScript code iterates through the fetched event data and creates event cards for each event using template literals.
- Each event card is added to the container (eventsContainer) in the index.html file.
- The event cards contain event names, dates, locations, images, and an RSVP link.

4. The scrapeMLHEvents() Google Apps Script is not directly used in the web application flow. Instead, it serves as a script to update the "Events" Google Sheets spreadsheet by scraping event data from the MLH Events website.
   
In summary, the web application fetches event data from a Google Apps Script API endpoint, which, in turn, fetches the data from the "Events" Google Sheets spreadsheet. The scrapeMLHEvents script scrapes data from the MLH Events website and updates the "Events" spreadsheet. The web application's JavaScript (script.js) then dynamically generates and displays event cards based on the fetched data, allowing users to explore upcoming MLH member events.

## Acknowledgments
- Special thanks to the MLH team for organizing amazing events and providing the data source for this project.
- Appreciation to the open-source community for the tools and libraries that made this project possible.
