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
//hard-coded rows
$(document).ready(function () {

    //Set date at top of page (function showTodaysDate) --> moment.js
    //function showTodaysDate() {
    var now = moment().format("dddd, MMMM Do, YYYY, h:mm A");
    $('#currentDay').append(now);


    //Save button event handler (function saveRow) --> uses localStorage
    //create click event handler on save button
    $(".saveBtn").on("click", function (event) {

        var eventEl = event.target.previousElementSibling.firstElementChild.value;
        var key = event.target.previousElementSibling.firstElementChild.id
        localStorage.setItem(key, eventEl);

    });
    //Change row styles (function updateRowStyle) --> moment.js
    //getHours function
    function updateRowStyle() {
        var d = new Date();
        var n = d.getHours();
        var index = Math.max(Math.min(n - 9, 8), 0);

        for (var i = 0; i <= 8; i++) {
            var background;
            if (i < index) {
                background = "grey";
            } else if (i > index) {
                background = "green";
            } else if (i = index) {
                background = "red";
            }
            $("textarea")[i].style.backgroundColor = background;
        } if (n > 17) {
            $("textarea")[index].style.backgroundColor = "grey";
        } else if (n < 9) {
            $("textarea")[index].style.backgroundColor = "green";
        }
    }
    updateRowStyle();
    //i. on page load, check current time (hour) against rows in scheduler
    //ii. update style for those that are past hours, present hours and future hours
    function loadStorage() {

        var keys = Object.keys(localStorage)
        for (var i = 0; i < keys.length; i++) {
            if (keys[i]) {
                var element = $("#" + keys[i])[0];
                if (element) {
                    element.value = localStorage.getItem(keys[i]);
                }
            }
        }
    }

    loadStorage();
});
