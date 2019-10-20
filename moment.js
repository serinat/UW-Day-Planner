//function to build schedular rows (function buildRows) --> loop, moment.js
//var rows = [];
//function buildRows() {
//$("#row").empty();
//for (var i = 0; i < 10; i++) {
//var a = $("<div id='row'></div>");
//$("#row").append(a);
//}
//}
//buildRows();
$(document).ready(function () {

    //Set date at top of page (function showTodaysDate) --> moment.js
    //function showTodaysDate() {
    var now = moment().format("dddd, MMMM Do, YYYY");
    $('#currentDay').append(now);


    //Save button event handler (function saveRow) --> uses localStorage
    //getHours function






    //Change row styles (function updateRowStyle) --> moment.js
    function updateRowStyle() {
        var d = new Date();
        var n = d.getHours();
        var index = Math.max(Math.min(n - 9, 8), 0);

        for (var i = 0; i <= 8; i++) {
            var bckgrdColor;
            if (i < index) {
                bckgrdColor = "grey";
            } else if (i > index) {
                bckgrdColor = "green";
            } else if (i = index) {
                bckgrdColor = "red";
            }
            $("row")[i].style.backgroundColor = bckgrdColor;
        } if (hours > 17) {
            $("row")[index].style.backgroundColor = "grey"
        } else if (hours < 9) {
            $("row")[index].style.backgroundColor = "green"
        }
    }
    updateRowStyle();
    //i. on page load, check current time (hour) against rows in scheduler
    //ii. update style for those that are past hours, present hours and future hours
});