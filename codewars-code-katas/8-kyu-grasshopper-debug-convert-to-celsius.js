console.clear();

/*
----------------------------------------
8 kyu
Grasshopper - Debug
----------------------------------------

Debug celsius converter Your friend is traveling abroad to the United States so
he wrote a program to convert fahrenheit to celsius. Unfortunately his code has
some bugs. Find the errors in the code to get the celsius converter working
properly.

To convert fahrenheit to celsius:
celsius = (fahrenheit - 32) * (5/9)

Current code
function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature) - 32 + (5/9)
  return temperature
}
*/



// --------------------------------------
function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}