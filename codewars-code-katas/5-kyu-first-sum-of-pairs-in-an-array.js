console.clear();

/*
-----------------------------------------
5 kyu
First sum of pairs in an array (aka Sum of pairs)
-----------------------------------------

Given a list of integers and a single sum value, 
return the first two values (parse from the left please) in order of appearance 
that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
return [3, 7]

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
return [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([1,2,3,4,1], 5)) // [2,3]

The function should work very efficiently for lists with upwards of 10,000,000 elements.
*/



// --------------------------------------
// clever
function sum_pairs(list, sum){
  var seen = {};
  for (var i = 0; i < list.length; ++i) {
    if (seen[sum - list[i]]) {return [sum - list[i], list[i]]}
    seen[list[i]] = true;
  }
}

console.log(  JSON.stringify(sum_pairs([1,2,3,4,1], 5))  );



// --------------------------------------
// This is very slow for example for lists with upwards of 10,000,000 elements.
function sum_pairs2(list, sum) {
  var listCopy = list.slice();
  var pairIndex = [];
  for (var i = 0; i < listCopy.length - 1; i++) {
    for (var j = i + 1; j < listCopy.length; j++) { 
      if (listCopy[i] + listCopy[j] === sum) {
        pairIndex.push([i, j]);
        listCopy[i] = listCopy[j] = NaN;
      }
    }
  }
  
  if (pairIndex.length === 0) {return undefined;}
  
  pairIndex.sort((a,b) => a[1] - b[1]);
  return [list[pairIndex[0][0]], list[pairIndex[0][1]]]
}