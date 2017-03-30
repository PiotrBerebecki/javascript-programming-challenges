/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

nbYear(1500, 5, 100, 5000) // 15
nbYear(1500000, 2.5, 10000, 2000000) // 10
nbYear(1500000, 0.25, 1000, 2000000) // 94
*/


// recursion
const nbYear = (populationStart, percentGrowth, newComers, populationLimit) => {
  if (populationStart >= populationLimit) {
    return 0;
  }
  
  return 1 + nbYear( (populationStart * (100 + percentGrowth) / 100) + newComers, percentGrowth, newComers, populationLimit);
}


const nbYear2 = (populationStart, percentGrowth, newComers, populationLimit) => {
  let year = 0;
  
  while(populationStart < populationLimit) {
    populationStart = (populationStart * (100 + percentGrowth) / 100) + newComers;
    year++;
  } 
  return year;
};
