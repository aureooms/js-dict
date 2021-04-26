[js-dict](http://make-github-pseudonymous-again.github.io/js-dict)
==

Dictionary ADT code bricks for JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/make-github-pseudonymous-again/js-data-structures).

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-dict/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-dict.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dict)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-dict.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-dict)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-dict)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-dict)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-dict#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-dict#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-dict)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-dict.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dict)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-dict.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-dict/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-dict.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-dict)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let dict = require( "@aureooms/js-dict" ) ;
```

## Use

```js
let buddies = new dict.Dict( { } ) ;
buddies.length ; // 0

buddies.set( "Camus" , "Albert" ) ;
buddies.length ; // 1

buddies.set( "Lorenz" , "Konrad" ) ;
buddies.length ; // 2

buddies.get( "Camus" ) ; // "Albert"
buddies.get( "Lorenz" ) ; // "Konrad"
buddies.getdefault( "Lovecraft" , "Cthulhu" ) ; // "Cthulhu"
```
