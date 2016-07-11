console.clear();

/*
-----------------------------------------
5 kyu
List prime numbers up to a given number
(aka Ready for Prime Time)
-----------------------------------------

Write a method that takes a maximum bound and returns all 
primes starting with 0 up-to and including the maximum bound.

For example:

prime(11); // [2,3,5,7,11]
*/



// --------------------------------------
function prime(max) { 
  var primeArray = [];
  
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {primeArray.push(i);}
  }
  
  function isPrime(num) {
    if (num < 2) {return false;} // not required in this kata as i >= 2
    var limit = Math.sqrt(num);
    for (var j = 2; j <= limit; j++) {
      if (num % j === 0) {return false;}
    }
    return true;
  }
  
  return primeArray;
}

console.log(  prime(11)  ); // [2,3,5,7,11]