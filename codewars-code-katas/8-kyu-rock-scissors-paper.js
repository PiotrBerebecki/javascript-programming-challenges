// http://www.codewars.com/kata/rock-paper-scissors/javascript
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw';
  }
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`
};

const rps2 = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  
  const rules = { scissors: 'rock', rock: 'paper', paper: 'scissors' };
  
  if (p1 === rules[p2]) {
    return 'Player 1 won!'
  }
  return 'Player 2 won!'
};

console.log(rps('rock', 'scissors')); // Player 1 won!
