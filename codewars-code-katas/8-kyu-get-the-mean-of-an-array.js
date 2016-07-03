console.clear();

/*
-----------------------------------------
8 kyu
Get the mean of an array
-----------------------------------------

Return the average of the given array rounded downward to its nearest integer.

The array will never be empty.

Example
getAverage([1,2,3,4,5,]),3);
getAverage([2,2,2,2]),2);
getAverage([1,1,1,1,1,1,1,2]),1);
*/



// --------------------------------------
function getAverage(marks) {
  return Math.floor(marks.reduce((sum, curr) => sum + curr) / marks.length);
}

console.log(   getAverage([1,2,3,4,5])   ); // 3



// --------------------------------------
// one liner
const getAverage2 = marks => ~~(marks.reduce((s,v) => s+v) / marks.length);
// double bitwise NOT ~~ is equivalent to Math.floor
const getAverage3 = marks => Math.floor(marks.reduce((s,v) => s+v) / marks.length);