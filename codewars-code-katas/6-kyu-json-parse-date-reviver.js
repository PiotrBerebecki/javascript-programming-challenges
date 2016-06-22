console.clear();

/*
-----------------------------------------
6 kyu
JSON.parse Date Reviver
-----------------------------------------

Write the JSON_Date_reviver() function to return a real Date object
when the value passed in is a date string.

If it is not a "date string", however, the original value should 
be returned as-is.

Examples

"1986-12-24T03:49:25.419Z"
should return
Wed Dec 24 1986 03:49:25 GMT+0000 (GMT Standard Time)

"+017132-01-09T02:18:42.098Z"
should return
Sat Jan 09 17132 02:18:42 GMT+0000 (GMT Standard Time)
*/



// --------------------------------------
function JSON_Date_reviver(value) {
  var d = new Date(value);
  return typeof value == 'string' && d != 'Invalid Date' ? d : value;
}

console.log(  JSON_Date_reviver("1986-12-24T03:49:25.419Z")  );
//  Wed Dec 24 1986 03:49:25 GMT+0000 (GMT Standard Time)



// --------------------------------------
// Not related - function that converts epoch to real date
function JSON_Date_reviver2(value) {
  return new Date(value);
}