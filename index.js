'use strict';

// cache the RegExps we need
var endsWithExtension = /[^\/]*\.[^\/]+$/g;
var consecutiveSlash = /(:)?\/+/g; // capture the ':'

// replace match with '://' if we've captured `c` (ie. the ':'), else replace with '/'
var fn = function(match, c) {
  return c ? '://' : '/';
};

var pppath = function(parts, filename) {

  // ensure `parts` is an array
  parts = [].concat(parts);

  // append `filename` only if last element of `parts` does not end with extension
  if (filename && parts[parts.length-1].search(endsWithExtension) === -1) {
    parts.push(filename);
  }

  return parts.filter(Boolean) // filter out falsy
              .join('/')
              .replace(consecutiveSlash, fn); // remove consecutive '/'

};

module.exports = pppath;
