console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Sum all primes
-----------------------------------------

Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. 
For example, 2 is a prime number because it's only divisible by 1 and 2. 
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

Here are some helpful terms:
For Loops
Array.push()
*/



// --------------------------------------
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2, limit = Math.sqrt(num); i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(  sumPrimes2(5)  );



// --------------------------------------
// recursion
function sumPrimes2(num) {
  if (num === 1) {return 0;}
  
  if (!isPrime(num)) {return sumPrimes2(num - 1);}
  else               {return num + sumPrimes2(num - 1);}
}