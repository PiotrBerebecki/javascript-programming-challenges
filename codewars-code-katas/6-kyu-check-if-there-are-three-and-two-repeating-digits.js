console.clear();

/*
-----------------------------------------
6 kyu
Check if there are three and two repeating digits (aka Triple trouble)
-----------------------------------------

Write a function

tripledouble(num1,num2)

which takes in numbers num1 and num2 
and returns 1 if there is a straight 
triple of a number at any place in num1 
and also a straight double of the same 
number in num2.

For example:
tripledouble(12221, 1221) == 1  // num 1 has straing triplie 222s and 
                                // num 2 has straight double 22s

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s
                                  // but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

If this isn't the case, return 0
*/



// --------------------------------------
// Using RegExp
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}
// You can check presence of digit in a number using test() method.

// Without the flag /g, the method test() of regular expressions 
// simply checks whether there is a match somewhere (anywhere) in str.

// With the flag /g set, test() returns true as many times 
// as there are matches in the string.
// lastIndex contains the index after the last match.

console.log(     tripledouble(12221, 1221)      ); // 1



// --------------------------------------
// Variation of the above
function tripledouble2(num1, num2) {
  for (let i = 0; i < 10; i++) {
    var tripleTest = new RegExp(`${i}{3}`).test(num1);
    var doubleTest = new RegExp(`${i}{2}`).test(num2);
    
    if (tripleTest && doubleTest) {
      return 1;
    }
  }
  
  return 0;
}



// --------------------------------------
// A bit long
function tripledouble2(num1, num2) {
  var arr1 = num1.toString().split('');
  var triple = [];
  for (var i = 1; i < arr1.length-1; i++) {
    if (arr1[i-1] === arr1[i] && arr1[i] === arr1[i+1]) {
      triple.push(arr1[i]);
    }
  }
  
  var arr2 = num2.toString().split('');
  var double = [];
  for (var j = 0; j < arr2.length-1; j++) {
    if (arr2[j] === arr2[j+1]) {
      double.push(arr2[j]);
    }
  }
  
  if (triple.length > 0 && double.length > 0) {
    for (var k = 0; k < triple.length; k++) {
      for (var l = 0; l < double.length; l++) {
        if (triple[k] === double[l]) {
          return 1;
        }
      }
    }
  }
  
  return 0;
}