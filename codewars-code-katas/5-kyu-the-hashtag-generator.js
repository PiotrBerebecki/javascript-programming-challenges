console.clear();

/*
-----------------------------------------
5 kyu
The Hashtag Generator
-----------------------------------------

The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

    If the final result is longer than 140 chars it must return false.
    If the input is a empty string it must return false.
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    Remove trailing whitespace.

Example Input to Output:

'a very good Kata  '  => '#AVeryGoodKata
' Hello there thanks for trying my Kata' => '#HelloThereThanksForTryingMyKata'
' Hello World ' => '#HelloWorld' 
*/



// --------------------------------------
// regex
function generateHashtag(str) {
  if (str === '') {return false;}
  var cleaned = str.trim().replace(/(?:\s|^)([a-zA-Z])/g, (delim,word) => word.toUpperCase());
  return cleaned.length > 139 ? false : '#' + cleaned;
}

// console.log(  generateHashtag('a very good Kata  ')  ); // '#AVeryGoodKata'



// --------------------------------------
function generateHashtag2(str) {
  if (str === '') {return false;}
  var cleaned = str
    .split(' ')
    .map(function(el) {return el.charAt(0).toUpperCase() + el.slice(1);})
    .join('');                                           
  return cleaned.length > 139 ? false : '#' + cleaned; 
}

// el[0] would cause error if used  on empty string