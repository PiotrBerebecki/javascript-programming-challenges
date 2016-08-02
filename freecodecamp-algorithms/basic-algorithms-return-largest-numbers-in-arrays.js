console.clear();

/*
-----------------------------------------
Basic Algorithms - Return largest numbers in arrays
-----------------------------------------

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
should return [5,27,39,1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
should return [9, 35, 97, 1000000]
*/



// --------------------------------------
function largestOfFour(arr) {
  return arr
    .map(subArr => subArr
       .reduce((prev, curr) => Math.max(prev, curr), 0)
        );
}

console.log(  JSON.stringify(largestOfFour([[4, 5, 1, 3],
                                            [13, 27, 18, 26],
                                            [32, 35, 37, 39],
                                            [1000, 1001, 857, 1]]))  ); // [5,27,39,1001]



// --------------------------------------
// As above
function largestOfFour2(arr) {
  return arr.map(function(subArr) {
    return subArr.reduce(function(prev, curr) {
      return Math.max(prev, curr); // or return (curr > prev) ? curr : prev;
    }, 0);
  });
}