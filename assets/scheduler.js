var textContent;
var currentDay;
var getHours;
var time;
var makeHour;


//display date up top
var displayTime = document.getElementById("currentDay");
var currentDay = moment();

//time function from moment
displayTime.textContent = currentDay.format("MMMM DD YYYY");

moment(currentDay).format("MMM Do YY");

//function to change past/present/future based on time of day
$(function() {
    function makeHour(dt) {
      return dt.getHours() + (dt.getMinutes() / 60);
    }
  
    function textToDate(str) {
      var h = parseInt(str.slice(0, str.indexOf(":")));
      var m = parseInt(str.slice(str.indexOf(":") + 1, -2));
      var mer = str.slice(-2);
      if (mer == "PM") {
        h = h + 12;
      }
      var dt = new Date();
      dt.setHours(h, m);
      return dt;
    }

  // referenced stack overflow for the below - link in read me file
    function compHours(a, b) {
      var r = 0;
      if (a < b) {
        r = -1;
      }
      if (a > b) {
        r = 1;
      }
      return r;
    }
  // time check function
    function checkTime() {
      var then = textToDate($(".hour").text().trim());
      var now = new Date();
      var thenH = makeHour(then);
      var nowH = makeHour(now);
      console.log(then, now);
      var test = compHours(thenH, nowH);
      console.log(thenH, nowH, test);
      if (test == 0) {
        $(".hour").addClass("present");
      } else if (test == -1) {
        $(".hour").addClass("past");
      } else {
        $(".hour").addClass("future");
      }
    }
  
    checkTime();
  });



//Add local storage

//Add to keep storage on page refresh

//Add color changing functions based on time from moment
var checkTime = function () {
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT");
    console.log(time)

    //remove any old classes from element
    $(".hour").removeClass(".present .past .future");

    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}

checkTime();

//Add on click function for save 
//Need help figuring out the time check error, the colors seem to be showing as if all time is present
//console log is stating that there is an invalid date set
//Need to add localstorage to save when save button is clicked