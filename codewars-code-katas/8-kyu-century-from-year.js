console.clear();

/*
-----------------------------------------
8 kyu
Century from year
-----------------------------------------

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task:
Given a year, return the century it is in.
*/



// --------------------------------------
const getCentury = year => (
  Math.ceil(year / 100)
);

console.log(getCentury(1)); // 1
console.log(getCentury(99)); // 1
console.log(getCentury(100)); // 1
console.log(getCentury(101)); // 2
