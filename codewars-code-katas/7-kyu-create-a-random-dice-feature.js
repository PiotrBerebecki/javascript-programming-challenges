console.clear();

/*
-----------------------------------------
7 kyu
Create a random dice feature (aka Die rolling)
-----------------------------------------

Build a basic die feature, where you will get a range in the form (min, max) 
- both included - and return a random number in the inclusive range.

Props if you don't use your language's random library!

dice(3, 5); // returns a value that can be 3, 4, 5
*/



// --------------------------------------
function dice(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

console.log(  dice(3,5)  ); // returns randomly 3,4,5