console.clear();

/*
-----------------------------------------
8 kyu
Leonardo Dicaprio and Oscars
-----------------------------------------

if oscar was (integer) 88, return "Leo finally won the oscar! Leo is happy".

if oscar was 86, return "Not even for Wolf of wallstreet?!"

if it was not 88 or 86 (and below 88), return "When will you give Leo an Oscar?"

if it was over 88, return "Leo got one already!"
*/



// --------------------------------------
function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if(oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else {
    return "Leo got one already!";
  }
}

console.log(  leo(88)  ); // Leo finally won the oscar! Leo is happy



// --------------------------------------
// ternary operator
function leo2(oscar) {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
}