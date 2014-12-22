'use strict';

var consecutiveSlash = /(:)?\/+/g;
var endsWithExtension = /[^\/]*\.[^\/]+$/g;

var fn = function(match, c) {
  return c ? '://' : '/';
};

var pppath = function(parts, filename) {
  if (typeof parts === 'string') {
    parts = [parts];
  }
  if (filename && !endsWithExtension.test(parts[parts.length-1])) {
    parts.push(filename);
  }
  return parts.join('/').replace(consecutiveSlash, fn);
};

module.exports = exports = pppath;
