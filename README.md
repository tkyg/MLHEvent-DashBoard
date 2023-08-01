# MLHEvent-DashBoard
https://tkyg.github.io/MLHEvent-DashBoard/

MLH Events is a web application developed during a hackathon, allowing users to explore upcoming member events organized by Major League Hacking (MLH) worldwide. The application fetches event data from a Google Apps Script API, which retrieves event details from a Google Sheets spreadsheet. The user-friendly interface presents event information such as name, date, location, image, and RSVP link. The application utilizes modern web technologies like HTML, JavaScript, and Tailwind CSS for responsive design. The Google Apps Script consists of two files: GetEventsEndPoints.gs and ScrapeMLHEvents.gs. GetEventsEndPoints.gs sets up an API endpoint to serve event data in JSON format, while ScrapeMLHEvents.gs fetches data from the MLH Events website using Cheerio and stores it in the Google Sheets spreadsheet. Developers can contribute to the project, and it is licensed under the MIT License, allowing for usage and modifications under the specified terms.

Features
View a list of upcoming MLH member events with event details, including name, date, location, image, and RSVP link.
Minimalistic and user-friendly interface.
Quick loading of event data from the Google Apps Script API.
Getting Started
Prerequisites
Before running this project, make sure you have the following installed:

Modern web browser (e.g., Chrome, Firefox, Safari)
Code editor (e.g., Visual Studio Code)
Installation
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
Navigate to the project directory:

bash
Copy code
cd your-repo
Open the index.html file in your web browser to see the application.

Usage
Simply open the index.html file in your web browser to view the MLH Events web application. The application will automatically fetch and display upcoming MLH member events using the data retrieved from the Google Apps Script API.

Google Apps Script
This project utilizes Google Apps Script to fetch event data from a Google Sheets spreadsheet and serve it as a JSON API. The Google Apps Script consists of two files:

GetEventsEndPoints.gs: This script sets up an endpoint that retrieves event data from a Google Sheets spreadsheet named "Events." It returns the event data as a JSON response.

ScrapeMLHEvents.gs: This script fetches event data from the MLH Events website using Cheerio and stores it in the "Events" Google Sheets spreadsheet.

To use the Google Apps Script API in your project, follow these steps:

Open your Google Sheets document and navigate to "Extensions" > "Apps Script."
Replace the content of both GetEventsEndPoints.gs and ScrapeMLHEvents.gs with the respective scripts provided in this repository.
Save the scripts and deploy the web app by selecting "Publish" > "Deploy as web app" and following the instructions to grant permissions.
After deploying the web app, you'll get a URL that serves as your API endpoint. Update the API URL in the script.js file with the new URL.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

License
This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.
