console.clear()

/*
-----------------------------------------
4 kyu
Roman numerals to arabic (aka Roman Numerals Decoder)
-----------------------------------------

Create a function that takes a Roman numeral as its argument and 
returns its value as a numeric decimal integer. You don't need to 
validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit
of the number to be encoded separately, starting with the leftmost 
digit and skipping any 0s. So 1990 is rendered "MCMXC" 
(1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" 
(2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
uses each letter in descending order.

toArabic('XXI'); // should return 21
*/



// --------------------------------------
function toArabic(roman) {
  
  var romanNumerals = [
    ['CM', 900],
    ['M', 1000],
    ['CD', 400],
    ['D', 500],
    ['XC', 90],
    ['XC', 90],
    ['C', 100],
    ['XL', 40],
    ['L', 50],
    ['IX', 9],
    ['X', 10],
    ['IV', 4],
    ['V', 5],
    ['I', 1]
  ];
  
  var arabicNumber = 0;
  for (var i = 0; i < romanNumerals.length; i++) {
    var searched = romanNumerals[i][0];
    var pattern = new RegExp(`${searched}`, 'g');
    var found = roman.match(pattern);
    if (found) {
      arabicNumber += romanNumerals[i][1] * found.length;
      roman = roman.slice(roman.indexOf(searched)+searched.length);
    }
  }
  return arabicNumber;
}

console.log(  toArabic('CMXXIII')  );  // 923