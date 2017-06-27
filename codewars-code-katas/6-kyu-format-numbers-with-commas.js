// http://www.codewars.com/kata/grouped-by-commas/javascript
// Format number with commas every three digits
// groupByCommas(11222333)); // 11,222,333

const groupByCommas = n => {
  return n.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};

console.log(groupByCommas(11222333)); // 11,222,333
