var textContent;
var currentDay;
var getHours;
var displayTime;
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

//display date up top
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



//display current hour - from moment.js
var currentHour = moment().hour();
  $(".description").each( function() {
      var elementHour = parseInt($(this).attr("id"));

      //change color based on hour - reference is stack overflow
      if ( elementHour < currentHour ) {
          $(this).removeClass(["present", "future"]).addClass("past");
      }
      else if ( elementHour === currentHour ) {
          $(this).removeClass(["past", "future"]).addClass("present");
      }
      else {
          $(this).removeClass(["past", "present"]).addClass("future");
      }
  })






