console.clear();

/*
-----------------------------------------
8 kyu
Generate range of integers
-----------------------------------------

Implement a function named generateRange(min, max, step), which takes three
arguments and generates a range of integers from min to max, with the step. The
first integer is the minimum value, the second is the maximum of the range and
the third is the step. (min < max)

generateRange(2, 10, 2) should return array of [2,4,6,8,10]
generateRange(1, 10, 3) should return array of [1,4,7,10]

*/



//----------------------------------------
function generateRange(min, max, step) {
  var arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// let can be used, for example inside for loops so that it is only visible
// inside  the for block (nearest enclosing block), whereas var is visible
// inside the whole  function (nearest function block).

console.log(generateRange(2, 10, 2));



//----------------------------------------
function generateRange2(min, max, step) {
  for (var arr = []; min <= max; min += step) arr.push(min)
  return arr;
}