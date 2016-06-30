console.clear();

/*
-----------------------------------------
7 kyu
Find unused digits in a list of numbers (aks Filter unused digits)
-----------------------------------------

Given few numbers, you need to print out the digits that are not being used
withing those numbers.

Example:

unusedDigits(12, 34, 56, 78) // "09"
unusedDigits(2015, 8, 26) // "3479"

Note:
Result string should be sorted
The test case won't pass Integer with leading zero.
*/



// --------------------------------------
function unusedDigits(...args){
  var unused = [];
  var str = args.join(''); // or [...args]
  for (var i = 0; i < 10; i++) {
    if (!(new RegExp(i).test(str))) {
      unused.push(i);
    }
  }
  return unused.join('');
}

console.log(     unusedDigits2(12, 34, 56, 78)     ); // 09



// --------------------------------------
// Clever RegExp
function unusedDigits2(...args){
  return '0123456789'.replace(new RegExp('[' + args.join('') + ']', 'g'), '');
}