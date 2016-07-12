console.clear();

/*
-----------------------------------------
5 kyu 32bit integer to IPv4
-----------------------------------------

Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it 
as the 32 bit number: 2149583361

Write a function int32ToIp(int32) that takes a 32 bit number 
and returns a string representation of its IPv4 address.

Example

int32ToIp(2149583361) // '128.32.10.1'
*/



// --------------------------------------
function int32ToIp(int32) {
  const padTo32 = str => '0'.repeat(32 - str.length) + str;
  let binary = padTo32(int32.toString(2))
  
  return binary
    .match(/\d{8}/g)
    .map(el => parseInt(el, 2))
    .join('.')
}

// console.log(  int32ToIp(2149583361)  ); // '128.32.10.1'
// console.log(  int32ToIp(0)  ); // 0.0.0.0
// console.log(  int32ToIp(1)  ); // 0.0.0.1



// --------------------------------------
function int32ToIp2(int32) {
  String.prototype.padTo32 = function() {
    var missingLength = 32 - this.length;
    return '0'.repeat(missingLength) + this;   
  }
  
  return int32
    .toString(2)
    .padTo32()
    .match(/\d{8}/g)
    .map(el => parseInt(el, 2))
    .join('.');
}