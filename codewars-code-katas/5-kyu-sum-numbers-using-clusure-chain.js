console.clear();

/*
-----------------------------------------
5 kyu
Sum numbers using clusure chain (aka A Chain adding function)
-----------------------------------------

Create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3

We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15

and so on.

A single call should return the number passed in.

add(1) // 1

and we should be able to store the result and reuse it.

var addTwo = add(2);
addTwo // 2
addTwo + 5 // 7
addTwo(3) // 5
addTwo(3)(5) // 10

Keywords: closure
*/



// --------------------------------------
function add(num) {
  var res = function(x) {
    return add(num + x)
  }
  
  res.valueOf = function() {
    return num;
  }
  
  return res;
}

console.log(  add(1)(2)(3)  ); // function 6,  if we call it +add(1)(2)(3) we get only 6

// var addTwo = add2(2)
// console.log(addTwo(3)(5)) // function 10

// If an object is being coerced into a primitive value (boolean, number, string), 
// and contains a method called valueOf, that method is called and the result is 
// used in place of the object.

// For example, if you have this:
// var o = { a: 1 };
// console.log( o + 1 );

// The default action taken by the JS engine would be to turn o into 
// the string "[object Object]", and then add 1 to it, resulting in 
// the string "[object Object]1".

// Now, if we added a method valueOf, like so:

// var o = { a: 1, valueOf: function() { return this.a } };
// console.log( o + 1 );  // returns 2

// Now the JS engine will see that valueOf exists on the object, 
// and call that. In this case, we return the value of a on the object, 
// and the output becomes 2.

// The other part is how we're using it on the returned method here. 
// So, Functions in JavaScript are also objects, and can have properties 
// and methods added to them, just like normal objects.

// What happens in this answer is we return a new, anonymous function that can 
// be used to add the previous value (num) and the new value (x).
// We also add a valueOf method to the anonymous function, which returns the previous value.

// So, if we have code that looks like this:

// var n1 = add(1); // n1 is a Function, but also has a valueOf property
// var n2 = n1(2);  // ditto for n2

// We can coerce the n1 and n2 functions into values by using them in 
// an arithmetic or logical expression, like so:

// console.log( 0 + n1 ) // => 0 + n1.valueOf() => 0 + 1 => 1
// console.log( 0 + n2 ) // => 0 + n2.valueOf() => 0 + (1+2) => 3



// --------------------------------------
function add2(num) {
  var sum = num;
  
  function res(x) {
    sum += x;
    return res;
  }
  
  res.valueOf = function() {
    return sum;
  }
  
  return res;
}