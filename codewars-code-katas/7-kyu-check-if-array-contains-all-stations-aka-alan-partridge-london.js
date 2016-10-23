console.clear();

/*
-----------------------------------------
7 kyu Check if array contains all stations aka Alan Partridge III - London
-----------------------------------------

Given an array of stations, check if it includes all stations below:
[
 'Rejection', 
 'Disappointment', 
 'Backstabbing Central', 
 'Shattered Dreams Parkway'
]

If all stations are found return: 
'Smell my cheese you mother!'

otherwise return: 
'No, seriously, run. You will miss it.'
*/



// --------------------------------------
function alan(testedStations) {
  const alanStations = [
    'Rejection', 
    'Disappointment', 
    'Backstabbing Central', 
    'Shattered Dreams Parkway'
  ];
  
  const testedStationsObj = {};
  testedStations.forEach(station => testedStationsObj[station] = true);

  return alanStations.every(station => testedStationsObj[station]) ?
    'Smell my cheese you mother!' : // all alan's stations found
    'No, seriously, run. You will miss it.'; // alan's station missing
}


const testedStations1 = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];

console.log(  alan(testedStations1)  ); // Smell my cheese you mother!



// --------------------------------------
function alan2(testedStations) {
  const alanStations = [
    'Rejection', 
    'Disappointment', 
    'Backstabbing Central', 
    'Shattered Dreams Parkway'
  ];
  
  const testedStationsObj = {};
  testedStations.forEach(station => testedStationsObj[station] = true);

  for (let i = 0, len = alanStations.length; i < len; i++) {
    if (!testedStationsObj[alanStations[i]]) {
      return 'No, seriously, run. You will miss it.'; // alan's station missing
    }
  }
  
  return 'Smell my cheese you mother!'; // all alan's stations fount
}