
$(document).ready(function() { 

//show current date in the header of the page
  let dt = new Date();
  document.getElementById("currentDay").innerHTML = dt.toLocaleString();

  let time = new Date().toLocaleTimeString("en");
  console.log(`Current Time is: ${time}`)
  


  var timeDisplay = $('#time-display');

  function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
  timeDisplay.text(rightNow);
}
  displayTime();
  setInterval(displayTime, 1000);


//gets the curent hour
  var currentHour =  new Date().getHours();
  console.log(currentHour);

  var hours = ['#9', '#10', '#11', '#12', '#1', '#2', '#3', '#4', '#5', '#6']
  var index = hours.findIndex(element => element == `#${currentHour}`);

  //id attribute of each time block to add or remove past
  if (currentHour > 6) {
    for (i = 0; i < hours.length; i++) {
      $(hours[i]).removeClass('present');
      $(hours[i]).removeClass('future');
      $(hours[i]).addClass('past');
    }
  }
    else if (currentHour < 9) {
      for (i = 0; i < hours.length; i++) {
        $(hours[i]).removeClass('present');
        $(hours[i]).removeClass('past');
        $(hours[i]).addClass('future');
      }
    }
    else {

      for (i = index;i < hours.lenght; i++) {
        $(hours[i]).addClass('future');
        $(hours[i]).removeClass('present');
        $(hours[i]).removeClass('past');
      } 

    for (i = index;i > 0; i--) {
      $(hours[i]).addClass('past');
      $(hours[i]).removeClass('present');
      $(hours[i]).removeClass('future');
    }

      $(hours[index]).addClass('present');
      $(hours[index]).removeClass('past');
      $(hours[index]).removeClass('future');
      console.log(index);
  };


//listener for click events on the save button 
  $(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".description").val();
    $("#appt").text("Appointment added successfully");
    $("#appt").delay(1000).fadeOut(500);

    localStorage.setItem(time,input);
    console.log(time,value);
  });

  //get input saved from localStorage
  function getInput() {
    $(".hour").each(function () {
      var currentTime = $(this).text();
      var currentInput = localStorage.getItem(currentTime);

      if (currentInput != null) {
        $(this).siblings(".description").val(currentInput)
      }
    });
  }

  getInput();

});
  
