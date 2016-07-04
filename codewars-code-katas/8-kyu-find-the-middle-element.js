console.clear();

/*
-----------------------------------------
8 kyu 
Find the middle element
-----------------------------------------

Given a triplet (array of 3 numbers), return the index 
of the middle element in numerical order.

The input to the function will be an array of three
distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 
2 in the input array is 0.

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 
10 in the input array is 1.
*/



// --------------------------------------
function gimme(inputArray) {
  var middle = inputArray.slice().sort((a,b) => a - b)[1];
  return inputArray.indexOf(middle);
}

console.log(  gimme([2, 3, 1])  ); // 0

// sort() method sorts array in place modifying the original array
// so indexOf() method would show a new index. 
// we can work around this by 'copying' the array  by slicing or  
// concatenating it. This will not affect the original array.



// --------------------------------------
// one-liner
function gimme2(inputArray) {
  return inputArray.indexOf(inputArray.slice().sort((a,b) => a - b)[1]);
}



// --------------------------------------
// as above but using concat()
function gimme3(inputArray) {
  var middle = inputArray.concat().sort((a,b) => a - b)[1];
  return inputArray.indexOf(middle);
}



// --------------------------------------
// as above but using concat()
function gimme4(inputArray) {
  var middle = [].concat(inputArray).sort((a,b) => a - b)[1];
  return inputArray.indexOf(middle);
}