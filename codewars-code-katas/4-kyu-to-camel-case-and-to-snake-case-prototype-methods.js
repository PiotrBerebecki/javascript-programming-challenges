console.clear();

/*
-----------------------------------------
4 kyu
Snakes and Camels
-----------------------------------------

Implement two functions: toCamelCase() and toSnakeCase().
For the purposes of this challenge, we'll be using UpperCamelCase.

the outcomes are as follows:

  original  |  toCamelCase  |  toSnakeCase
 ------------------------------------------

    'foo'         'Foo'           'foo'
    'Foo'         'Foo'           'foo'
    'FOO'         'Foo'           'foo'

  'FooBar'       'FooBar'       'foo_bar'
  'foo_bar'      'FooBar'       'foo_bar'
  'FOO_BAR'      'FooBar'       'foo_bar'
  'FOO_bar'      'FooBar'       'foo_bar'

  'foo bar'      'FooBar'       'foo_bar'
  'foo.bar'      'Foo.Bar'      'foo.bar'
  'foo::bar'     'Foo::Bar'     'foo::bar'
  'FOO::Bar'     'Foo::Bar'     'foo::bar'

In addition to the above, all leading and trailing spaces should be trimmed away.
*/



// ---------------------------------------
String.prototype.toCamelCase = function() {
  return this.trim().replace( /[ _]?([A-Z]?[a-z]+[0-9]*|[A-Z]+)/g, (delim,m) => m[0].toUpperCase() + m.slice(1).toLowerCase() );
}

String.prototype.toSnakeCase = function() {
  return this.trim().replace(/\B[A-Z][a-z]/g,'_$&').toLowerCase();
}

console.log( 'foo_bar'.toCamelCase() ); // FooBar
console.log( 'foo_bar'.toSnakeCase() ); // foo_bar