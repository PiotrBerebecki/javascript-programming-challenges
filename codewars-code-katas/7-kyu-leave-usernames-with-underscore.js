// Given array of arrays with usernames, leave only the usernames ending with underscore,
// For example, given
// [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
// it should output
// [ [ "bar_", "bar@bar.com" ] ]

function searchNames(logins) {
  return logins.filter(login => /_$/.test(login[0]));
}

function searchNames2(logins) {
  return logins.filter(login => login[0].slice(-1) === '_' );
}
