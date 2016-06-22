console.clear();

/*
-----------------------------------------
7 kyu
Credit Card Mask
-----------------------------------------

Write a function maskify, which changes all but the last four characters into '#'
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/



// --------------------------------------
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#')
}
// ?=   vs   ?!   vs   ?:
// ?= matches a suffix but excludes it from capture
// a(?=b) will match the "a" in "ab"
// a(?=b) will match the "a" in "abc".
// a(?!b) will match the "a" in "ac", but not the "a" in "ab".
// a(?:b) will match the "ab" in "abc" and it doesn't create a capturing group
// a(b) would match the "ab" in "abc" and create a capture containing the "b".

console.log(  maskify("4556364607935616")  ); // "############5616"



// --------------------------------------
function maskify2(cc) {
  return cc
      .slice(0,-4)
      .replace(/./g, '#')
    + cc.slice(-4);
}



// --------------------------------------
// with variable
function maskify3(cc) {
  let masked = cc
    .slice(0,-4)
    .replace(/./g, '#');
  return masked + cc.slice(-4);
}



// --------------------------------------
// convert to array and back
function maskify4(cc) {
  let masked = cc
    .split('')
    .slice(0,-4)
    .map(item => '#')
    .join('');
  return masked + cc.slice(-4);
}