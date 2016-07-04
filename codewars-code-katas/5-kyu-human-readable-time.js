console.clear();

/*
-----------------------------------------
5 kyu
Human Readable Time
-----------------------------------------

Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

Examples:
humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00',
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'
*/  



// --------------------------------------
function humanReadable(seconds) {
  var hours = parseInt( seconds / 3600, 10 );
  var minutes = parseInt( seconds / 60, 10 ) % 60;
  var seconds = seconds % 60;

  var pad = function(val) {
    return val < 10 ? '0'+val : val;
  }
  
  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
// parseInt(10.9) returns 10

console.log(  humanReadable(3661)  ); // 01:01:01