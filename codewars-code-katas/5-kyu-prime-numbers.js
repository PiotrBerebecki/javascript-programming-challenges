console.clear();

/*
-----------------------------------------
5 kyu
Prime Numbers
-----------------------------------------

A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.

You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in a given range (including the provided numbers, if they're prime).

Note: finish does not need to be the larger number.

Sample Input:

isPrime(number)

isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true

getPrimes(start, finish)

getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
*/



// --------------------------------------
function isPrime(num) {
  if (num < 2) {return false;}
  var limit = Math.sqrt(num);
  for (var i = 2; i <= limit; i++) {
    if (num % i === 0) {return false;}
  }
  return true;
}

function getPrimes(start, finish) {
  if   (start < finish) {var min = start; var max = finish;}
  else                  {var min = finish; var max = start;}
  var result = [];
  for (var i = min; i <= max; i++) {
    if (isPrime(i)) {result.push(i);}
  }
  return result;
}

console.log(  isPrime(13)  ); // true
console.log(  getPrimes(0, 30)  ); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// console.log(  getPrimes(30, 0)  ); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]