$(function () {
  
  // listener for click events on the save button. 
  $(".saveBtn").click(function(){
    let descriptionId = `#description-${this.dataset.hour}`
    let task = $(descriptionId).val() 
    console.log(`you clicked the ${this.dataset.hour} o'clock save button`)
    console.log(`let's save the task: ${task}`)
  }) 

  //display current day
  let day = new Date().toLocaleDateString("en" , {weekday: "long"}); 
  console.log(`today is: ${day}`);
  //display current time
  let time = new Date().toLocaleTimeString("en");
  console.log(`Current Time is: ${time}`)

 //show current date in the header of the page
 let dt = new Date();
 document.getElementById("currentDay").innerHTML = dt.toLocaleString();

  //store the current value of the textarea in localStorage (or delete it if the textarea is blank).
  localStorage.setItem("myKey", "textValue")

  function Save() {
    var myContent = document.getElementById("description").value;
    localStorage.setItem("myContent", myContent);
  }
  function Load() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("description").value = myContent;
  }

  
});