console.clear();

/*
-----------------------------------------
5 kyu
Regex Password Validation
-----------------------------------------

You need to write regex that will validate a password 
to make sure it meets the follwing criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number

Valid passwords will only be alphanumeric characters.
*/



// --------------------------------------
function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password);
}

console.log(  validate('abcdef2A')  ); // true

// The character class [A-Za-z0-9]{6,} could match all letters or all digits, 
// so we use the lookaheads to ensure that there's at least one of each. 
// In this case, we have to do the lookaheads first, because the later parts 
// of the regex have to be able to examine the whole string.

// Order of individual look arounds (look aheads) does not matter here.

// Lookahead and lookbehind, collectively called "lookaround", are zero-length 
// assertions just like the start and end of line, and start and end of word 
// anchors. The difference is that lookaround actually matches characters, 
// but then gives up the match, returning only the result: match or no match. 
// That is why they are called "assertions". 
// They do not consume characters in the string, but only assert whether 
// a match is possible or not. Lookaround allows you to create regular 
// expressions that are impossible to create without them, or that would get 
// very longwinded without them.

// We need to use beginning and end of string anchors to enclose our regex as 
// otherwise 'abcdef2A_' would generate a match.



// --------------------------------------
function validate2(password) {
  return /^[a-zA-Z0-9]{6,}$/.test(password) &&
         /[a-z]/            .test(password) &&
         /[A-Z]/            .test(password) &&
         /[0-9]/            .test(password);
}



// --------------------------------------
function validate3(password) {
  return password.length >= 6 &&
         /[a-z]/            .test(password) &&
         /[A-Z]/            .test(password) &&
         /[0-9]/            .test(password) &&
         /^[a-zA-Z0-9]+$/   .test(password);
}