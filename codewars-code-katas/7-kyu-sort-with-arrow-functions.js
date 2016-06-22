console.clear();

/*
-----------------------------------------
7 kyu
Sort with Arrow Functions
-----------------------------------------
Order a list containg people objects by age using the Javascript Arrow Functions.

OrderPeople([
{ age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' }
])

Should return          
[
{age:26,name:"don"},
{age:46,name:"roger"},
{age:74,name:"brendan"},
{age:83,name:"joel"},
{age:99,name:"vinny"}
]
*/



var peopleList = [
{ age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' }
]



// --------------------------------------
function OrderPeople(people) {
  return people.sort((a,b) => a.age - b.age);
}

console.log(  JSON.stringify( OrderPeople(peopleList) )  );
// returns
// [{"age":26,"name":"don"},
//  {"age":46,"name":"roger"},
//  {"age":74,"name":"brendan"},
//  {"age":83,"name":"joel"},
//  {"age":99,"name":"vinny"}]