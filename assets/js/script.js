const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev");
  (next = document.querySelector(".next")),
  (todayBtn = document.querySelector(".today-btn")),
  (gotoBtn = document.querySelector(".goto.btn")),
  (dateInput = document.querySelector(".date-input"));
  
let today =new Date();
let activeDay;
let month =today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function initCalendar() {
//To get prev month days and current month all days and remaining month days
  const firstDay = new Date(year,month,1);
  const lastDay = new Date(year,month + 1,0);
  const prevLastDay = new Date(year,month,0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

//update date in the header of the calendar
  date.innerHTML = months[month] + " " + year;

//Days on DOM
  let days = "";

//prev month days
  for (let x = day; x >0; x--) {
    days += '<div class= "day prev-date" >${prevDays - x + 1}</div>';
  }

    //current month days
    for(let i = 1; i < lastDate; i++) {
      //if day is today add class today
      if (
        i == new Date().getDate() &&
        year == new Date().getFullYear() &&
        month == new Date().getMonth()
      ) {
      days += '<div class= "day today" >${i}</div>';
      } 
      //add remaining as it is
      else {
        days += '<div class= "day" >${i}</div>';
    }
  }

  //next month days
  for (let j =1; j< nextDays; j++) {
    days += '<div class= "day next-date" >${j}</div>';
  }

    daysContainer.innerHTML = days;
  }

  initCalendar();

//prev month
function prevMonth() {
month--;
if (month <0) {
  month =11;
  year--;
}
initCalendar();
}

//next month
function nextMonth() {
  month++;
  if(month >11) {
    month =0
    year++
  }
  initCalendar();
}

//EventLitener on prev and next
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

todayBtn.addEventListener("click", () => {
  today =new date();
  month = today.getMonth();
  year =today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("keyup", (e) => {
  //allow only numbers remove anything else
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.lenght ==2){
    //add a slash if two numbers entered
    dateInput.value += "/";
  }
  if (dateInput.value.lenght > 7) { //don't allow more than 7 characters
    dateInput.value =dateInput.value.slice(0,7);
  }
  
  if (e.inputType =="deleteContentBackward") {
    if (dateInput.value.lenght == 3) {
      dateInput.value = dateInput.value.slice(0,2);
    }
  }
});

//gotoBtn.addEventListener("click", gotoDate);

//function to go to selected date
function gotoDate(){
  const dateArr = dateInput.value.split("/");
  console.log(dateArr);

  //date validation
  if (dateArr.lenght == 2) {
    if(dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].lenght == 4) {
      month == dateArr[0] -1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }

  //If the date is invalid the message will pop up
  alert("invalid date");
}

















// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  