console.clear();

/*
-----------------------------------------
Basic Algorithms - Where do I belong
-----------------------------------------

Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once 
it has been sorted. Some arrays my not be in numerical order.

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
*/



// --------------------------------------
function getIndexToIns(arr, num) {
  return (arr.concat(num)).sort((a, b) => a - b).indexOf(num);
}

console.log(  getIndexToIns2([2, 5, 10], 8)  );  // 2



// --------------------------------------
function getIndexToIns2(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b); 
  return arr.indexOf(num);
}