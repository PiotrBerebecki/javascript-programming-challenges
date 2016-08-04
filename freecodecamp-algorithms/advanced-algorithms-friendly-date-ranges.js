console.clear();

/*
-----------------------------------------
Advanced Algorithms - Friendly date ranges
-----------------------------------------

Create a program that will take two dates and convert them 
into a more easy to understand date such as January 1st, 2017. 

It will also check the difference between them, and handle 
cases with no difference, more than a day, more than a month, 
more than a year, and more than a month and less than a year 
respectively.

See the test cases below for expected return values.
*/



// --------------------------------------
function makeFriendlyDates(dates) {

  function nth(n) {
    if(n>3 && n<21) {return n+'th';}
    switch (n % 10) {
      case 1:  return n+'st';
      case 2:  return n+'nd';
      case 3:  return n+'rd';
      default: return n+'th';
   }
  }
  
  var arr;
  dates = dates.map(function(el) {
    arr = el.split('-');
    return (new Date(Date.UTC(arr[0], arr[1] - 1, arr[2])));      
  });
   
  var m1 = dates[0].toLocaleString('en-us',{month:'long'}),
      m2 = dates[1].toLocaleString('en-us',{month:'long'}),
      d1 = nth(dates[0].getUTCDate()),
      d2 = nth(dates[1].getUTCDate()),
      y1 = dates[0].getUTCFullYear(),
      y2 = dates[1].getUTCFullYear();
  
    // current year
  var yCurrent = new Date().getUTCFullYear();
  if (yCurrent===y1 && yCurrent+1===y2)  {return [`${m1} ${d1}`,`${m2} ${d2}`];}

    // following year, less than 365 days difference 
  var msPerDay = 1000 * 60 * 60 * 24;
  var dateDiffInDays = Math.floor((dates[1] - dates[0]) / msPerDay);
  if (y1+1===y2 && dateDiffInDays < 365) {return [`${m1} ${d1}, ${y1}`,`${m2} ${d2}`];} 

    // same day
  if (y1===y2 && m1===m2 && d1===d2)     {return [`${m1} ${d1}, ${y1}`];}

    // same year, same month
  if (y1===y2 && m1===m2)                {return [`${m1} ${d1}`,`${d2}`];}

    // same year
  if (y1===y2)                           {return [`${m1} ${d1}, ${y1}`,`${m2} ${d2}`];}

    // default
  return [`${m1} ${d1}, ${y1}`,`${m2} ${d2}, ${y2}`];
}



    // current year (don't show year)
// console.log(  makeFriendlyDates(["2016-12-01", "2017-02-03"]) ) // ["December 1st","February 3rd"]

    // following year, less than 365 days difference (don't show 2nd year)
// console.log(  makeFriendlyDates(["2022-09-05", "2023-09-04"]) ) // ["September 5th, 2022","September 4th"]

    // same day (show only 1st date)
// console.log(  makeFriendlyDates(["2018-01-13", "2018-01-13"]) ) // ["January 13th, 2018"]

    // same year, same month (show 1st month and day; and only 2nd day)
// console.log(  makeFriendlyDates(["2016-07-01", "2016-07-04"]) ) // ["July 1st","4th"]

    // same year (don't show 2nd year)
// console.log(  makeFriendlyDates(["2017-03-01", "2017-05-05"]) ) // ["March 1st, 2017","May 5th"]

    // default (show all)
// console.log(  makeFriendlyDates(["2022-09-05", "2023-09-05"]) ) // ["September 5th, 2022","September 5th, 2023"]