// http://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/javascript
// aBc.toAlternatingCase() // AbC

const isLowerCase = char => char === char.toLowerCase();
const swapCase = char =>
  isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};
