console.clear();

/*
-----------------------------------------
6 kyu
Sum of Digits and Digital Root
-----------------------------------------

A digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has two digits, 
continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
*/



// --------------------------------------
function digital_root(n) {
  var sum = 
     String(n)
    .split('')
    .map(Number)
    .reduce((prev,curr) => prev + curr, 0);
  return sum > 9 ? digital_root(sum) : sum;
}

// console.log(  digital_root(16)  ); // 7
console.log(  digital_root(29)  ); // 2




// --------------------------------------
// Clever
function digital_root2(n) {
  return (n - 1) % 9 + 1;
}