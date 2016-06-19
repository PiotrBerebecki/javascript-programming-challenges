console.clear();

/*
----------------------------------------
8 kyu
Counting sheep
----------------------------------------

Consider an array of sheep where some sheep may be missing from their place. We
need a function that counts the number of sheep present in the array (true means
present).

For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
*/



var sheepArr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];



// -------------------------------------
function countSheep(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
// Calling Boolean on undefined, null, 0, '' and false will returns false. All
// other values will be evaluated to true, even strings e.g. "Bob"

console.log(countSheep(sheepArr));

/*
The filter() method creates an array filled with all array elements that pass
a test (provided as a function).

Example: var ages = [32, 33, 16, 40];

function checkAdult(age) { return age >= 18; }

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

The result will be: 32,33,40
*/



// -------------------------------------
function countSheep2(arrayOfSheep) {
  var stringOfSheep = arrayOfSheep.toString();
  return (stringOfSheep.match(/true/g) || "").length;
}
// default case added to get 0 if the string is empty

/*
convert myArr to string by
var myStr = myArr.toString();
var myStr = String(myArr);
var myStr = myArr + "";
var myStr = JSON.stringify(myArr);
*/