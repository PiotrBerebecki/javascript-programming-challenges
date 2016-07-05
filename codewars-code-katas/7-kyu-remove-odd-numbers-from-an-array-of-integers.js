console.clear();

/*
-----------------------------------------
7 kyu
Remove odd numbers from an array of integers (aka No oddities here)
-----------------------------------------

Remove odd numbers from an array of integers.

Example:
noOdds([1,2,3,4,5]) // [2,4]
*/



// --------------------------------------
function noOdds(array) {
  return array.filter(function(el) {
    return el % 2 === 0;
  });
}

console.log(  noOdds([1,2,3,4,5])  ); // [2,4]



// --------------------------------------
function noOdds2(array) {
  return array.filter(function(el) {
    return !(el % 2);
  });
}



// --------------------------------------
function noOdds3(array) {
  function isEven(num) {
    return num % 2 === 0;
  }
  return array.filter(isEven);
}



// --------------------------------------
const noOdds4 = array => array.filter(el => el % 2 === 0);