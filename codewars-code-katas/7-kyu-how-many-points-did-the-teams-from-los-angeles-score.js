console.clear();

/*
-----------------------------------------
7 kyu How many points did the teams from Los Angeles score?
-----------------------------------------

You are given an array including a list of basketball teams and their scores showing points scored vs points lost

Your task it to return a number which represent the number of points scored by a team from Los Angeles. 

Notes:

- The format of the Los Angeles team will always be 'Los Angeles Name'.
- The number of teams from Los Angeles may vary.
- The order of the teams may vary.
- All values in the arrays will always be strings.
- Points will always be given as '100:99' (points scored:points lost).
*/



// --------------------------------------
const basketballResults = [
  ['Los Angeles Lakers', '1000:637'],
  ['Los Angeles Clippers', '1000:422'],
  ['New Orleans Pelicans', '433:454'],
  ['Oklahoma City Thunder', '315:318'],
  ['Golden State Warriors', '559:503'],
  ['Memphis Grizzlies', '550:511'],
  ['Portland Trail Blazers', '527:520'],
  ['Minnesota Timberwolves', '495:494'],
  ['Utah Jazz', '399:402'],
  ['Sacramento Kings', '420:431'],
  ['San Antonio Spurs', '469:460'],
  ['Phoenix Suns', '523:522'],
  ['Denver Nuggets', '646:658']
];



function getLosAngelesPoints(results) {  
  return results.reduce((pointsScored, curr) => {
    if (/^Los Angeles [A-Z][a-z]+$/.test(curr[0])) {
       pointsScored += Number(curr[1].split(/:/)[0]);
    }
    return pointsScored;
  }, 0);
}

console.log(  getLosAngelesPoints(basketballResults)  ); // 2000