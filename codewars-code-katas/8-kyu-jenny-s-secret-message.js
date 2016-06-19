console.clear();

/*
----------------------------------------
8 kyu
Jenny's secret message
----------------------------------------

Jenny has written a function that returns a greeting for a user. However, she's
in love with Johnny, and would like to greet him slightly different. She added a
special case to her function, but she made a mistake. Can you help her?

function greet(testName){
  return "Hello, " + testName + "!";
  if(testName === "Johnny")
    return "Hello, my love!";
}
*/



// --------------------------------------
function greet(testName) {
  return "Hello, " + (testName === "Johnny" ? "my love" : testName) + "!";
}

console.log(greet("Johnny"));



// --------------------------------------
function greet2(testName){
  if(testName === "Johnny")
    return "Hello, my love!";
  return "Hello, " + testName + "!";
}