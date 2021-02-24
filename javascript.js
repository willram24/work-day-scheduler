// today's day and date
let date = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(date);

$(document).ready(function () {
  // save workday plan on click 
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    let plan = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, plan);
  });

    function timeTracker() {
    //get current number of hours.
    let timeNow = moment().hour();

    //loop through each time block and 
    $(".time-block").each(function () {
      let blockTime = parseInt($(this).attr("id").split("-")[1]);

      //check block time and compare to actual time for colors
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }

  // Display saved workday plans
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  timeTracker();
})