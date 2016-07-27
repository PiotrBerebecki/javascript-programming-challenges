console.clear();

/*
-----------------------------------------
5 kyu
Sort an array without using the JS sort method (aka Custom sort function)
-----------------------------------------

Complete the sort function so that it returns the items passed into it in numerical order.
Conveniently enough, the standard array sort method cannot be used so that you are forced to create your own.

Example:

sort([1,3,2]) // should return [1,2,3]
*/



// --------------------------------------
function sort(arr) {  
  var arrLen = arr.length;  
  var min;
  var temp;
  
  for (var i = 0; i < arrLen - 1; i++) {     
    min = i;    
    for (var j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }   
    if (min != i) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }    
  }   
  return arr;   
}

console.log(  JSON.stringify(sort([1,3,2]))  ); // [1,2,3]

// Selection sort has been used