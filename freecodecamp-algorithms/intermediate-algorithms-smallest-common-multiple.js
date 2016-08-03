console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Smallest Common Multiple
-----------------------------------------

Find the smallest common multiple of the provided parameters 
that can be evenly divided by both, as well as by all sequential 
numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily 
be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
that is evenly divisible by all numbers between 1 and 3.

smallestCommons([2, 3]) should return 6.
smallestCommons([2, 4]) should return 12.
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
*/



// --------------------------------------
function smallestCommons(arr) {
  var min, max;
  if (arr[0] < arr[1]) {min = arr[0]; max = arr[1];}
  else                 {min = arr[1]; max = arr[0];}

  var range = [];
  for (var i = max; i >= min; i--) {
    range.push(i);
  }
  
  var lcm = range[0];
  var GCD;
  
  for (i = 1; i < range.length; i++) {
    GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(bigger, smaller) {  // Implement the Euclidean Algorithm
    if (smaller === 0) {return bigger;}
    else               {return gcd(smaller, bigger%smaller);}
  }
}

console.log(  smallestCommons([2,4])  );



// --------------------------------------
// As above but using reduce() instead of for loop
function smallestCommons2(arr) {
  var min, max;
  if (arr[0] < arr[1]) {min = arr[0]; max = arr[1];}
  else                 {min = arr[1]; max = arr[0];}

  var range = [];
  for (var i = max; i >= min; i--) {
    range.push(i);
  }

  var lcm = range[0];
  var gcdPrevCurr;

  return range.reduce(function(prev, curr) {
    gcdPrevCurr = gcd(prev, curr);
    return (prev * curr) / gcdPrevCurr;
    });

  function gcd(bigger, smaller) {  // Implement the Euclidean Algorithm
    if (smaller === 0) {return bigger;}
    else               {return gcd(smaller, bigger%smaller);}
  }
}