console.clear();

/*
-----------------------------------------
4 kyu
Human readable duration format including years
-----------------------------------------

Given a number representing seconds generate the following function.

formatDuration(1) // "1 second")
formatDuration(62) // "1 minute and 2 seconds"
formatDuration(120) // "2 minutes"
formatDuration(3600) // "1 hour"
formatDuration(3662) // "1 hour, 1 minute and 2 seconds"
formatDuration(15731080) // "182 days, 1 hour, 44 minutes and 40 seconds"
formatDuration(101956166) // "3 years, 85 days, 1 hour, 9 minutes and 26 seconds"

Notes:

The components are separated by a comma and a space (", "). Except the last component, 
which is separated by " and ", just like it would be written in English. 

1 minute and 0 seconds is not valid - it should be 1 minute.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
*/



// --------------------------------------
function formatDuration(seconds) {
  if (seconds === 0) {return 'now';}

  var years   = Math.floor(seconds / (60 * 60 * 24 * 365));
  var days    = Math.floor(seconds / (60 * 60 * 24      )) % 365;
  var hours   = Math.floor(seconds / (60 * 60           )) % 24;
  var minutes = Math.floor(seconds /  60                 ) % 60;
  var seconds =            seconds %  60;
  
  var duration = [years, days, hours, minutes, seconds];
  var units = ['year', 'day', 'hour', 'minute', 'second'];
  
  var linked = duration.map(function(el,ind) {
    if (el > 1) {return el + ' ' + units[ind] + 's'}
    if (el === 1) {return el + ' ' + units[ind]}
  }).filter(el => el !== undefined);
  
  if (linked.length > 1) {  // or just return linked.join(', ').replace(/,([^,]*)$/, " and$1")
    var last = linked.pop();
    return linked.join(', ') + ' and ' + last;
  } else {
    return linked[0];
  }
}

console.log(  formatDuration(62)  ); // '1 minute and 2 seconds'
// console.log(  formatDuration(60)  ); // '1 minute'
// console.log(  formatDuration(59)  ); // '59 seconds'
// console.log(  formatDuration(3662)  ); // '1 hour, 1 minute and 2 seconds'
// console.log(  formatDuration(3600*24*366)  ); // '1 year and 1 day'