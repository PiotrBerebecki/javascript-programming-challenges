console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Boo who
-----------------------------------------

Check if a value is classified as a boolean primitive.
Return true or false.
Boolean primitives are true and false.

Here are some helpful tems:
Boolean Objects

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ 'a': 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho('a') should return false.
booWho('true') should return false.
booWho('false') should return false.
*/



// --------------------------------------
function booWho(bool) {
  return typeof bool === 'boolean';
}

console.log(  booWho(true)  );



// --------------------------------------
// cheeky
function booWho2(bool) {
  var str = JSON.stringify(bool);
  return str === 'true' || str === 'false';
}