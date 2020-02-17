# UW-Day-Planner

- Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity.

## Instruction/Demo
- Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:


The time

A field to hold user input

A save button

Clicking on the save button will store the time and user input in localStorage.
Near the top of the calendar, the application should display the current day. Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

![demo](demo/05-Third-Party-APIs_02-Homework_Assets_05-Third-Party-APIs-homework-demo.gif)

- Functional, deployed application.

GitHub repository with a unique name and a README describing project.

The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

Each timeblock contains an input field and save button.

Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

The current day is displayed at the top of the calendar.

Each timeblock is color coded to indicate whether it is in a past, present, or future hour.


- The objective of this homework is to create a scheduler application that allows a user to save events for each hour between 9AM and 5PM, using dynamically updated HTML and CSS powered by JQuery. My first step in tackling this homework was a homework workshop after class where we pseudocoded the project. When I got home that evening, I tried to create a function that builds rows to the page but had a difficult time. Tonight after class I encountered the same issues so I decided to hard code the rows as a start and see if I can get the functionality to work. More to come..

- After a tutor session and going over the functions with my classmates, I have generated functions for 1) setting date and time at top of the page, 2) click event on save button, 3) get hours for updating row style and finally 4) setting local storage and persisting the info once the page is refreshed. There are still a few kinks I need to work on such as number of local storage items being saved. I also need to test my code tomorrow and see if the colors correspond to the correct time blocks.

- When the page loads, the scheduler will have the date and time at the top with 9 hour time blocks to add tasks to. When you click on a time block, you enter a task, click the save button, and repeat for future time blocks. The current time block should have a red background color, the past time block(s) should have lightgrey background color and the future time block(s) should have green background color. Also as the page refreshes, the tasks should've been saved to local storage, and therefore, should persist on the page.

## Resources

- W3Schools 
- Bootstrap 
- Font Awesome
- Stack Overflow
- MDN