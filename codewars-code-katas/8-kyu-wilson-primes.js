console.clear();

/*
-----------------------------------------
8 kyu
Wilson primes
-----------------------------------------

Create a function that returns true if the given number is a Wilson prime.
((P-1)! + 1) / (P * P) should give a whole number.
The only known Wilson primes are 5, 13, and 563.
*/



// --------------------------------------
function amIWilson(p) {
  function factorial(x) {
    return x <= 1 ? 1 : x * factorial(x-1);
  }
  return ( (factorial(p-1) + 1) / (p*p) ) % 1 === 0;
}

console.log(  amIWilson(13)  ); // true