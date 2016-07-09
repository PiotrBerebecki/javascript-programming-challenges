console.clear();

/*
-----------------------------------------
5 kyu
Least Common Multiple
-----------------------------------------

Write a function that calculates the least common multiple of 
its arguments; each argument is assumed to be a non-negative integer.

lcm(2,5) // 10
lcm(2,3,4) // 12
lcm(9) // 9
*/



// --------------------------------------
function lcm(...args) {   
  return args.reduce(function(prev, curr) {
    return (prev * curr) / gcd(prev, curr);
  });

  function gcd(x, y) {   // Implements the Euclidean Algorithm
    if (y === 0) {return x;}
    return gcd(y, x % y);
  }
}

console.log(  lcm(2,5)  ); // 10
// console.log(  lcm(2,3,4)  ); // 12

// forrmula for least common multiple
// lcm(a,b) =  (a*b) / gcd(a,b)