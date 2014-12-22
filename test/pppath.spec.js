/* globals describe, it, expect */
'use strict';

var pppath = require('..');

describe('pppath(parts [, filename])', function() {

  it('without `filename`', function() {
    expect(pppath('')).toBe('');
    expect(pppath('/')).toBe('/');
    expect(pppath('/foo//bar')).toBe('/foo/bar');
    expect(pppath('/foo//bar/')).toBe('/foo/bar/');
    expect(pppath('/foo//bar.html')).toBe('/foo/bar.html');
    expect(pppath(['/foo/', '/bar'])).toBe('/foo/bar');
    expect(pppath(['/foo/', '/bar/'])).toBe('/foo/bar/');
    expect(pppath(['/foo/', '/bar.js'])).toBe('/foo/bar.js');
    expect(pppath(['http://', '/foo/', '/bar'])).toBe('http://foo/bar');
    expect(pppath(['http://', '/foo/', '/bar/'])).toBe('http://foo/bar/');
    expect(pppath(['http://', '/foo/', '/bar.js'])).toBe('http://foo/bar.js');
  });

  it('with `filename`', function() {
    var filename = 'index.html';
    expect(pppath('', filename)).toBe('/index.html');
    expect(pppath('/', filename)).toBe('/index.html');
    expect(pppath('/foo//bar', filename)).toBe('/foo/bar/index.html');
    expect(pppath('/foo//bar/', filename)).toBe('/foo/bar/index.html');
    expect(pppath('/foo//bar.html', filename)).toBe('/foo/bar.html');
    expect(pppath(['/foo/', '/bar'], filename)).toBe('/foo/bar/index.html');
    expect(pppath(['/foo/', '/bar/'], filename)).toBe('/foo/bar/index.html');
    expect(pppath(['/foo/', '/bar.js'], filename)).toBe('/foo/bar.js');
    expect(pppath(['http://', '/foo/', '/bar'], filename)).toBe('http://foo/bar/index.html');
    expect(pppath(['http://', '/foo/', '/bar/'], filename)).toBe('http://foo/bar/index.html');
    expect(pppath(['http://', '/foo/', '/bar.js'], filename)).toBe('http://foo/bar.js');
  });

});
