console.clear();
/*
----------------------------------------
8 kyu
Count by X
----------------------------------------

Create a function with two arguments that will return a list of length (n) with
multiples of (x). Assume both the given number and the number of times to count
will be positive numbers greater than 0. Return the results as an array (or list
in Python or Haskell.)

Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/



//-----------------------------------------
function countBy(x, n) {
	var arr = [];
	for (var i = 1; i <= n; i++) {
		arr.push(i * x);
	}
	return arr;
}

console.log(  countBy(1,10)  );



//----------------------------------------
function countBy2(x, n) {
  var arr = [];
	for (var i = x; i <= x * n; i += x) {
		arr.push(i);
	}
  return arr;
}