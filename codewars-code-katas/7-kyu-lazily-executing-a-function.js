console.clear();

/*
-----------------------------------------
7 kyu
Lazily executing a function
-----------------------------------------

Deferring a function execution can sometimes 
save a lot of execution time in our programs 
by postponing the execution to the latest 
possible instant of time.

Write a method make_lazy that takes in a 
function and the arguments 
to the function and returns another function 
which when invoked, returns 
the result of the original function invoked 
with the supplied arguments.

For example:
Given a function add

function add (a, b) {
  return a + b;
}

One could make it lazy as:

var lazy_value = make_lazy(add, 2, 3);

The expression does not get evaluated at the moment, 
but only when you invoke lazy_value as:

lazy_value() => 5

The above invokation then performs the sum.

Please note: The functions that are passed to 
make_lazy may take one or more arguments 
and the number of arguments is not fixed.
*/



// --------------------------------------
function add (a, b) {
  return a + b;
}

function make_lazy(operation, ...args) {
  return function() {
    return operation(...args);
  };
}

var lazy_value = make_lazy(add, 2, 3);

console.log(     lazy_value()     ); // 5