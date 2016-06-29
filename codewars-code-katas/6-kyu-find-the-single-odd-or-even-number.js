console.clear();

/*
-----------------------------------------
6 kyu
Find the single odd or even number (aks Find The Parity Outlier)
-----------------------------------------

You are given an array ( length of at least 3, but could be very large)
containing integers.
The integers in the array are either entirely odd or entirely even
except for a single integer N. 

Write a method that takes the array as an argument and returns N.

For example:
[1, 2, 3]
Should return: 2

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160
*/



// --------------------------------------
function findOutlier(integers) {
  var even = integers.filter(elem => elem % 2 === 0);
  var odd = integers.filter(elem => elem % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
// the problem with the above is that we do filter 2 times

console.log(  findOutlier([1, 2, 3])  ); // 2



// --------------------------------------
// This uses only one filter
function findOutlier2(integers) {
  var even;
  var oddArray = integers.filter(function(elem) {
    if (elem % 2 === 0) {
      even = elem;
    }
    return elem % 2 !== 0;
  });
  return oddArray.length === 1 ? oddArray[0] : even;  
}



// --------------------------------------
// Only one for loop
function findOutlier3(integers) {
  var typeOfNumber = integers.map(isEven3);
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < typeOfNumber.length; i++) {
    if (typeOfNumber[i] === true) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  return evenCount === 1 ? integers[typeOfNumber.indexOf(true)] :
                           integers[typeOfNumber.indexOf(false)];
}

function isEven3(number) {
  return number % 2 === 0;
}