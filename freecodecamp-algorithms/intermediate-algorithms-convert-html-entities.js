console.clear();

/*
-----------------------------------------
Intermediate Algorithms - Convert HTML Entities
-----------------------------------------

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

Here are some helpful terms:
RegExp
HTML Entities
String.replace()
*/



// --------------------------------------
function convertHTML(str) {
  var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  return str.replace(/[&<>'"]/g, x => htmlEntities[x]);
}

var toBeReplaced = 'The following codes of HTML entities are quite enigmatic: & < > \" \''
console.log(  convertHTML(toBeReplaced)  );
// The following codes of HTML entities are quite enigmatic: &amp; &lt; &gt; &quot; &apos;