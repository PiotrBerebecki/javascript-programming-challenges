/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/

const countDuplicates = (text) => {
  return (text
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/([^])\1+/g) || []).length;
};

// count the number of capturing groups
// [^] matches any character including new line hence it's more robust than dot (.)
