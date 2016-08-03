console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Diff Two Arrays
-----------------------------------------

Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays.

Example
diffArray([1, 2, 3], [1, 3, 5])    // -> [2, 5]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])    // -> ["piglet", 4].

Here are some helpful methods:
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/



// --------------------------------------
// declarative
function diffArray(arr1, arr2) {  
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(
      arr2.filter(el => !arr1.includes(el))
    );
}

console.log(  diffArray([1, 2, 3], [1, 3, 5])  ); //  [2, 5]



// --------------------------------------
// imperative
function diffArray2(arr1, arr2) {
  var newArr = [];
  
  arr1.forEach(function(el) { 
    if ( !(arr2.includes(el)) ) {
      newArr.push(el);
    } 
  });
  
  arr2.forEach(function(el) { 
    if ( !(arr1.includes(el)) ) {
      newArr.push(el);
    } 
  });

  return newArr;
}



// --------------------------------------
// Using includes() method
function diffArray3(arr1, arr2) {  
  var uniquesArr1 = arr1.filter(function(el) {
    if (!arr2.includes(el)) {
      return el;
    }
  });
  var uniquesArr2 = arr2.filter(function(el) {
    if (!arr1.includes(el)) {
      return el;
    } 
  });
  return uniquesArr1.concat(uniquesArr2);
}



// --------------------------------------
function diffArray4(arr1, arr2) {  
  var uniquesArr1 = arr1.filter(function(el) {
    if (arr2.indexOf(el) === -1) {
      return el;
    }
  });
  var uniquesArr2 = arr2.filter(function(el) {
    if (arr1.indexOf(el) === -1) {
      return el;
    } 
  });
  return uniquesArr1.concat(uniquesArr2);
}



// --------------------------------------
// Same as above but additionally straightaway removes elements from arr2 
// if they are present in arr1. This helps to avoid unnecessary checks.
function diffArray5(arr1, arr2) {  
  var uniquesArr1 = arr1.filter(function(el) {
    if (arr2.indexOf(el) === -1) {
      return el;
    } else {
      arr2.splice(arr2.indexOf(el),1);
    }
  });
  var uniquesArr2 = arr2.filter(function(el) {
    if (arr1.indexOf(el) === -1) {
      return el;
    } 
  });
  return uniquesArr1.concat(uniquesArr2);
}