console.clear();

/*
-----------------------------------------
5 kyu
Find duplicate elements in an array (aka Mess in the Bank)
-----------------------------------------

You will receive an array of strings or numbers and you need to find all duplicate elements
and return then in their original order:

findDuplicates([1, 2, 3, 4, 5, 1]) === [1]

findDuplicates([2, 1, 1, 2, 2]); // Should return [1, 2, 2]. Because 2, 1 are original elements and 1, 2, 2 - are copies

findDuplicates([3, 2, 1, 1, 2, 4, 3, 2]); // Should return [1, 2, 3, 2]. The order of originals - doesn't matter. Elements 3, 2, 1 are originals. And then all elements (skip 4) - are copies: 1, 2, 3, 2 and we should not reorder them.

findDuplicates([1, 2, '1', 4, '1', 1, 'abc']) // ['1', 1]
*/



// --------------------------------------
function findDuplicates(arr) {
  var duplicates = [];
  var seen = {};
  
  arr.forEach(function(el) {
    if      (typeof el === 'string' && !(seen[el + 'str'])) {seen[el + 'str'] = true;}
    else if (typeof el === 'number' && !(seen[el]))         {seen[el] = true;}
    else                                                    {duplicates.push(el);}
  });
  
  return duplicates;
}

// console.log(  findDuplicates([1, 2, 3, 1, 2, 3, 3])  ); // [1, 2, 3, 3]
// console.log(  findDuplicates([1, 2, 3, 1, 4, 3])  ); // [1, 3]
// console.log(  findDuplicates([3, 2, 1, 1, 2, 4, 3, 2])  ); // [1, 2, 3, 2]
// console.log(  findDuplicates([1, 'abc', 1, 'abc'])  );  // [1, 'abc']
// console.log(  findDuplicates([1, '1'])  );  // []
// console.log(  findDuplicates([1, 2, '1', 4, '1', 1, 'abc'])  );  // ['1', 1]