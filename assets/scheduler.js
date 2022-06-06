//setting variables
var textContent;
var currentDay;
var getHours;
var displayTime;
var saveTask = $(".saveBtn");

//display date up top
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



//display current hour - from moment.js
var nowHour = moment().hour();
  $(".description").each( function() {
      var htmlHour = parseInt($(this).attr("id"));

      //change color based on hour - referencing stack overflow
      if ( htmlHour < nowHour ) {
          $(this).removeClass(["present", "future"]).addClass("past");
      }
      else if ( htmlHour === nowHour ) {
          $(this).removeClass(["past", "future"]).addClass("present");
      }
      else {
          $(this).removeClass(["past", "present"]).addClass("future");
      }
  })

   // local storage get item save
   $("#7 .row").val(localStorage.getItem("7"));
   $("#8 .row").val(localStorage.getItem("8"));
   $("#9 .row").val(localStorage.getItem("9"));
   $("#hour11 .row").val(localStorage.getItem("10"));
   $("#hour12 .row").val(localStorage.getItem("11"));
   $("#hour13 .row").val(localStorage.getItem("12"));
   $("#hour14 .row").val(localStorage.getItem("13"));
   $("#hour15 .row").val(localStorage.getItem("14"));
   $("#hour16 .row").val(localStorage.getItem("15"));
   $("#hour17 .row").val(localStorage.getItem("16"));

   //on lick save button using Jquery method
//reference https://www.geeksforgeeks.org/jquery-click-with-examples/
$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // traversing method
      // https://www.w3schools.com/jquery/traversing_closest.asp
      var task = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(hour, task);
  })
});

// Add function to keep saved on refresh???





  //https://www.w3schools.com/jquery/jquery_traversing_siblings.asp








