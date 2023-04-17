function calculateTimeElapsed() {
   var day = parseInt(document.getElementById("day").value);
   var month = parseInt(document.getElementById("month").value);
   var year = parseInt(document.getElementById("year").value);
   
   var currentDate = new Date();
   var enteredDate = new Date(year, month - 1, day);
   
   var yearsElapsed = currentDate.getFullYear() - enteredDate.getFullYear();
   var monthsElapsed = currentDate.getMonth() - enteredDate.getMonth();
   var daysElapsed = currentDate.getDate() - enteredDate.getDate();
   
   if (daysElapsed < 0) {
     monthsElapsed--;
     daysElapsed += daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
   }
   
   if (monthsElapsed < 0) {
     yearsElapsed--;
     monthsElapsed += 12;
   }
   
   var resultElement = document.getElementById("result");
   resultElement.innerHTML = "Elapsed time: " + yearsElapsed + " years, " + monthsElapsed + " months, and " + daysElapsed + " days.";
   
   return false;
 }
 
 function daysInMonth(month, year) {
   return new Date(year, month + 1, 0).getDate();
 }
 