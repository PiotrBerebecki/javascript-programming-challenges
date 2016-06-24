console.clear();

/*
-----------------------------------------
8 kyu
Create array within range (aka Unfinished Loop - Bug Fixing #1)
-----------------------------------------

crete the following
createArray(4)   // => [1,2,3,4];
createArray(6)   // => [1,2,3,4,5,6];
*/



// --------------------------------------
function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}

console.log(  createArray(4)  ); // [1,2,3,4]



// --------------------------------------
// one-liner using spread operator and arrow functions
const createArray2 = n => Array(...Array(n)).map((v, i) => i + 1);