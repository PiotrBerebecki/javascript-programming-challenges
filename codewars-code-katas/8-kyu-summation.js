console.clear();

/*
-----------------------------------------
8 kyu
Summation
-----------------------------------------

Write a program that finds the summation of every number between 1 and num. The
number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/



//----------------------------------------
function summation(num) {
  return (num) ? num + summation1(num - 1) : num;
}



//----------------------------------------
// alternative
function summation2(num) {
  if (num) {
    return num + summation2(num - 1);
  } else {
    return num;
  }
}



//----------------------------------------
// mathematical
const summation3 = num => num * (num + 1) / 2;