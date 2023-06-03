# Women Workouts Clone

Women Workouts Clone is an application clone designed for women, offering personalized workouts that take into account their fitness level, goals, and preferences. It includes a variety of exercises for different parts of the body, providing workouts of varying intensity and duration. The app also provides detailed instructions and video tutorials for each exercise. Additionally, it offers progress tracking and workout statistics

[Link](https://oolenkazolot.github.io/rs-clone-deploy/)

## Technical stack application:

- Frontend: HTML5, SCSS, CSS, TypeScript
- Backend: Node.js/Express
- Database: MongoDB
- Library: Moment.js., DatePicker
- Module bundler: Webpack
- Web Storage API: Local storage

## Backend:

- The server returns correct responses and provides HTTP errors with informative bodies that help understand what happened. It writes readable logs
- User registration and authorization are implemented using JSON Web Tokens (JWT)
- Authentication
- Middleware for validation/authentication
- An ORM (mongoose) was used
- Connection and interaction with MongoDB database

## Frontend:

- Routing has been implemented, and the application itself is an SPA (Single-Page Application).
- A modal window with a slider for entering user information has been implemented
- An infinite slider on the Exercises page and a slider on the Workouts page have been implemented.
- Modal windows have been implemented for creating a new complex, complex settings, exercise editing, and profile editing
- All input data from the modal windows are sent to the database and are taken into account in calculating BMI (Body Mass Index) and determining the training schedule
- A preloader has been implemented
- The application is responsive and works on phones, tablets, and PCs
- The application is designed with a consistent style
- The layout of the main page is custom-designed

## Main page

<image src="src/assets/screenshots/Screenshot_1.png" alt="main-page-1">
<image src="src/assets/screenshots/Screenshot_2.png" alt="main-page-2">

## Header:

- An adaptive header that changes its appearance and state depending on the user's authentication status and the selected page has been implemented.
- A mobile menu has been implemented.

<image src="src/assets/screenshots/Screenshot_3.png" alt="header-not-auth">
<image src="src/assets/screenshots/Screenshot_4.png" alt="header-auth">

## Modal windows: Login, Sign up, Questions

- Field validation for email and password is implemented according to separate criteria
- The data is also validated on the server to prevent registration in case of mismatches or if a user with the same name already exists
- A Questions modal window with a slider is implemented to obtain information about the user, their goals, required workload, weight, height, and units of measurement
- Field validation for weight and height is implemented based on separate criteria depending on the unit of measurement
- The data is also validated on the server
- All data obtained from the modal windows is stored in the database

<image src="src/assets/screenshots/Screenshot_5.png" alt="log-in">
<image src="src/assets/screenshots/Screenshot_6.png" alt="sign-up">
<div>
  <image src="src/assets/screenshots/Screenshot_7.png" alt="questions-1">
  <image src="src/assets/screenshots/Screenshot_8.png" alt="questions-2">
  <image src="src/assets/screenshots/Screenshot_9.png" alt="questions-3">
</div>

## Workouts page

- An adaptive slider that dynamically displays the number of exercises for the selected complex is implemented
- Functionality for creating/deleting custom complexes is implemented
- Functionality for adding/deleting new exercises in created complexes is implemented
- Functionality for editing the duration and quantity of exercises in created complexes is implemented
- The count of exercises and their duration is calculated and displayed on the complex card.
- All the functionality works in conjunction with the server

<image src="src/assets/screenshots/Screenshot_10.png" alt="workouts-page-1">
<image src="src/assets/screenshots/Screenshot_11.png" alt="workouts-page-2">
<image src="src/assets/screenshots/Screenshot_12.png" alt="workouts-page-3">
<image src="src/assets/screenshots/Screenshot_13.png" alt="workouts-page-4">
<image src="src/assets/screenshots/Screenshot_14.png" alt="workouts-page-5">

## Exercises page

- Display of the total number of completed workouts and the time spent on them based on server data
- In the Week goal section, determination of the current day of the week and highlighting it with a specific style
- Display of the number of days with workouts and the set plan based on server data
- Checkbox marking for the days of the week with at least one completed workout
- Infinite adaptive slider with dynamically changing images
- Dynamic display of exercises included in the complex below the slider, depending on the active complex

<image src="src/assets/screenshots/Screenshot_15.png" alt="exercises-page-1">
<image src="src/assets/screenshots/Screenshot_17.png" alt="exercises-page-2">
<image src="src/assets/screenshots/Screenshot_16.png" alt="exercises-page-info">

## Workouts/id page

- When the page is rendered, an analysis is performed to determine whether the complex is default or user-created. If it is a user-created complex, a delete icon appears, and the ability to delete the complex is activated
- When the back arrow is clicked, a redirection to the Workouts page occurs
- The ability to start a workout is implemented on the page (if the complex is empty, the start of the page is blocked)
- There is the ability to manage the complex from the page

<image src="src/assets/screenshots/Screenshot_17.png" alt="workouts-id">
<image src="src/assets/screenshots/Screenshot_27.png" alt="workouts-id">

## Start Training page (after clicking the "START NOW" button)

- Dynamic swapping of components within the page (changing exercises and rest periods, congratulatory message upon completion of the workout)
- Ability to pause/resume/restart exercise execution
- Modal window (take a rest): circular animated countdown timer and the option to add 20 seconds to the countdown timer or skip it
- Tracking of the number of completed exercises and elapsed time
- Triggering a modal window with exercise details when clicked
- Sound effects: victory sound upon completing the complex, button click sound, clock ticking sound during rest periods. Ability to disable sound
- Settings modal window (after clicking the "START NOW" button): saving pause duration between exercises, saving the workout intensity level (number of workouts per week)

<image src="src/assets/screenshots/Screenshot_18.png" alt="exercise-1">
<image src="src/assets/screenshots/Screenshot_19.png" alt="take-rest">
<image src="src/assets/screenshots/Screenshot_20.png" alt="exercise-2">
<image src="src/assets/screenshots/Screenshot_21.png" alt="exercise-info">
<image src="src/assets/screenshots/Screenshot_22.png" alt="workout-settings">
<image src="src/assets/screenshots/Screenshot_23.png" alt="well-done">

## Profile page

- User profile is implemented
- A section for calculating BMI (Body Mass Index) based on user-entered weight and height is implemented. The calculation is performed in both weight and height units: kg/cm and pounds/inches
- Functionality for editing user data is implemented: weight, height, and units of measurement
- All functionality is integrated with the server

<image src="src/assets/screenshots/Screenshot_24.png" alt="profile-page">
<image src="src/assets/screenshots/Screenshot_25.png" alt="settings-profile">

## Mobile view

<image src="src/assets/screenshots/Screenshot_28.png" alt="mobile-view-1">
<image src="src/assets/screenshots/Screenshot_29.png" alt="mobile-view-2">
<image src="src/assets/screenshots/Screenshot_30.png" alt="mobile-view-3">
<image src="src/assets/screenshots/Screenshot_31.png" alt="mobile-view-4">
<image src="src/assets/screenshots/Screenshot_32.png" alt="mobile-view-5">
<image src="src/assets/screenshots/Screenshot_33.png" alt="mobile-view-6">
<image src="src/assets/screenshots/Screenshot_34.png" alt="mobile-view-7">
<image src="src/assets/screenshots/Screenshot_35.png" alt="mobile-view-8">
<image src="src/assets/screenshots/Screenshot_36.png" alt="mobile-view-9">
<image src="src/assets/screenshots/Screenshot_37.png" alt="mobile-view-10">
<image src="src/assets/screenshots/Screenshot_38.png" alt="mobile-view-11">
<image src="src/assets/screenshots/Screenshot_39.png" alt="mobile-view-12">
