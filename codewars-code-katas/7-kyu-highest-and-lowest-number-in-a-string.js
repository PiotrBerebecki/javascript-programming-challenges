console.clear();

/*
-----------------------------------------
7 kyu
7 kyu Highest and Lowest number in a string
-----------------------------------------

Given a string of space separated numbers, return the highest and lowest number.

Example:

highAndLow('1 2 3 4 5'); // return '5 1'
highAndLow('1 2 -3 4 5'); // return '5 -3'
highAndLow('1 9 3 4 -5'); // return '9 -5'

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space,
and highest number is first.
*/



// --------------------------------------
function highAndLow(str) {
  var highLow = {max: -Infinity, min: Infinity};
  str
    .split(' ')
    .forEach((num) => {
      highLow.max = Math.max(highLow.max, num);
      highLow.min = Math.min(highLow.min, num);
    });
  return highLow.max + ' ' + highLow.min;
}

console.log(  highAndLow('1 2 3 4 5')  ); // '5 1'
console.log(  highAndLow('-1 -1')  ); // '-1 -1'




// --------------------------------------
function highAndLow2(str) {
  var arr = str.split(' ').map(Number);  // no need to call Number
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}



// --------------------------------------
function highAndLow3(str) {
  var arr = str.split(' ');
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr)
}