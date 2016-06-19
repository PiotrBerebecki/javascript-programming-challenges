console.clear();

/*
----------------------------------------
8 kyu
Convert number to reversed array of digits
----------------------------------------
Given a non-negative integer, return an array containing a list of independent digits in reverse order.
Example:
348597 => [7,9,5,8,4,3]
*/



//--------------------------------------
function digitize(n){
  return String(n).split('').map(Number).reverse();
  // return n.toString().split('').map(Number).reverse();
  // return (n + '').split('').map(Number).reverse();
}

console.log(digitize2(348597));



// --------------------------------------
function digitize2(n) {
  var initialArray = ('' + n).split('');
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(), 10);
  }
  return reversedArray;
}