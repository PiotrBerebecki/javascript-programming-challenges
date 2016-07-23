console.clear();

/*
-----------------------------------------
5 kyu
Convert A Hex String To RGB
-----------------------------------------

Implement a hexStringToRGB() function that meets these requirements:

- Accepts a case-insensitive hexadecimal color string 
  as its parameter (ex. "#FF9933" or "#ff9933")

- Returns an object with the structure {r:255, g:153, b:51} 
  where r, g, and b range from 0 through 255

Note, your implementation does not need to support the shorthand 
form of hexadecimal notation (ie "#FFF").

Example

hexStringToRGB("#FF9933"); // returns {r:255, g:153, b:51}
*/



// --------------------------------------
function hexStringToRGB(str) {
  var rgbObj = {r: 0, g: 0, b: 0};
  var hexArr = str.match(/\w{2}/g);
  Object.keys(rgbObj).forEach(function(el, ind) {
    rgbObj[el] = parseInt(hexArr[ind], 16);
  })
  return rgbObj;
}

console.log(  hexStringToRGB("#FF00FF")  ); // {r:255, g:0, b:255}



// --------------------------------------
function hexStringToRGB2(str) {
  return {
    r: parseInt(str.slice(1,3), 16),
    g: parseInt(str.slice(3,5), 16),
    b: parseInt(str.slice(5,7), 16)
  };  
}