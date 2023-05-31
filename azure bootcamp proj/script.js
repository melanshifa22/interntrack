document.addEventListener("DOMContentLoaded", function() {
    // Get current time
    var now = new Date();
    var currentTime = now.getHours();
  
    // Set time-specific sections
    var workSection = document.getElementById("work-hours");
    var morningSection = document.getElementById("early-morning");
    var eveningSection = document.getElementById("evening");
  
    if (currentTime >= 9 && currentTime < 17) {
      workSection.style.display = "block";
    } else if (currentTime >= 6 && currentTime < 9) {
      morningSection.style.display = "block";
    } else {
      eveningSection.style.display = "block";
    }
  
    // Display random daily quote
    var quotes = [
      "The future depends on what you do today.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don't watch the clock; do what it does. Keep going.",
      "Believe you can and you're halfway there.",
      "The only way to do great work is to love what you do."
    ];
  
    var quoteElement = document.getElementById("daily-quote");
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  
    // Task List functionality
    var workForm = document.getElementById("work-form");
    var workInput = document.getElementById("work-input");
    var workList = document.getElementById("work-tasks");
  
    workForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var task = workInput.value.trim();
  
      if (task !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = task;
        workList.appendChild(taskItem);
        workInput.value = "";
      }
    });
  
    // Early Morning Task List functionality
    var morningForm = document.getElementById("morning-form");
    var morningInput = document.getElementById("morning-input");
    var morningList = document.getElementById("morning-tasks");
  
    morningForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var task = morningInput.value.trim();
  
      if (task !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = task;
        morningList.appendChild(taskItem);
        morningInput.value = "";
      }
    });
  
    // Evening Task List functionality
    var eveningForm = document.getElementById("evening-form");
    var eveningInput = document.getElementById("evening-input");
    var eveningList = document.getElementById("evening-tasks");
  
    eveningForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var task = eveningInput.value.trim();
  
      if (task !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = task;
        eveningList.appendChild(taskItem);
        eveningInput.value = "";
      }
    });
  });
  