[js-dict](http://make-github-pseudonymous-again.github.io/js-dict)
==

Dictionary ADT code bricks for JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

[![License](https://img.shields.io/github/license/aureooms/js-dict.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-dict/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-dict.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dict)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-dict.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-dict)
[![Build Status](https://img.shields.io/travis/aureooms/js-dict.svg?style=flat)](https://travis-ci.org/aureooms/js-dict)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-dict.svg?style=flat)](https://coveralls.io/r/aureooms/js-dict)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-dict.svg?style=flat)](https://david-dm.org/aureooms/js-dict#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-dict.svg?style=flat)](https://david-dm.org/aureooms/js-dict#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-dict.svg?style=flat)](https://codeclimate.com/github/aureooms/js-dict)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-dict.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dict)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-dict.svg?style=flat)](https://github.com/aureooms/js-dict/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-dict.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-dict)

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
