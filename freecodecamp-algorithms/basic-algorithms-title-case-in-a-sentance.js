console.clear();

/*

-----------------------------------------
Basic Algorithms - Title case in a sentance
-----------------------------------------

titleCase("I'm a little tea pot") // "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // "Here Is My Handle Here Is My Spout".
*/



// --------------------------------------
// replace
function titleCase(str) {
  return str.toLowerCase().replace(/(\s|^)([a-z])/g, (all, delim, letter) => delim + letter.toUpperCase());
}

console.log(  titleCase("I'm a little tea pot")  ); // I'm A Little Tea Pot



// --------------------------------------
// As above but applying upper case to the whole match (including delimiter)
function titleCase2(str) {
  return str.toLowerCase().replace(/(\s|^)[a-z]/g, (match) => match.toUpperCase());
}



// --------------------------------------
// split and map
function titleCase3(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ');
}



// --------------------------------------
// As above
function titleCase4(str) {
  var strArr = str.toLowerCase().split(' ');
  var strArrUpper = strArr.map(function(word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return strArrUpper.join(' ');
}



// --------------------------------------
// slice instead of charAt
function titleCase5(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word.slice(0,1), word.slice(0,1).toUpperCase()))
    .join(' ');
}

// In str.slice(start, stop) or str.substr(start, stop) if stop is omitted, 
// then characters to the end of the string will be extracted.
// str.substring(start, stop) alwyas needs two paramenters.