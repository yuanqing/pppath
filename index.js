'use strict';

var consecutiveSlash = /\/+/g;
var endsWithExtension = /[^\/]*\.[^\/]+$/g;

var pppath = function(parts, filename) {
  if (typeof parts === 'string') {
    parts = [parts];
  }
  if (filename && !endsWithExtension.test(parts[parts.length-1])) {
    parts.push(filename);
  }
  return parts.join('/').replace(consecutiveSlash, '/');
};

module.exports = exports = pppath;
