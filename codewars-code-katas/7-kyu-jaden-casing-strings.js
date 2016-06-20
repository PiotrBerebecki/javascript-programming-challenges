console.clear();

/*
-----------------------------------------
7 kyu
Jaden Casing Strings
-----------------------------------------

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) 
and After Earth (2013). Jaden is also known for some of his philosophy that 
he delivers via Twitter. When writing on Twitter, he is known for almost always 
capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized 
in the same way he originally typed them.

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Note that the Java version expects a return value of null for an empty string or null.
*/



// --------------------------------------
String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase()); 
  }).join(' ');
};
// or word[0].toUpperCase() + word.slice(1);

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());



// --------------------------------------
// same as above in one line
String.prototype.toJadenCase2 = function () {
  return this.split(' ').map(function (word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }).join(' ');
};



// --------------------------------------
// function in regex to convert first letters to UpperCase
String.prototype.toJadenCase3 = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  }); // or even x => x.toUpperCase()
};
//return this.replace( /(^|\s)[a-z]/g, x => x.toUpperCase() );
//return this.replace( /(^|\s)\W/g, x => x.toUpperCase() );