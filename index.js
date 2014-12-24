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
  if (filename && parts[parts.length-1].search(endsWithExtension) === -1) {
    parts.push(filename);
  }
  return parts.filter(Boolean).join('/').replace(consecutiveSlash, fn);
};

module.exports = exports = pppath;
