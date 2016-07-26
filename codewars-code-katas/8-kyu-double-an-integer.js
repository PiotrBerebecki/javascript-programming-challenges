console.clear();

/*
-----------------------------------------
8 kyu
Double an integer (aka You Can't Code Under Pressure #1)
-----------------------------------------

Double and integer and return it.
*/



// --------------------------------------
function doubleInteger(i) {
  return i << 1;
}

console.log(  doubleInteger(5)  );

// a << b is the bitwise left shift operator


// --------------------------------------
function doubleInteger2(i) {
  return i * 2;
}