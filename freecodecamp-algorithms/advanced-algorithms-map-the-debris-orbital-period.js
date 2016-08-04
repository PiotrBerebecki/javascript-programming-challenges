console.clear();

/*
-----------------------------------------
Advanced Algorithms - Map the debris - Orbital period
-----------------------------------------

Calculate the time it takes for an object to make one complete orbit around Earth.
This is called orbital period.

You will be given an array of orbiting bodies and their average altitude.
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

Earth is 6367.4447 kilometers
GM value of earth is 398600.4418 km3s-2

Based on https://en.wikipedia.org/wiki/Orbital_period
the formula for orbitaal period is: T = 2_pi_ sqrt(earthRadius + avgAlt to the cube / GM)
*/



// --------------------------------------
function orbitalPeriod(arr) {
  
  function calcOrbitalPeriod(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius+avgAlt,3)/GM);
    return Math.round(orbitalPeriod);
  }
  
  return arr.map(function(el) {
    el.orbitalPeriod = calcOrbitalPeriod(el.avgAlt);
    delete el.avgAlt;
    return el;
  });
}

console.log(  JSON.stringify(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])) );
// should return [{name: "sputnik", orbitalPeriod: 86400}]


// console.log(  JSON.stringify(orbitalPeriod([{name: "iss", avgAlt: 413.6},
//                                             {name: "hubble", avgAlt: 556.7},
//                                             {name: "moon", avgAlt: 378632.553}]))  )
// should return [{name: "iss", orbitalPeriod: 5557},
                //{name: "hubble", orbitalPeriod: 5734},
                //{name: "moon", orbitalPeriod: 2377399}].



// --------------------------------------
// forEach
function orbitalPeriod2(arr) {
  
  function calcOrbitalPeriod(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius+avgAlt,3)/GM);
    return Math.round(orbitalPeriod);
  }
  
  arr.forEach(function(el) {
    el.orbitalPeriod = calcOrbitalPeriod(el.avgAlt);
    delete el.avgAlt;
  });
  return arr;  
}