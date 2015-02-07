[js-dict](http://aureooms.github.io/js-dict)
==

dictionary ADT code bricks for JavaScript

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

```javascript
var dict , buddies ;

dict = require( "aureooms-js-dict" ) ;

buddies = new dict.Dict( {} );
console.log( buddies.length ); // 0

buddies.set( "Camus", "Albert" );
console.log( buddies.length ); // 1

buddies.set( "Lorenz", "Konrad" );
console.log( buddies.length ); // 2
```
