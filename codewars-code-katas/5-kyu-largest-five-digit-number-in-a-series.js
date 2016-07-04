console.clear();

/*
-----------------------------------------
5 kyu
Largest 5 digit number in a series
-----------------------------------------

In the following 6 digit number:

283910

91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number 
found within the number given. The number will be passed in as a string 
of only digits. It should return a five digit integer. The number passed 
may be as large as 1000 digits. 

Example

solution('10345670') // 45670
*/



// --------------------------------------
// recursion
function findLargest(digits) {
  if (digits.length <= 5) {return Number(digits);}
  return Math.max(  Number(digits.substr(0,5)), findLargest(digits.substr(1))  );
}

console.log(  findLargest('10345670')  ); // 45670

// substr vs slice vs substring
// What if the Second Argument is Omitted?
// All three methods behave the same in this case.
// Thes select all characters from the start-position to the end of the string
// So slice()==substr()==substring() in this case.
// Tip:
// if you know the index on which you'll stop (but NOT include), Use slice().
// if you know the length of characters to be extracted use substr().