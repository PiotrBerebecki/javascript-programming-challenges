console.clear();

/*
-----------------------------------------
5 kyu
RGB To Hex Conversion
-----------------------------------------

Write an rgb() function so that passing in RGB decimal values will result 
in a hexadecimal representation being returned. The valid decimal values 
for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that 
range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(0,0,0) // returns 000000
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(148, 0, 211) // returns 9400D3
*/



// --------------------------------------
function rgb(r,g,b) {
  return toHex(r) + toHex(g) + toHex(b);
  
  function toHex(num) {
    if (num > 255) {return 'FF';}
    if (num < 0) {return '00';}
    return ('0' + num.toString(16)).substr(-2).toUpperCase();
  }
}

console.log(  rgb(0,0,0)  ); // 000000

// Negative value in slice selects characters starting from the end of string,
// e.g. ('abc').slice(-2) // returns 'bc'



// --------------------------------------
// Functional programming
const rgb2 = (...colors) =>
  colors.map(valid).map(hex).map(pad).join("");
  
const valid = n => {
  if (n <= 0) {return 0;}
  else if (n >= 255) {return 255;}
  else {return Math.round(n);}
};

const hex = n => {
  var letters = "0123456789ABCDEF", alpha = [];
  
  while (n !== 0) {
    alpha.unshift(n % 16);
    n = Math.floor(n / 16);
  }
  
  return alpha.map(x => letters[x]).join("");
};

const pad = s => {
  if (s.length === 0) {return "00";}
  else if (s.length === 1) {return "0" + s;}
  else {return s;}
};