console.clear();

/*
-----------------------------------------
5 kyu
Move zeros to the end of an array (aka Moving Zeros To The End)
-----------------------------------------

Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/



// --------------------------------------
function moveZeros(arr) {
  var zeros = [];
  return arr.filter(function(el) {
    if (el !== 0) { return true; }   
    zeros.push(el);
    return false;
  }).concat(zeros);
}

console.log(  JSON.stringify(moveZeros([false,1,0,1,2,0,1,3,"a"]))   );
// [false,1,1,2,1,3,"a",0,0]



// --------------------------------------
// Same as above
function moveZeros2(arr) {
  var zeros = [];
  return arr.filter(function(el) {
    if (el === 0) { zeros.push(0); return false; }
    return true;
  }).concat(zeros);
}



// --------------------------------------
// Short but 2x filter
function moveZeros2(arr) {
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}



// --------------------------------------
// Using counter
function moveZeros3 (arr) {
  var zerosCounter = 0;
  
  var withoutZeros = arr.filter(function(el) {
    if (el === 0) { zerosCounter++; }
    return el !== 0;
  });
  
  var zeros = [];

  while (zeros.length < zerosCounter) {
    zeros.push(0);
  }
  return withoutZeros.concat(zeros);
}