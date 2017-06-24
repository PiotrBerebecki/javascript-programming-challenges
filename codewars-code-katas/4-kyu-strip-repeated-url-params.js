console.clear();

// http://www.codewars.com/kata/strip-url-params/javascript

// Remove any duplicate query string parameters from the url
// Remove any query string parameters specified within the 2nd argument (optional array)
// Examples:

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

const stripUrlParams = (url, excludedParams) => {
  const [baseUrl, params] = url.split('?');

  if (params === undefined) {
    return baseUrl;
  }

  const paramsLookup = {};
  if (excludedParams) {
    excludedParams.forEach(param => {
      paramsLookup[param] = true;
    });
  }

  const paramsArr = params.split('&');

  const paramsToBeLeft = paramsArr.filter(param => {
    const currentParam = param.split('=')[0];
    if (paramsLookup[currentParam] === undefined) {
      paramsLookup[currentParam] = true;
      return true;
    }
    return false;
  });

  return `${baseUrl}?${paramsToBeLeft.join('&')}`;
};

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')); // returns 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])); // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])); // returns 'www.codewars.com'
