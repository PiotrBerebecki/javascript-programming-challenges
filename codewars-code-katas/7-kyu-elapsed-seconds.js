console.clear();

/*
-----------------------------------------
7 kyu
Elapsed Seconds between two Dates objects
-----------------------------------------

Complete the function so that it returns the number of seconds 
that have elapsed between the start and end times given.

Tips:

    The start/end times are given as Date (JS/CoffeeScript) 
    and Time (Ruby) instances.
    
    The start time will always be before the end time.
*/



var dateNow = new Date(1474137558000); 
var dateLater = new Date(1474137559000); // 1000ms later than `dateNow`

// --------------------------------------
function elapsedSeconds(startDate, endDate) {
  return (endDate - startDate) / 1000;
}

console.log(  elapsedSeconds(dateNow, dateLater)  ); // 1