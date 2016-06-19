console.clear();

/*
-----------------------------------------
8 kyu
Even or Odd
-----------------------------------------

Create a function that takes an integer as an argument and returns "Even" for
even numbers or "Odd" for odd numbers.
 */



//----------------------------------------
function even_or_odd(number) {
  return ( (number % 2) === 0 ) ? "Even" : "Odd";
}
// An even number is an integer which is "evenly divisible" by two. This means
// that if the integer is divided by 2, it yields no remainder. Zero is an even
// number because zero divided by two equals zero.

console.log(even_or_odd(2));



//----------------------------------------
function even_or_odd2(number) {
  return number % 2 ? "Odd" : "Even";
}