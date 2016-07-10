console.clear();

/*
-----------------------------------------
5 kyu
Count number of IP Addresses between two IP Addresses
(aka Count IP Addresses)
-----------------------------------------

Write a function that accepts a starting and ending IPv4 address, 
and returns the number of IP addresses from start to end, 
excluding the end IP address.

All input to the ipsBetween function will be valid IPv4 addresses 
in the form of strings. The ending address will be at least one 
address higher than the starting address.

Examples:
ipsBetween("10.0.0.0", "10.0.0.50") => returns 50
ipsBetween("10.0.0.0", "10.0.1.0") => returns 256
ipsBetween("20.0.0.10", "20.0.1.0") => returns 246
*/



// --------------------------------------
function ipsBetween(start, end) {
  start = start.split('.').map(Number);
  end = end.split('.').map(Number);
  
  return end.reduce(function(prev, curr, ind) {
    return (prev << 8) + curr - start[ind]
  }, 0);
}

console.log(  ipsBetween('10.0.0.0', '10.0.0.50')  ); // 50

// The bitwise operator will increase the number on each element 
// of the array. 



// --------------------------------------
// how does bitwise operator work?
function applyBitwise(num) {
  return num << 1
}

// console.log(  applyBitwise(1)  ); // 2
// console.log(  applyBitwise(2)  ); // 4

// << is the left shift bitwise operator.
// It shifts a binary representation of a number to the left.
// For example:
// 2 << 1
// binary representation of 2 is 10
// if we shift it left, we get 100
// 100 in binary is 4 in decimal.



// --------------------------------------
function ipsBetween2(start, end) {
  function val(ip) { 
    return ip
      .split('.')
      .reduce(function(prev,curr,ind) {
        return prev + curr * Math.pow(256, 3 - ind);
      }, 0);
  }
  
  return val(end) - val(start);
}