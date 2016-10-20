console.clear();

/*
-----------------------------------------
4 kyu Find the roots of a Quadratic Equation - Easy Version
-----------------------------------------

When provided with a quadratic equation, Find its roots. For example:

roots("-X²+x+4=-2") // [-2,3];
roots("5X²+x+100=0") // "No real roots exist!"
roots("X²+23x+56=90") // [-24.39,1.39]

If the result contains multiple digits after decimal point round them to 2 fixed places. If no real roots exist, then return "No real roots exist!" and the final resulted should be sorted from lowest to highest.
*/


function roots(e) {
 
  function parseNumber(string) {
    if (string === '-') {
      return -1;
    } else if (string === '' || string === '+') {
      return 1;
    } else {
      return Number(string);
    }
  }
    
  var arr = e.split(/(\+|-|X|x|=)/);

  var a = parseNumber(arr.slice(0, arr.indexOf('X')).join(''));  
  var b = parseNumber(arr.slice(arr.indexOf('x')-2, arr.indexOf('x')).join(''));
  var c = parseNumber(arr.slice(arr.indexOf('=')-2, arr.indexOf('=')).join('')) - 
            Number(arr.slice(arr.indexOf('=')+1).join(''));

  var d = b * b - (4 * a * c);
    
  if (d < 0) { 
    var e = Math.sqrt(-d);
    var isNegative = true;
  } else { 
    var e = Math.sqrt(d);
    var isNegative = false;
  }

  var  f = -b / (2 * a);
  var  g = e / (2 * a);
  
  if (isNegative) {
    return 'No real roots exist!'
  } else {
    return [Number((f + g).toFixed(2)), Number((f - g).toFixed(2))].sort((a,b) => a-b);
  }
}

console.log(roots("-X²+x+4=-2"))