console.clear();

/*
-----------------------------------------
8 kyu
Drink about
-----------------------------------------

    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:
    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.

Examples:
peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(21) === "drink whisky"
*/



//----------------------------------------
function peopleWithAgeDrink(age) {
  var drink;
  if (age < 14)
    drink = "toddy";
  else if (age < 18)
    drink = "coke";
  else if (age < 21)
    drink = "beer";
  else if (age >= 21)
    drink = "whisky";
  return "drink " + drink;
}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(21));



//----------------------------------------
const peopleWithAgeDrink2 = age =>
  age < 14 ? "drink toddy":
  age < 18 ? "drink coke":
  age < 21 ? "drink beer": "drink whisky";



//----------------------------------------
const peopleWithAgeDrink3 = age => "drink " + (age < 14 ? "toddy" : 
                                               age < 18 ? "coke" : 
                                               age < 21 ? "beer" : 
                                                          "whisky");