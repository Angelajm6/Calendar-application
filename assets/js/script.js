$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

  $(".saveBtn").click(function(){
    let descriptionId = `#description-${this.dataset.hour}`
    let task = $(descriptionId).val() 
    console.log(`you clicked the ${this.dataset.hour} o'clock save button`)
    console.log(`let's save the task: ${task}`)
  }) 

let today = new Date();
let day = today.getDay();
let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + dayList[day] + "."); //display the current day



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




//1. localStorage make 
//2. info change based of TimeRanges
//3. update page with what's in local storage
