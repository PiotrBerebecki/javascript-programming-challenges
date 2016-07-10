console.clear();

/*
-----------------------------------------
7 kyu
Reverse a string (aks Reversed Strings)
-----------------------------------------

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/



// --------------------------------------
function reverseString(str){
  return str.split('').reverse().join('')
}

// console.log(  reverseString('world')  ); // 'dlrow'
// console.log(  reverseString('abcb')  ); // 'bcba'



// --------------------------------------
// for loop
function reverseString2(str){
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    console.log(i)
    reversed += str[i]
  }
  return reversed;
}



// --------------------------------------
// recursive
function reverseString3(str){
  if (str === '') {return '';}
  return str[str.length-1] + reverseString3(str.slice(0,-1));
}