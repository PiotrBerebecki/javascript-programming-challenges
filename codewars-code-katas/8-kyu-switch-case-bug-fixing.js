console.clear();

/*
-----------------------------------------
8 kyu
Switch/Case - Bug Fixing #6
-----------------------------------------

Correct the mistakes in the function below
so that the following works
evalObject({a:1,b:1,operation:'+'})   => should return 2

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case '+': result = value.a + value.b;
    case '-': result = value.a - value.b;
    case '/': result = value.a / value.b;
    case '*': result = value.a * value.b;
    case '%': result = value.a % value.b;
    case '^': result = Math.pow(value.a, value.b);
  }
  return result;
}
*/



// --------------------------------------
function evalObject(value){
  switch(value.operation){
    case '+': return value.a + value.b;
    case '-': return value.a - value.b;
    case '/': return value.a / value.b;
    case '*': return value.a * value.b;
    case '%': return value.a % value.b;
    case '^': return Math.pow(value.a, value.b);
  }
}

console.log(  evalObject({a:1,b:1,operation:'+'}) ); // 2