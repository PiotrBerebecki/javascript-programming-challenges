console.clear();

/*
-----------------------------------------
4 kyu
Print 'Hello World!' without using stings or numbers
(aka Hello W... wait what?)
-----------------------------------------

In order to stop too much communication from happening,
your overlords declare that you are no longer allowed 
to use certain functionality in your code!

Disallowed functionality:

Strings
Numbers
Regular Expressions
Functions named "Hello", "World", "HelloWorld" or anything similar.
Object keys named "Hello", "World", "HelloWorld" or anything similar.

Without using the above, output the string "Hello World!"
to prove that there is always a way.
*/



// --------------------------------------
var helloWorld = function() {
  var one = Math.PI / Math.PI;
  var two = one + one;
  var four = two + two;
  var eight = four + four;
  var sixteen = eight + eight;
  var thirtytwo = sixteen + sixteen;
  var sixtyfour = thirtytwo + thirtytwo;
  var space = thirtytwo;
  var excl = thirtytwo + one;
  var H = sixtyfour + eight;
  var e = sixtyfour + thirtytwo + four + one;
  var l = sixtyfour + thirtytwo + eight + four;
  var o = sixtyfour + thirtytwo + sixteen - one;
  var W = sixtyfour + sixteen + eight - one;
  var r = sixtyfour + thirtytwo + sixteen + two;
  var d = sixtyfour + thirtytwo + four;
  return [H, e, l, l, o, space, W, o, r, l, d, excl]
    .map(function(el) {return String.fromCharCode(el);})
    .join([]);
}

console.log(  helloWorld()  ); // Hello World!

// This would also evaluate to 1
// +true