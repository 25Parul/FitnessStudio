# Fitness App 💪🏋️‍♂️

## Overview 📝

This readme provides an overview of a fitness app built with React. The app offers a range of features to enhance the fitness experience. Users can explore, access detailed  information, watch videos, and discover similar exercises based on target muscle and equipment. The app incorporates a variety of components and pages to provide a comprehensive fitness solution.
Try my app: [Link to My Fitness App](https://25parul.github.io/FitnessStudio/)


## Getting Started with Create React App 🚀

Follow these steps to set up and run the fitness app on your local environment.

### Prerequisites 🛠️

Make sure the latest version of Node.js is installed on your machine. 🖥️

- To check: `node -v` ✔️
- To install: [Node.js](https://nodejs.org/en/download) ⬇️

### Installation ⬇️

Clone the repository to your local machine: 📥
git clone https://github.com/your-username/fitness-app.git

Navigate to the project directory: 📂
cd fitness-app

Install the required dependencies: 🚀
npm install

## Configuration 🛠️ 

1. 📂 Create the `.env` file in the `src` folder.
2. 🚀 Subscribe to the following APIs from [RapidAPI Hub](https://rapidapi.com/hub):
    - 🏋️‍♂️ ExerciseDB
    - 🎥 Youtube Search and Download
3. 🔑 Add your API key in the `.env` file in the format:
   `REACT_APP_Variable_Name="Your key"`

## Running the App 🚀

Start the development server:
`npm start`

The app will be running locally at your computer: [http://localhost:3000](http://localhost:3000)

## App Structure 🏗️

The app consists of the following main files and directories:

- **App.js**: This file contains the main entry point of the application. It sets up the routing and renders the necessary components for the app.

- **fetchData.js**: The file contains utility functions for making API requests to retrieve exercise data. It exports the following functions and options:
  - `fetchData`: An asynchronous function that takes a URL and options as parameters, makes a fetch request using the provided URL and options, and returns the parsed response data.
  - `exerciseOptions`: An object that specifies the headers required for making exercise data API requests.
  - `youtubeOptions`: An object that specifies the headers required for making YouTube data API requests.

  This file is used in various parts of the application to fetch exercise data from external APIs. It ensures proper configuration and handling of API requests and responses. Make sure to configure the necessary API keys and hosts in the `exerciseOptions` and `youtubeOptions` objects before running the app.

- **pages/Home.js**: This component represents the homepage of the fitness app. It includes the following sections:
  1. **HeroBanner**: The component displays a banner at the top of the homepage.
  2. **SearchExercises**: The component enhances the user experience by allowing them to search for specific exercises and filter them based on body parts on a horizontal scroll bar, making it easier to find the desired exercises within the app.
     - When the user enters search keywords and clicks the search button, the component filters the exercise data based on the search criteria. It fetches exercise data from the RapidAPI ExerciseDB using the `fetchData` function and stores the data in the local storage for future use. If the exercise data is already present in the local storage, it retrieves it from there instead of making a new API request. The filtered exercises are then passed to the parent component via the `setExercises` function.
  3. **Exercises**: The component displays a list of exercises based on the selected body part and handles pagination functionality, allowing users to navigate between pages.
     - It calculates the range of exercises to display based on the current page and the number of exercises per page. It then renders the exercise cards using the `ExerciseCard` component.

  The Home component also includes state variables to manage the selected body part, the list of exercises, and the current page number for pagination. It fetches the exercise data from the RapidAPI ExerciseDB using the `fetchData` function and stores the data in the local storage for future use. If the exercise data is already present in the local storage, it retrieves it from there instead of making a new API request.

- **pages/ExerciseDetail.js**: This component retrieves and displays detailed information, videos, and related exercises for a specific exercise, enhancing the user's understanding and exploration of the exercise.
  - Upon rendering, it fetches the exercise detail, exercise videos from YouTube related to the exercise, and additional exercises that target the same muscle or use the same equipment. The exercise data is fetched from local storage, and the YouTube videos are fetched from the RapidAPI YouTube Search.

  The component then renders three sub-components: **Detail**, **ExerciseVideos**, and **SimilarExercises**.

  - **Detail.js**: When you click on any exercise, this component represents the detailed view of a specific exercise. It displays the exercise GIF, exercise name, and additional details such as the body part targeted, target muscle, and equipment used. The additional details are rendered using icons and are displayed in a stacked layout.
  - **ExerciseVideos.js**: The component displays videos related to the exercise fetched from YouTube.
    - It receives an array of exercise videos and the exercise name as props.
    - The component first checks if the `exerciseVideos` array exists and has a length. If not, it displays a "Loading..." message.
    - The component then renders a title indicating the exercise name. It creates a stack of video thumbnails with their respective titles. Each video thumbnail is wrapped in an anchor tag that opens the YouTube video in a new tab when clicked.
  - **SimilarExercises.js**: The component displays exercises that target the same muscle group and exercises that use the same equipment. It renders two sections with titles and horizontal scrollbars to show the respective exercises. If there are no exercises available, a loader is displayed. This component enhances the exercise detail page's user experience.

- **components/Navbar.js**: This component represents the app's navigation bar, providing links to different sections of the app.

- **components/Footer.js**: This component represents the footer section of the app, providing additional information.

- **components/BodyPart.js**: This component represents a body part card in the app. It displays an icon and the name of a body part. When clicked, it updates the selected body part in the app's state and scrolls the page to a specific position.

- **components/ExerciseCard.js**: This component represents a card displaying information about a specific exercise. It includes an image, buttons for body parts and target muscles, and the exercise name. Clicking on the card navigates to the exercise detail page.

- **components/HorizontalScrollbar.js**: This component provides a horizontal scroll bar for displaying a list of body parts or exercise cards. It uses the `react-horizontal-scrolling-menu` package to enable smooth scrolling. It also includes custom left and right arrow icons for navigation.

- **components/Loader.js**: This component displays a loading spinner while data is being fetched or processed. It uses the `react-loader-spinner` package to show an animated spinner.
- 
##  Dependencies 📦

The fitness app relies on the following dependencies:

1. **react**: A JavaScript library for building user interfaces.
2. **react-router-dom**: A library that provides routing capabilities for React applications.
3. **@mui/material**: A library that provides pre-built Material-UI components for styling the app.
4. **react-horizontal-scrolling-menu**: A package that enables smooth horizontal scrolling for menus.
5. **react-loader-spinner**: A package that provides loading spinners for React applications.


## 🔍 Data Fetching

The app fetches exercise data from a RapidAPI service and stores it in localStorage for future use. If the data is not available in localStorage, the app fetches it from the API and saves it for subsequent use. This ensures that the app can work offline or in scenarios with limited connectivity.

## 🔧 Troubleshooting

If you encounter any issues while setting up or running the app, consider the following:

1. ✅ Ensure all the prerequisites are installed correctly.
2. 🔑 Verify that the configuration variables are correctly set in the `.env` file.
3. 📋 Check for any error messages or logs in the console for troubleshooting clues.

If you need further assistance or have any questions, feel free to reach out to me at 25paruljain@gmail.com.


🎉 That’s it! You should now have the fitness app up and running on your local machine. Enjoy your fitness journey! 🏋️‍♂️💪


