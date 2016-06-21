console.clear();

/*
-----------------------------------------
8 kyu
A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
-----------------------------------------

This code is a mess! Fix it.

function {
  var : Math.random()
    if (career <= 0.32) {
      return = FrontEnd Developer
     else if (career <= 0.65) 
      return : BackEnd Developer,
    } else {
      return 'Full-Stack Developer'
    }

yourFutureCareer();

*/



// --------------------------------------
function yourFutureCareer() {
  var career = Math.random();
    if (career <= 0.33) {
      return 'FrontEnd Developer';
    } else if (career <= 0.66) {
      return 'BackEnd Developer';
    } else {
      return 'Full-Stack Developer';
    }
}

yourFutureCareer();



// --------------------------------------
// template literal
const yourFutureCareer1 = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}