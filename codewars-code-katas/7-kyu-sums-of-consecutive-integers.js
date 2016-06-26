console.clear();

/*
-----------------------------------------
7 kyu
Sums of consecutive integers
-----------------------------------------

If the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

e.g.
position(4, 14, 3) => 5

position(x, y, n)
x number of consecutive integers
y sum of consecutive integers
n position of requested integer
return consecutive integer at requested position

Given the number of consecutive integers and the total of the integers,
return the consecutive integer at the requested position.
*/



// --------------------------------------
function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}
// y / x =  average
// (x - 1) / 2  = halfrange
// average - halfrange = first number
// e.g.
// position(3, 6, 0)
// average = 2
// halfrange = 1
// first number = 1
// then position at 0 is 1

console.log(  position(4, 14, 3) ); // 5