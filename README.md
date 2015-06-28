[js-dict](http://aureooms.github.io/js-dict)
==

Dictionary ADT code bricks for JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

[![NPM license](http://img.shields.io/npm/l/aureooms-js-dict.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-dict/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-dict.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-dict)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-dict.svg?style=flat)](http://bower.io/search/?q=aureooms-js-dict)
[![Build Status](http://img.shields.io/travis/aureooms/js-dict.svg?style=flat)](https://travis-ci.org/aureooms/js-dict)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-dict.svg?style=flat)](https://coveralls.io/r/aureooms/js-dict)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-dict.svg?style=flat)](https://david-dm.org/aureooms/js-dict#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-dict.svg?style=flat)](https://david-dm.org/aureooms/js-dict#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-dict.svg?style=flat)](https://codeclimate.com/github/aureooms/js-dict)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-dict.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-dict)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-dict.svg?style=flat)](https://github.com/aureooms/js-dict/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-dict.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-dict)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let dict = require( "aureooms-js-dict" ) ;
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
