console.clear();

/*
-----------------------------------------
7 kyu
Recursive reverse string
-----------------------------------------

Do you know how to write a recursive function? Let's test it!
Definition: Recursive function is a function that calls itself during its execution

Classic factorial counting on Javascript

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n-1) 
}

Your objective is to complete a recursive function reverse() that receives str as 
String and returns the same string in reverse order

Rules:

    reverse function should be executed only N times. N = length of the input string
    helper functions are not allowed
    changing the signature of the function is not allowed
    
Examples:

reverse("hello world") = "dlrow olleh" (N = 11)
reverse("abcd") = "dcba" (N = 4)
reverse("12345") = "54321" (N = 5)
*/



// --------------------------------------
// recursive
function reverse(str) {
  if (str.length > 1) {
    return reverse(str.slice(1)) + str[0];
  }
  return str;
}

console.log(reverse("12345"));



// --------------------------------------
// with if statement shorthand
function reverse2(str) {
  return str.length > 1 ? reverse2(str.slice(1)) + str[0] : str;
}



// --------------------------------------
// in one line
var reverse3 = function reverse3(str) {
  return str.length > 1 ? reverse3(str.slice(1)) + str[0] : str;
};