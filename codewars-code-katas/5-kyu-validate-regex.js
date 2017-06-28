console.clear();

/*
---------------------------------------
5 kyu
validDate Regex
---------------------------------------

Your task is to write a regular expression (regex) that will match a string 
only if it contains at least one valid date, in the format [mm-dd] (that is, 
a two-digit month, followed by a dash, followed by a two-digit date, surrounded 
by square brackets).

You should assume the year in question is not a leap year. Therefore, the number 
of days each month should have are as follows:

    1. January - 31 days
    2. February - 28 days (leap years are ignored)
    3. March - 31 days
    4. April - 30 days
    5. May - 31 days
    6. June - 30 days
    7. July - 31 days
    8. August - 31 days
    9. September - 30 days
    10. October - 31 days
    11. November - 30 days
    12. December - 31 days

All text outside a valid date can be ignored, including other invalid dates.

For example:

"[01-23]" // January 23rd is a valid date
"[02-31]" // February 31st is an invalid date
"[02-16]" // valid
"[ 6-03]" // invalid format
"ignored [08-11] ignored" // valid
"[3] [12-04] [09-tenth]" // December 4th is a valid date
*/



// --------------------------------------
// Introduction:
// How to use source property (RegExp.prototype.source)
function validPerson(input) {
  var firstName = /\w+/
  var lastName = /\w+/
  var city = /\w+/

  var person = new RegExp(firstName.source + ' ' + lastName.source + ', ' + city.source)
  
  return person.test(input);
}

// console.log(   validPerson('SOME TEXT Mike Jones, London other text')   );

// The source property returns a String containing the source text of the regexp object,
// and it doesn't contain the two forward slashes on both sides and any flags



// --------------------------------------
function validDate(input) {
  var days28 = /02-(?:0[1-9]|1\d|2[0-8])/
  var days30 = /(?:0[469]|11)-(?:0[1-9]|[12]\d|30)/
  var days31 = /(?:0[13578]|10|12)-(?:0[1-9]|[12]\d|3[01])/
  
  var pattern = new RegExp( '\\[\(?:' + days28.source + '|' + days30.source + '|' + days31.source + '\)\\]' );
  
  return pattern.test(input);
}

console.log(  validDate('some text[02-28]other text')  ); // true
console.log(  validDate('some text[13-28]other text')  ); // false
console.log(  validDate('some text[02-29]other text')  ); // false

// You need to double escape [ to prevent 'Range out of order' order when using hyphens

// result of match() when using a non capturing group (?:
// ["[04-30]", "04-30", undefined, index: 0, input: "[04-30]"]
  
// result of match() when not using a non capturing group
// ["[04-30]", "04-30", undefined, "04", "30", index: 0, input: "[04-30]"]

// Non-capturing have just one difference from "normal" (non-capturing) groups:
// they don't require the regex engine to remember the individual groups 
// that they matched. The use case is that sometimes you must (or should) use a group 
// not because you are interested in what it captures but for syntactic reasons.
// Then it makes sense to use a non-capturing group instead of a "standard" 
// capturing one because it is less resource intensive - but if you don't care 
// about that, a capturing group will behave in the exact same manner.



// --------------------------------------
// as above but formatted multi-line to improve readability
function validDate2(input) {
  var days28 = /02-(?:0[1-9]|1\d|2[0-8])/
  var days30 = /(?:0[469]|11)-(?:0[1-9]|[12]\d|30)/
  var days31 = /(?:0[13578]|10|12)-(?:0[1-9]|[12]\d|3[01])/
  
  var pattern = new RegExp( '\\[\(?:'
                           + days28.source + '|'
                           + days30.source + '|'
                           + days31.source + 
                          '\)\\]' )
  
  return pattern.test(input)
}



// --------------------------------------
// as one massive regex
function validDate3(input) {

  var pattern = new RegExp(
    '\\[\(?:02-(?:0[1-9]|1\d|2[0-8])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:0[13578]|10|12)-(?:0[1-9]|[12]\d|3[01])\)\\]'
  );
  
  return pattern.test(input);
}



// --------------------------------------
function validDate4(input) {

  var pattern = new RegExp('\\[('

    // february (28 days)
    + '02-'
    + '(0[1-9]|1[0-9]|2[0-8])|'

    // months with 30 days
    + '(0[469]|11)-'
    + '(0[1-9]|[1-2][0-9]|30)|'

    // months with 31 days
    + '(0[13578]|1[02])-' 
    + '(0[1-9]|[1-2][0-9]|3[0-1])'

  + ')\\]');
  
  return pattern.test(input);
}



// --------------------------------------
// answer for the purpose of passing the kata tests
  var days28 = /02-(?:0[1-9]|1\d|2[0-8])/
  var days30 = /(?:0[469]|11)-(?:0[1-9]|[12]\d|30)/
  var days31 = /(?:0[13578]|10|12)-(?:0[1-9]|[12]\d|3[01])/
  
  var validDate = new RegExp( '\\[\(?:'
                           + days28.source + '|'
                           + days30.source + '|'
                           + days31.source + 
                          '\)\\]' );