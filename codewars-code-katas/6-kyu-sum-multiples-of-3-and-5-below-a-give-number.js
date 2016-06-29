console.clear();

/*
-----------------------------------------
6 kyu
Sum multiples of 3 and 5 below a give number
-----------------------------------------

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the number passed in. 
*/



// --------------------------------------
function solution(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(  solution(10)  ); // 23



// --------------------------------------
// Experimenting
function solution2(number) {
  var multiples = [];
  for (var i = 3; i < number; i += 3) {
    multiples.push(i);
  }
  for (var j = 5; j < number; j += 5) {
    multiples.push(j);
  }
  return multiples.filter(function(item, i) {
    if (i === multiples.indexOf(item)) {
      return item;
    }
  }).reduce((a,b) => a + b, 0);
}