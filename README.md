# pppath.js [![npm Version](http://img.shields.io/npm/v/pppath.svg?style=flat)](https://www.npmjs.org/package/pppath) [![Build Status](https://img.shields.io/travis/yuanqing/pppath.svg?style=flat)](https://travis-ci.org/yuanqing/pppath) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/pppath.svg?style=flat)](https://coveralls.io/r/yuanqing/pppath)

> Join strings to form a valid path.

## API

### pppath(parts [, filename])

Returns a String, the result of joining `parts`. `filename` is appended to the returned path if the last element of `parts` does not end with a file extension.

```js
// without `filename`
pppath(['/foo/', '/bar']);            //=> '/foo/bar'
pppath(['http://', '/foo/', '/bar']); //=> 'http://foo/bar'

// with `filename`
pppath(['/foo/', '/bar'], 'index.html');               //=> '/foo/bar/index.html'
pppath(['/foo/', '/bar/'], 'index.html');              //=> '/foo/bar/index.html'
pppath(['/foo/', '/bar.js'], 'index.html');            //=> '/foo/bar.js'
pppath(['http://', '/foo/', '/bar'], 'index.html');    //=> 'http://foo/bar/index.html'
pppath(['http://', '/foo/', '/bar/'], 'index.html');   //=> 'http://foo/bar/index.html'
pppath(['http://', '/foo/', '/bar.js'], 'index.html'); //=> 'http://foo/bar.js'
```

Consecutive `/` will be replaced by a single `/`, with the exception that the character sequence `://` will remain intact. This is not the behaviour of the Node API&rsquo;s [`path.join`](http://nodejs.org/api/path.html#path_path_join_path1_path2):

```js
// :(
path.join('http://', '/foo/', '/bar'); //=> 'http:/foo/bar'

// :)
pppath(['http://', '/foo/', '/bar']);  //=> 'http://foo/bar'
```

More usage examples are in [the tests](https://github.com/yuanqing/pppath/blob/master/test/pppath.spec.js).

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
