// http://www.codewars.com/kata/count-the-smiley-faces/javascript
// -A smiley face can have a nose but it does not have to.
// Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

const isSmilyFace = str => /^[:;][-~]?[)D]$/.test(str);

const countSmileys = arr => {
  return arr.reduce((acc, cur) => {
    if (isSmilyFace(cur)) {
      acc += 1;
    }
    return acc;
  }, 0);
};

console.log(countSmileys([':)', ';(', ';}', ':-D'])); // 2
