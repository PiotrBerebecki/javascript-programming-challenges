console.clear();

/*
-----------------------------------------
7 kyu
Breaking chocolate problem
-----------------------------------------

Write a function which calculates how many breaks are
needed to break the chocolate into 1x1 squares

E.g.
(breakChocolate(2, 1)  -> 1
(breakChocolate(3, 1)  -> 2
(breakChocolate(2, 2)  -> 3
(breakChocolate(5, 5)  -> 24
(breakChocolate()  -> 0
(breakChocolate(1)  -> 0
(breakChocolate(1, 1)  -> 0
*/



// --------------------------------------
var breakChocolate = function(n, m) {
  return  n && m ? (n * m) - 1 : 0;
};

console.log(  breakChocolate(2, 1)  );