# CPSC481

## Overview

This React application visualizes a travel app that allows users to view events in Calgary (YYC) and book the event into their personal calendars (permitting they have an account).

## How to Run the Application

### Prerequisites

#### Step 1. Before running the application, ensure you have the following installed:

Install 1: Node.js: Download & Install Node.js (Google Search)

Install 2: npm (Node Package Manager): It comes bundled with Node.js.
run the following -->

> npm install -g npm@latest

Install 3:

#### Step 2. Open terminal and type in

> node -v

Result should be v21.6.2 (AKA you installed Node.js correctly)

> npm -v

Result should be 10.4.0 (AKA you installed npm correctly)

#### Step 3. Create an empty directory, where you will eventually put the react app in.

I am using "481TravelAppGit"

## Steps to Run

#### Step 0. Go to 481TravelAppGit and open terminal.

#### Step 1. Clone the repository: First, clone this repository to your local machine using Git.

ONLY DO STEP 1 ONCE

> git clone [ https://github.com/JJMyoshi/TravelApp.git ]

#### Step 2. CD to the folder that contains the React App

> cd travel-app

#### Step 3. Start the application: Run the application using:

> npm run dev
> MAKE SURE YOU'RE IN THE DIRECTORY travel-app !!!!! OR IT WILL NOT RUN!

This will start the development server and open the application in your default web browser.

If it doesn't open automatically, you can manually visit link provided.

NOTE 1: When you make changes + save, it should reflect in the website!
NOTE 2: if your react crashes,run this in new terminal

> cd travel-app

> npm run dev

END //

## How to set up own screens

Step 1: Create **_.jsx and _**.css
Step 2: Write your code while keep align with HomePage outline (16:9 Ratio Portrait Box)
Step 3: To see your code in React

- App.jsx - import your screen and add your screens name in return + comment all but one screen
  \*if your react website is white, close terminal, open new terminal, cd travel-app, npm run dev, open website

  To test --> Comment out MeowPage and Comment in HomePage

### Explanation of each folder

The node module folder is a storage folder that holds your React package along with other packages that might be installed as you work on your React project. The node module helps configure the design system of your React project.

The src folder stores in all the files and components used in your react application ranging from the App.js, index.js, App.css just as seen in the image above.

The package-lock.json file locks the versions of dependencies your React project uses, and this helps in managing dependencies in your React project.

## Tips for React Beginners

Understanding Components: React applications are built using components. Each component represents a part of the user interface. In this application, MyStackedBarChart and FetchCsvComponent are the main components.
State and Props: Learn about the state and props in React. The state is used for managing data or conditions that change over time. Props are used to pass data from one component to another.
React Hooks: Familiarize yourself with hooks like useState and useEffect. They are used for managing state and side effects in functional components.
React Developer Tools: Install React Developer Tools in your browser. It's a great tool to inspect and debug React applications.
Read React Documentation: The official React documentation is an excellent resource for learning and understanding React concepts.

## Additional Information

CSV Data: This application expects a CSV file with specific fields. Ensure your CSV file matches the expected format for the app to function correctly.
Highcharts Library: The application uses the Highcharts library for rendering the bar chart. Familiarize yourself with Highcharts for customizing the chart.
