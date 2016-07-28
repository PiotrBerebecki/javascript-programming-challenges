console.clear();

/*
-----------------------------------------
5 kyu
Deep comparison of objects
-----------------------------------------

Comparing objects is not an easy task in JavaScript. The comparison operator 
only returns true if both variables point to the same object, that's why two 
objects with the same properties and values are different for JavaScript, like this:

var a = { name: 'Joe' };
var b = { name: 'Joe' };
a == b;  //-> false

Sometimes it's really useful to detect when two objects have the same values.

Your task is to develop the deepCompare function to test if two objects have 
the same properties and values. Remember that an object can contain other objects. 
The function should also be able to correctly compare simple values, like strings 
and numbers (without using type cohersion, please).

To make things simpler, it will only have to deal with simple values and objects 
and arrays containing strings, booleans and numbers, without taking into account 
regular expressiones, dates and functions.

Make sure that the function works for null:
deepCompare({name: 'blah'}, null); // false
*/



// --------------------------------------
function deepCompare(o1, o2) {  
  if (o1 === o2) {return true;}
  
  if ( !(o1 instanceof Object) || !(o2 instanceof Object) ) {return false;}
  
  if (Object.keys(o1).length !== Object.keys(o2).length) {return false;}

  for (var i in o1) {
    if ( !(i in o2) || !deepCompare(o1[i], o2[i]) ) {return false;}
  }
  
  for (var j in o2) {
    if (!(j in o1)) {return false;}
  }
  
  return true;
}

console.log(  deepCompare({name: 'Joe'}, {name: 'Joe', name2: 'Joey',})  ); // true

// return null instanceof Object;   // => false
// but
// return typeof null === 'object'; // => true