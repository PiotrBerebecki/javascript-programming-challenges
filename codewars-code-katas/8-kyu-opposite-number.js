console.clear();

/*
----------------------------------------
8 kyu
Opposite number
----------------------------------------

Very simple, given a number, find its opposite.

Examples:
1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?
*/



//--------------------------------------
const opposite = number => -number;

console.log(opposite(-17));

/*
The syntax for arrow functions comes in many flavors depending upon what you are
trying to accomplish. All variations begin with function arguments, followed by
the arrow, followed by the body of the function. Both the arguments and the body
can take different forms depending on usage. For example, the following arrow
function takes a single argument and simply returns it:

var reflect = value => value;

effectively equivalent to:

var reflect = function(value) {
    return value;
};

Also, 
The const declaration creates a read-only reference to a value. It does not mean
the value it holds is immutable, just that the variable identifier (opposite)
cannot be reassigned.
*/



//--------------------------------------
function opposite2(number) {
  return -number;
}