console.clear();

/*
-----------------------------------------
5 kyu
Calculating with Functions
-----------------------------------------

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

The most outer function represents the left operand,
the most inner function represents the right operand
*/



// --------------------------------------
// closure, closures
var n = function(digit) {
  return function(operation) {
    return operation ? operation(digit) : digit;
  }
};

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(right) {
  return function(left) {
    return left + right;
  };
}
function minus(right) {
  return function(left) {
    return left - right;
  };
}
function times(right) {
  return function(left) {
    return left * right;
  };
}
function dividedBy(right) {
  return function(left) {
    return left / right;
  };
}

console.log(  four(plus(nine()))  ); // 13