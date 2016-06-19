console.clear();

/*
----------------------------------------
8 kyu
Are You Playing Banjo?
----------------------------------------

Create a function which answers the question "Are you playing Banjo?". If your 
name starts with the letter "R" or lower case "r", you are playing Banjo!
The function takes a name as its only argument, and returns one of the 
following strings:

C# name + "plays banjo" name + "does not play banjo"
Names given are always valid strings.
*/



//--------------------------------------
function areYouPlayingBanjo (testName) {
  return testName + (testName[0].toLowerCase() === "r" ? " plays" : " does not play") + " banjo";
}

console.log(areYouPlayingBanjo("rikkie"));
console.log(areYouPlayingBanjo("Rick"));
console.log(areYouPlayingBanjo("Peter"));



//--------------------------------------
// regex
function areYouPlayingBanjo2 (testName) {
  if (testName.match(/^[Rr]/)) {
    return testName + " plays banjo";
  } else {
    return testName + " does not play banjo";  
  }
}