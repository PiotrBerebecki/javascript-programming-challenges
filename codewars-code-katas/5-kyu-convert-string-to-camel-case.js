console.clear();

/*
-----------------------------------------
5 kyu
Convert string to camel case
-----------------------------------------

Convert dash/underscore delimited words into camel casing.
The first word within the output should be capitalized 
only if the original word was capitalized.

Examples:

toCamelCase("the-stealth-warrior") 
// returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior")
// returns "TheStealthWarrior"

Keywords: regex
*/



// --------------------------------------
function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, x => x[1].toUpperCase());
}

console.log(  toCamelCase2("the-stealth_warrior")  ); // theStealthWarrior



// --------------------------------------
function toCamelCase2(str) {
  return str.replace(/[-_](\w)/g, x => x.charAt(1).toUpperCase());
}



// --------------------------------------
const toCamelCase3 = str => str.replace(/[-_](\w)/g, x => x.slice(1).toUpperCase());



// --------------------------------------
function toCamelCase4(str) {
  return str.replace(/[-_](\w)/g, (delim, letter) => letter.toUpperCase());
}