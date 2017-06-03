// Currying Create a function that will allow you to pass in a string, with the ability to add to this with more function calls. When it is finally passed an empty argument return the full concatinated string of all arguments pased previously.
// For example: mergeWords("Hello")("World!")("how")("are")("you?")();
// This will return the following: "Hello World! how are you?"

// Solution 1
function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + nextString);
    }
  };
}

console.log(mergeWords('There')('is')('no')('spoon.')());

// Solution 2
const mergeWords2 = string => nextString =>
  nextString === undefined ? string : mergeWords(`${string} ${nextString}`);

console.log(mergeWords2('There')('is')('no')('spoon.')());
