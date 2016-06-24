console.clear();

/*
-----------------------------------------
8 kyu
Square and sum (aka Square(n) Sum)
-----------------------------------------

Square each number in the array and then add the results together
E.g.
squareSum([1, 2, 2]);   should return 9
*/



// --------------------------------------
// functional programming
function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function squareSum(array) {
  return array.map(square).reduce(sum);
}

console.log(  squareSum2([1, 2, 2])  ); // 9



// --------------------------------------
// in one function
function squareSum2(numbers) {
  return numbers.reduce(function(sum, n) {
    return sum + n*n;
  });
}
// no initial value is required here