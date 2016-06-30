console.clear();

/*
-----------------------------------------
8 kyu
Finish Guess the Number Game
-----------------------------------------

Create a game where the user has to guess the correct number.

There is a limit of how many guesses the user can do.

1. If the user tries to guess more than the limit
the function should throw an error.

2. If the user guess wrong it should lose a life
and return false (if you guess correctly you shouldn't remove life).

3.  If the user guess right it should return true.
*/



// --------------------------------------
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) { // or if (this.lives === 0);
      throw 'No guesses left'; // or throw Error;
    }
    if (this.number === n) {
      return true;
    }
    this.lives--;
    return false;
  }
}

var newGame = new Guesser(3, 2);

console.log(     newGame.guess(1)      ); // false
console.log(     newGame.guess(6)      ); // false
console.log(     newGame.guess(8)      ); // Uncaught No guesses left