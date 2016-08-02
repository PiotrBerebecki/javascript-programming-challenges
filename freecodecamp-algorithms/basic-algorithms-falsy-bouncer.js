console.clear();

/*
-----------------------------------------
Basic Algorithms - Falsy Bouncer
-----------------------------------------

Remove all falsy values from an array.

The five falsy values in JavaScript as follows:

false, null, 0, '', undefined, NaN.

bouncer([7, 'ate', '', false, 9]) should return [7, 'ate', 9].
bouncer(['a', 'b', 'c']) should return ['a', 'b', 'c'].
bouncer([false, null, 0, NaN, undefined, '']) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/



// --------------------------------------
// filter, Boolean
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(  bouncer2([7, 'ate', '', false, 9])  );
// console.log(  bouncer([false, null, 0, NaN, undefined, ''])  );
// console.log(  bouncer([1, null, NaN, 2, undefined])  );



// --------------------------------------
// As above
function bouncer2(arr) {
  return arr.filter(function(element) {
    return Boolean(element);
  });
}