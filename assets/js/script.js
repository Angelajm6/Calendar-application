const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev");
  (next = document.querySelector(".next")),
  (todayBtn = document.querySelector(".today-btn")),
  (gotoBtn = document.querySelector(".goto.btn")),
  (dateInput = document.querySelector(".date-input"));
  eventDay = document.querySelector(".event-Day"),
  eventDate = document.querySelector(".event-date");
  
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

//Default events array
const eventsArr = [
  {
    day:16,
    month:11,
    year:2022,
    events: [
    {
      title: "Event 1 lorem ipsun dolar sit genfa tersa dsad",
      time:"10:00 AM",
    },
    {
    title:"Event 2",
    time: "11:00 AM",
    },
  ]},
  {
      day:18,
      month:11,
      year:2022,
      events: [
      {
        title: "Event 1 lorem ipsun dolar sit genfa tersa dsad",
        time:"10:00 AM",
      },
    ]
  },
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

 // adding days on dom
 let days = "";

//prev month days
  for (let x = day; x >0; x--) {
    days += '<div class= "day prev-date" >${prevDays - x + 1}</div>';
  }

  //current month days
  for(let i = 1; i < lastDate; i++) {

  //check if event is present on current day
let event =false;
eventsArr.forEach((eventObj) => {
  if (
    eventObj.day == i &&
    eventObj.month == month + 1 &&
    eventObj.year == year
  ) {
    event = true;
  }
  });

    //if day is today add class today
      if (
        i == new Date().getDate() &&
        year == new Date().getFullYear() &&
        month == new Date().getMonth()
      ) {

      activeDay = i;
      getActiveDay(i);


        //if an event is found, add event class
        //add active on today at startup
        if (event) {
          days += '<div class= "day today active event" >${i}</div>';
        } else {
          days += '<div class= "day today active" >${i}</div>';
        }
      } 
      //add remaining as it is
      else {
        if (event) {
        days += '<div class= "day event" >${i}</div>';
        } else {
          days += '<div class= "day" >${i}</div>';
        }
    }
  }

  //next month days
  for (let j =1; j< nextDays; j++) {
    days += '<div class= "day next-date" >${j}</div>';
  }

  daysContainer.innerHTML = days;
  //add listener after calendar initialized
  addListener();
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

const addEventBtn = document.querySelector(".add-event"),
      addEventContainer = document.querySelector(".add-event-wrapper"),
      addEventCloseBtn = document.querySelector(".close"),
      addEventTitle = document.querySelector(".event-name"),
      addEventFrom = document.querySelector(".event-time-from");
      addEventTo = document.querySelector(".event-time-to");

addEventBtn.addEventListener("click", () => {
  addEventContainer.classList.toggle("active");
});
addEventCloseBtn.addEventListener("click", () => {
  addEventContainer.classList.remove("active");
});

//allow only 50 characters in the title
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = AddEventTitle.value.slice(0,50);
});

//time format in from and to time
addEventFrom.addEventListener("input", (e) => {
  //remove anything else numbers 
  addEventFrom.value =addEventFrom.value.replace(/[^0-9:]/g, "");
  //if two numbers entered auto add :
if (addEventFrom.value.lenght == 2) {
  addEventFrom.value += ":";
}
//Don't let user enter more than 5 characters
if (addEventFrom.value.lenght == 5) {
  addEventFrom.value = addEventFrom.value.slice(0,5);
}
});

//same with to time
  addEventTo.addEventListener("input", (e) => {
  //remove anything else numbers 
  addEventTo.value =addEventTo.value.replace(/[^0-9:]/g, "");
  //if two numbers entered auto add :
if (addEventTo.value.lenght == 2) {
  addEventTo.value += ":";
}
//Don't let user enter more than 5 characters
if (addEventTo.value.lenght == 5) {
  addEventTo.value = addEventTo.value.slice(0,5);
}
});


//function to add lstener on days after rendered
function addEventListener() {
  const days = document.querySelector(".day");
  days.forEach ((day) => {
    day.addEventListener("click", (e) => {
      //set current day as active day
      activeDay = Number(e.target.innerHTML);

      //call active day after click
      getActiveDay (e.target.innerHTML);


      //remove active from already active day
      days.forEach((day) => {
        day.classList.remove("active");
      });

      //if prev month day is clicked, goto prev month and add active
      if (e.target.classList.comtains("prev-date")) {
        prevMonth();

        setTimeout(() => {
          //select all days of that month
          const days = document.querySelectorAll(".day");

          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML == e.target.innerHTML
            ) {
              day.classList.add("active");
             }
          });
        }, 100);

        //same with next month days
      } else if (e.target.classList.comtains("next-date")) {
        nextMonth();

        setTimeout(() => {
          //select all days of that month
          const days = document.querySelectorAll(".day");

          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML == e.target.innerHTML
            ) {
              day.classList.add("active");
             }
            });
          }, 100);
        } else {
          //remaining current month days
          e.target.classList.add("active");
        }
      });
    });
  }

function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//function to show events of that specific day

function updateEvents(date) {
  let events = "" ;
  eventsArr.forEach((event) => {

  //get events of active day only
if (
  date == event.day &&
  month + 1 == event.month &&
  year == event.year
) {

  //show event on the document
  event.events.forEach((event) => {
    events += `
    <div class="event">
      <div class="title">
        <i class="fas fa-circle"></i>
        <h3 class="event-title">${event.title}</h3>  
      </div>
      <div class="event-time">
        <span class="event-time">${event.time}</span>
      </div>
      `;
      });
    }
  });
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
  