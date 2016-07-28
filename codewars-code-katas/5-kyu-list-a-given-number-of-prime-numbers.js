console.clear();

/*
-----------------------------------------
5 kyu
List a given number of prime numbers
(aka First n Prime Numbers)
-----------------------------------------

A prime number is an integer greater than 1 that is 
only evenly divisible by itself and 1.

Write your own Primes class with class method Primes.first(n) 
that returns an array of the first n prime numbers.

For example:

Primes.first(1)
# => [2]

Primes.first(2)
# => [2, 3]

Primes.first(5)
# => [2, 3, 5, 7, 11]

Primes.first(20).slice(15,20)
# => [53, 59, 61, 67, 71]

Note: An inefficient algorithm will time out. Memoization (memoizing) may help.
*/



// --------------------------------------
var Primes = {
  primeCache: [2,3],
  
  first: function(n) {  
    var primeArr = this.primeCache;
    if (n <= primeArr.length) {return primeArr.slice(0, n);}  
    
    for (var i = primeArr[primeArr.length - 1] + 1; primeArr.length < n; i++) {
      if (this.isPrime(i)) {primeArr.push(i);}
    }
    return primeArr;
  },
  
  isPrime: function(num) {
    var limit = Math.sqrt(num);
    for (var j = 2; j <= limit; j++) {
      if (num % j === 0) {return false;}
    }
    return true;
  }
};

console.log(  Primes.first(3)  );   // [2, 3, 5]
// console.log(  Primes.primeCache  ); // [2, 3, 5]  read from the cache
// console.log(  Primes.first(1)  );   // [2]        read from the cache
// console.log(  Primes.primeCache  ); // [2, 3, 5]  cache works :)