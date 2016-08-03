console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Flatten nested array - Steamroller
-----------------------------------------

Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful terms:
Array.isArray()

flatten([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
flatten([[['a']], [['b']]]) should return ['a', 'b'].
flatten([1, [], [3, [[4]]]]) should return [1, 3, 4].
flatten([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/


// --------------------------------------
// recursion
function flatten(arr) {
  return arr.reduce(function(prev, curr) {
    if (Array.isArray(curr)) {return prev.concat(flatten(curr));}
    else                     {return prev.concat(curr);}
  }, []);
}

console.log(  flatten([1, [2], [3, [[4]]]])  ); // [1, 2, 3, 4]