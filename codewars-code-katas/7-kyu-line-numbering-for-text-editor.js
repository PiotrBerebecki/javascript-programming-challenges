console.clear()

/*
-----------------------------------------
7 kyu
Line numbering for text editor (aka BetaTesting 1-2-3)
-----------------------------------------

Your team is writing a fancy new text editor and you've been tasked 
with implementing the line numbering.

Write a function which takes a list of strings and returns each line 
prepended by the correct number.

Examples
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/



// --------------------------------------
var number = function(array) {
  return array.map(function(el, ind) {
    return (ind + 1) + ': ' +  el;
  })
}

console.log(  JSON.stringify(number(["a", "b", "c"]))  );
// ["1: a","2: b","3: c"]



// --------------------------------------
// one liner as above
let number2 = a => a.map((v,i) => `${++i}: ${v}`);



// --------------------------------------                 
var number3 = function(array) {
  var prefix = 0
  return array.map(function(el) {
    return ++prefix + ': ' +  el
  })
}