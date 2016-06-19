console.clear();

/*
-----------------------------------------
8 kyu
Regular Ball Super Ball
-----------------------------------------

Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of
"regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/



//----------------------------------------
var Balls = function(ballType) {      // same as   function Ball(ballType) {
  this.ballType = ballType || "regular";
};

var ball1 = new Balls();
var ball2 = new Balls("super");

console.log(ball1.ballType);
console.log(ball2.ballType);