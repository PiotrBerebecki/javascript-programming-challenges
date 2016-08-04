console.clear();

/*
-----------------------------------------
Advanced Algorithms - Pairwise
-----------------------------------------

The program should look for the numbers in the array which would add 
to make the number from the arg.

Then instead of adding those numbers up, you will add their indices.

Once an element has been used, it cannot be reused to pair with another.

Example:
pairwise([1, 1, 0, 2], 2) should return 6
as pais that sum to 2 are [1,1] and [0,2]
and their indexes are [0,1] and [2,3]
so sum of their indexes is 6.
*/



// --------------------------------------
function pairwise(arr, arg) {
  var sum = 0;
  for (var i=0; i<arr.length-1; i++) {
    for (var j=i+1; j<arr.length; j++) {
      if (arr[i] <= arg && arr[j] <= arg && arr[i] + arr[j] == arg) {
        console.log('Log:  ind ' + i + '       ' + arr[i] + ' ' + arr[j] + '       ind ' + j);
        sum += i+j; 
        console.log('Log:  Latest sum of indexes is ' + sum);
        arr[i] = arr[j] = NaN;
      }   
    }
  }
  return sum;
}

console.log(  pairwise([1, 1, 0, 2], 2)  ) // should return 6
// console.log(  pairwise([1, 1, 1], 2)  ) // should return 1