console.clear();

/*
-----------------------------------------
7 kyu
You're a square
-----------------------------------------

Given an integral number, determine if it's a square number.

E.g.

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
*/



// --------------------------------------
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(  isSquare(25)  );

/*
=== is faster than ==
The difference is that === checks equivalence for both value and type,
while == checks value only and may perform type conversions on the fly.
In general you should not use == (or !=).
*/