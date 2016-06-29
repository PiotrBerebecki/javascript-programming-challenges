console.clear();

/*
-----------------------------------------
6 kyu
Sum only the same and consecutive numbers in the array
-----------------------------------------

You are given an array containing only integers (positive and negative).

Sum only the numbers that are the same and consecutive.

Example
[1,1,7,7,3] should return [2,14,3]
*/
// -------------------------------------
function sumConsecutives(input) {
  return input.reduce(function(prev, curr, i, arr) {
    if (curr !== arr[i - 1]) {
      prev.push(curr);
    } else {
      prev[prev.length - 1] += curr;
    }
    return prev;
  }, [])
}

console.log(  sumConsecutives([1,1,7,7,3])  ); // [2,14,3]