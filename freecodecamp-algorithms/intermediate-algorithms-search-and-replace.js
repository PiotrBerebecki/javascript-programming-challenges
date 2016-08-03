console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Search and replace
-----------------------------------------

Perform a search and replace on the sentence using the arguments 
provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Example:
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
should return "He is Sitting on the couch".

NOTE: Preserve the capital case of the original word (if present) 
when you are replacing it. For example if you mean to replace the word 
"Book" with the word "dog", it should be replaced as "Dog".

Here are some helpful methods:
Array.splice()
String.replace()
Array.join()
*/



// --------------------------------------
function myReplace(str, before, after) {
  if (before.charCodeAt(0) <= 90) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(   myReplace("He is Sleeping on the couch", "Sleeping", "sitting")   );



// --------------------------------------
function myReplace2(str, before, after) {
  return str.replace(before, function(match) {
    if (match[0] === match[0].toUpperCase()) {return after[0].toUpperCase() + after.slice(1);}
    else {return after;}
  });
}



// --------------------------------------
function myReplace3(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}



// --------------------------------------
function myReplace4(str, before, after) {
  // Create a regular expression object
  var patt = new RegExp(before, 'gi');
  // Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Replace the original word with new one
  var newStr = str.replace(patt, after);

 return newStr;
}