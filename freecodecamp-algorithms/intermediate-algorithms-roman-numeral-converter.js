console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Roman numeral converter
-----------------------------------------

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Example:
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(44) should return "XLIV".
convertToRoman(500) should return "D"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX" 
*/



var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];



// --------------------------------------
function convertToRoman(num) {
  var romanNumber = '';
  for (var i = 0; i < romanMatrix.length; i++) {
    while (num >= romanMatrix[i][0]) {
      romanNumber += romanMatrix[i][1];
      num -= romanMatrix[i][0];
    }
  }
  return romanNumber;
}

console.log(  convertToRoman(14)  );  // XIV 



// --------------------------------------
// recursion
function convertToRoman2(num) {
  if (num === 0) {return '';}
  
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman2(num - romanMatrix[i][0]);
    }
  }
}