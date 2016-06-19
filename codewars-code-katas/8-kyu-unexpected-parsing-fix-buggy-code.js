console.clear();

/*
----------------------------------------
8 kyu
Unexpected parsing - Fix buggy code
----------------------------------------

Fix this buggy code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}

*/



// -------------------------------------
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}