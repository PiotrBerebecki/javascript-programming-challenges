console.clear();

/*
-----------------------------------------
8 kyu
Add if numbers (aka Fix the Bugs - Syntax)
-----------------------------------------

Given two parameters, return
- false if either a or b (or both) are not numbers
- a % b plus b % a if both arguments are numbers
You may assume the following:
If a and b are both numbers, neither of a or b will be 0.
*/



// --------------------------------------
function myFirstKata(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}

console.log(      myFirstKata(5, 8)     ); // 8



// --------------------------------------
// Less syntax
function myFirstKata2(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number")
    return false;
  else
    return a % b + b % a;
}