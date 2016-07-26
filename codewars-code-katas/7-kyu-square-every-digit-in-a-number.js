console.clear();

/*
-----------------------------------------
7 kyu Square every digit in a number
-----------------------------------------

Square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/



// --------------------------------------
function squareDigits(num){
  return Number(num.toString().split('').map(el => el * el).join('')); 
}

console.log(  squareDigits(9119)  );

// Coercion - Any mathematical operator except the concatenation/addition operator 
// will force type-conversion so
// '2' * '4' = 8



// --------------------------------------
function squareDigits2(num){
  return Number(('' + num).split('').map(el => el * el).join(''));
}