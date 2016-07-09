console.clear();

/*
-----------------------------------------
6 kyu
Is a number prime?
-----------------------------------------

Define a function isPrime that takes one integer argument and 
returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number 
greater than 1 that has no positive divisors other than 1 and itself.

Example
isPrime(5) => true
isPrime(25) => false
*/



// --------------------------------------
// Clever
function isPrime(num) { 
  var limit = Math.sqrt(num);
  for (var i = 2; i <= limit; i++) {
    if (num % i === 0) {return false;}
  }
  return num >= 2;
}

console.log(  isPrime2(25)  ); // false



// --------------------------------------
function isPrime2(num) { 
  if (num < 2) {return false;}
  for (var i = 2; i*i <= num; i++) {
    if (num % i === 0) {return false;}
  }
  return true;  
}



// --------------------------------------
// Above oprimised
function isPrime3(num) { 
  if (num < 2) {return false;}
  var limit = Math.sqrt(num);
  for (var i = 2; i <= limit; i++) {
    if (num % i === 0) {return false;}
  }
  return true;  
}