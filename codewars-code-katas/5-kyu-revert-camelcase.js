console.clear();

/*
-----------------------------------------
5 kyu
Revert camelCase (aka Break camelCase)
-----------------------------------------

Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
revertCamel('camelCasingISee') // 'camel Casing I See'
*/



// --------------------------------------
// regex
const revertCamel = str => str.replace(/([A-Z])/g, ' $1');

// console.log(  revertCamel('camelCasingISee')  ); 'camel Casing I See'



// --------------------------------------
// without the capture group
const revertCamel2 = str => str.replace(/[A-Z]/g, ' $&');



// --------------------------------------
const revertCamel3 = str => str.split(/(?=[A-Z])/).join(' ');