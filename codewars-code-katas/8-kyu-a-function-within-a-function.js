console.clear();

/*
----------------------------------------
8 kyu
A function within a function
----------------------------------------

Given an input n, write a function always that returns a function which 
returns n. Ruby should return a lambda or a proc.

var three = always(3);
three(); // returns 3
*/



//--------------------------------------
function always(n) {
  return function() {
    return n;
  }
}

var two = always(2);
console.log(typeof always(2));
console.log(always(2));
console.log(two(2));



//--------------------------------------
function always2(n) {
  return function() { return n };
}



// ----------------
function always3(n) {
  function alwaysOther3() {
    return n;
  };
  return alwaysOther3();
}