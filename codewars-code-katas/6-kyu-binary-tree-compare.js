console.clear()

/*
-----------------------------------------
6 kyu
Binary Tree Compare
-----------------------------------------

Given the node object:
Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null

write a function compare(a, b) which compares the two trees defined by 
Nodes a and b and returns true if they are equal in structure and in value 
and false otherwise.

Examples:

var aNode = {val: 1, left: null, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};

console.log(   compare(aNode, bNode)   ) // true
console.log(   compare(aNode, cNode)   ) // false

Graphical examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)
*/  



// --------------------------------------
function compare(a,b) {
  if (a === null || b === null) { return a === b; }
  return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right)
}

var aNode = {val: 1, left: null, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};

console.log(  compare(aNode, bNode)  ) // true
console.log(  compare(aNode, cNode)  ) // false