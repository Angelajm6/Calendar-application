const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev");
  next = document.querySelector(".next");

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
    const day = firstday.getDate();
    const nextDays = 7 - lastDay.getDay() - 1;

//update date on top of the calendar
  date.innerHTML = months[month] + " " + year;

//Days on DOM
  let days = "";

//prev month days
  for (let x = day; x >0; x--) {
    days = '<div class= "day prev-date" >${prevDays - x + 1}</div>';
    }
  }



initCalendar();

























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
  