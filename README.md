### UW-Day-Planner

- The objective of this homework is to create a scheduler application that allows a user to save events for each hour between 9AM and 5PM, using dynamically updated HTML and CSS powered by JQuery. My first step in tackling this homework was a homework workshop after class where we pseudocoded the project. When I got home that evening, I tried to create a function that builds rows to the page but had a difficult time. Tonight after class I encountered the same issues so I decided to hard code the rows as a start and see if I can get the functionality to work. More to come..

- After a tutor session and going over the functions with my classmates, I have generated functions for 1) setting date and time at top of the page, 2) click event on save button, 3) get hours for updating row style and finally 4) setting local storage and persisting the info once the page is refreshed. There are still a few kinks I need to work on such as number of local storage items being saved. I also need to test my code tomorrow during the 9AM-5PM range to see if the color blocks work for past, present and future.

- When the page loads, the scheduler will have the date and time at the top with 9 hour time blocks to add tasks to. When you click on a time block, you enter a task, click the save button, and repeat for future time blocks. The current time block should have a red background color, the past time block(s) should have lightgrey background color and the future time block(s) should have green background color. Also as the page refreshes, the tasks should've been saved to local storage, and therefore, should persist on the page.

## Resources

- W3Schools 
- Bootstrap 
- Font Awesome
- Stack Overflow
- MDN