console.clear();

/*
-----------------------------------------
4 kyu
Say "Hello my World" with a closure
(aka Say "Hello World" JS Style and say even more!)
-----------------------------------------

Write the definition of the function "say" such that calling this:

say("Hello")("World") // equals "Hello World"

But also take care of the options when you have more or less to say:

say("Hello")("my")("World") // equals "Hello my World"
say("Hello")                // equals "Hello"
*/



// --------------------------------------
function say(word) {
  
  function res(x) {
    return say(word + ' ' + x);
  }
  
  res.toString = function() {
    return word;
  }
  
  say.toString = function() {   // required for Codewars test case
    return '';                  // test(say, '')
  }
  
  return res;
}

console.log(  say('Hello')('my')('World')  ); // function 'Hello my World'

// res is returned each time so you can chain those calls indefinitely.
// Function say basically got "overridden" by res.

// console.log() expects a string. If it doesn't get a string, 
// it will attempt to convert whatever object it receives 
// (and a function is a type of object) into one. If the object 
// has a toString method, then that will be called to perform said conversion.



// --------------------------------------
function say2(word) {
  
  var msg = word;
  
  function res(x) {
    msg = msg + ' ' + x;
    return res;
  }
  
  res.toString = function() {
    return msg;
  }
  
  return res;
  
}

// console.log(  say2('Hello')('my')('World')  ); // function 'Hello my World'



// --------------------------------------
// Based on this kata we can develop a sum function
function sum(a) {
  
  function res(b) {
    return sum(a + b);
  }
  
  res.valueOf = function() {
    return a;
  }
  
  return res;
}

// console.log(  sum(1)(2)(3)  ); // function 6

// if we call the function with 
// console.log(  +sum(1)(2)(3)  );
// then we don't get the 'function' word in the console



// --------------------------------------
function sum2(a) {

  var sum = a;

  function res(b) {
    sum += b;
    return res;
  }

  res.valueOf = function() { 
    return sum;
  }

  return res;
}

// console.log(  sum2(1)(2)(3)  )  // function 6