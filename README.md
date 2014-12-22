# pppath.js [![npm Version](http://img.shields.io/npm/v/pppath.svg?style=flat)](https://www.npmjs.org/package/pppath) [![Build Status](https://img.shields.io/travis/yuanqing/pppath.svg?style=flat)](https://travis-ci.org/yuanqing/pppath) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/pppath.svg?style=flat)](https://coveralls.io/r/yuanqing/pppath)

> Join strings to form a valid file path.

## Usage

```js
// without `filename`
pppath(['foo/', '/bar']);    //=> 'foo/bar'
pppath(['foo/', '/bar/']);   //=> 'foo/bar/'
pppath(['foo/', '/bar.js']); //=> 'foo/bar.js'

// with `filename`
var filename = 'index.html';
pppath(['foo/', '/bar'], filename);    //=> 'foo/bar/index.html'
pppath(['foo/', '/bar/'], filename);   //=> 'foo/bar/index.html'
pppath(['foo/', '/bar.js'], filename); //=> 'foo/bar.js'
```

1. Consecutive `/` will be replaced by a single `/`.
2. If a `filename` (the second argument) is specified, it will be appended to the path only if the path does not already end with a file extension.

More usage examples are in [the tests](https://github.com/yuanqing/pppath/blob/master/test/pppath.spec.js).

## API

### pppath(parts [, filename])

Returns a String, the result of joining `parts`. `filename` is appended to the path if the path does not end with a file extension.

- `parts` &mdash; A String, or an array of Strings to be joined to form the file path.
- `filename` &mdash; A String.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save pppath
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/pppath/blob/master/LICENSE)
