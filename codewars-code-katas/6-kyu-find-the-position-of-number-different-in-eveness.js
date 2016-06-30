console.clear();

/*
-----------------------------------------
6 kyu
Find the position of number different in eveness (aka IQ Test)
-----------------------------------------

Given a string of numbers find the number
that is different in evenness, 
and return a position of this number.

For this task indexes of the elements start from 1 (not 0).

Example

iqTest('1 2 3 5 7 9') => 3 // Third number is odd,
                               while the rest are even.

iqTest('1 2 1 1') => 2 // Second number is even,
                            while the rest are odd.
*/



// --------------------------------------
function iqTest(numbers) {
  var sortedByEveness = {even: [], odd: []}
  var arr = numbers.split(' ').map(Number);
  arr.forEach(function(el) {
    if (el % 2 === 0) {
      sortedByEveness.even.push(el);
    } else {
      sortedByEveness.odd.push(el)
    }
  });
  
  if (sortedByEveness.even.length === 1) {
    return arr.indexOf(sortedByEveness.even[0]) + 1;
  } else {
    return arr.indexOf(sortedByEveness.odd[0]) + 1;
  }
}

console.log(     iqTest('1 2 3 5 7 9')      ); // 2



// --------------------------------------
// Clever
function iqTest2(numbers){
  numbers=numbers.split(' ').map(function(x){return parseInt(x, 10)%2;});
  if (numbers[0]+numbers[1]+numbers[2]==3 || numbers[0]+numbers[1]+numbers[2]==2) return numbers.indexOf(0)+1;
  else return numbers.indexOf(1)+1;
}
/*
First, split and parse the string, to turn everything
into either 0 (if it is even) or 1 (if it is odd).
Then, if the first three numbers sum up to 3 or 2 then
we know that odd odd numbers are in majority and hence
we return indexOf the even number (+1 as required.)
*/