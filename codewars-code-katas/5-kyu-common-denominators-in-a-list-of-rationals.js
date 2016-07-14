console.clear();

/*
-----------------------------------------
5 kyu
Common denominators in a list of rationals (aka Common Denominators)
-----------------------------------------

 You will have a list of rationals in the form

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]

where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D)

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

Example :

[ [1, 2], [1, 3], [1, 4] ] produces the string (6,12)(4,12)(3,12)
*/



// --------------------------------------
function convertFrac(list) {
  
  if (list.length === 0) {return '';}
  
  var firsts = [];
  var seconds = [];
  
  for (var i = 0; i < list.length; i++) {
    firsts.push(list[i][0]);
    seconds.push(list[i][1]);
  }
    
  var lcm = getLCM(seconds);
  
  var resultArr = [];
  
  for (var j = 0; j < firsts.length; j++) {
    resultArr.push([lcm * firsts[j] / seconds[j], lcm]);
  }
  
  return '(' + resultArr.join(')(') + ')';

  function getLCM(arr) {
    return arr.reduce(function(prev, curr) {
      return (prev * curr) / getGCD(prev, curr);
    });
  }
  
  function getGCD(x, y) {
    if (y === 0) {
      return x;
    } else {
      return getGCD(y, x % y);
    }
  } 
  
}

console.log(  JSON.stringify(convertFrac([[1, 2], [1, 3], [1, 4]]))  ); // '(6,12)(4,12)(3,12)'