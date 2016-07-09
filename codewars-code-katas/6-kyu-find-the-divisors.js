console.clear();

/*
-----------------------------------------
6 kyu
Find the divisors!
-----------------------------------------

Create a function named divisors that takes an integer
and returns an array with all of the integer's divisors
(except for 1 and the number itself).

If the number is prime return the string '(integer) is prime'.

Example:

divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"

You can assume that you will only get positive integers as inputs.
*/



// --------------------------------------
function divisors(integer) {
  var d1 = [];
  
  for (n = 2; n * n <= integer; n++) {
    if (integer % n === 0) {
      d1.push(n);
    }
  }
  
  var d2 = d1.map(v => integer / v).reverse();
   
  if (n * n === integer) {
    d1.push(n);
  }
  
  return (d1.length === 0) ? `${integer} is prime` : d1.concat(d2);
};

console.log(      JSON.stringify( divisors(12) )     ); // [2,3,4,6]

// If a number n is not a prime, it can be factored into two factors a and b:
// n = a*b
// If both a and b were greater than the square root of n, a*b would be greater than n. 
// So at least one of those factors must be less or equal to the square root of n, 
// and to check if n is prime, we only need to test for factors less than or equal to
// the square root.

// We don't need to analyse beyond the square root of the given integer
// so the solution below does unnecessary checks beyond square root of integer.
// Using i < integer / 2 as the loop condition instead of i * i <= integer 
// means using O(n) instead of O(sqrt n)
// For large numbers, the solution below will be significantly slower than it
// needs to be. For example in the case of 1 trillion, there are 500 billion 
// checks to make vs. 1 million. (~499,000 times more work).



// --------------------------------------
function divisors2(integer) {
  var divisorArray = [];
  for (var n = 2; n < integer / 2; n++) {
    if (integer % n === 0) {
     divisorArray.push(n);
    }
  }
  return divisorArray.length === 0 ? `${integer} is prime` : divisorArray;
};