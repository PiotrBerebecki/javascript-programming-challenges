console.clear();

/*
-----------------------------------------
6 kyu
Delete occurrences of an element if it occurs more than n times
-----------------------------------------

Given an array of numbers and a number x, 
create a new array that contains each number 
of initial array at most x times without reordering. 

For example if the input array is [1,3,3,3,3] and x = 2, 
then return [1, 3, 3].

Example
deleteNth ([1,3,3,3,3],2) // return [1, 3, 3]
deleteNth ([1,1,1,1],2) // return [1,1]
deleteNth ([20,37,20,21],1) // return [20,37,21]
*/



// --------------------------------------
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

console.log(  JSON.stringify(deleteNth( [1,3,3,3,3,3],2))  ); // [1,3,3]



// --------------------------------------
// Using tilde operators
function deleteNth2(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = ~~cache[n] + 1;
    return cache[n] <= x;
  });
}

// ~ bitwise operator converts the integer to -(N+1)
// ~2 === -3; //true
// ~1 === -2; //true
// ~0 === -1; //true
// ~-1 === 0; //true
// ~~ bitwise operator is a more efficient way 
// od doing Math.floor()
// ~~2 === Math.floor(2);  // true, 2
// ~~2.4 === Math.floor(2);  // true, 2
// ~~3.9 === Math.floor(3);  // true, 3