// https://codepen.io/PiotrBerebecki/pen/zzvNeG?editors=0010
// calculate days in the current month

function daysInMonth(y, m) {
  const start = new Date(y, m - 1, 1);
  const end = new Date(y, m, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}

console.log( daysInMonth(2017, 2) );

// the above is much easier to test than the below
// which relies on time

function daysThisMonth() {
  var date  = new Date(),
    y     = date.getFullYear(),
    m     = date.getMonth(),
    start = new Date(y, m, 1),
    end   = new Date(y, m + 1, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}
