(function(exports, undefined){

	'use strict';


/* js/src/Dict.js */


var Dict = function ( hash ) {

	var key;

	this.hash = hash;

	this.length = 0;

	for ( key in hash ) {
		++this.length;
	}

};

Dict.prototype.get = function ( key ) {

	return this.hash[key];

};

Dict.prototype.getdefault = function ( key, fallback ) {

	if ( key in this.hash ) {
		return this.hash[key];
	}

	else {
		return fallback;
	}

};

Dict.prototype.set = function ( key, value ) {

	if ( !( key in this.hash ) ) {
		++this.length;
	}

	this.hash[key] = value;

};

Dict.prototype.setdefault = function ( key, value ) {

	if ( key in this.hash ) {
		return this.hash[key];
	}

	else {

		++this.length;
		this.hash[key] = value;
		return value;

	}

};

Dict.prototype.unset = function ( key ) {

	if ( key in this.hash ) {
		--this.length;
		delete this.hash[key];
	}

};

Dict.prototype.each = function ( callback ) {

	var key;

	for ( key in this.hash ) {
		callback( key, this.hash[key] );
	}

};

Dict.prototype.update = function ( callback ) {

	var key;

	for ( key in this.hash ) {
		this.hash[key] = callback( key, this.hash[key] );
	}

};

exports.Dict = Dict;

/* js/src/MultiDict.js */


var MultiDict = function ( hash ) {

	var key;

	this.hash = hash;

	this.length = 0;

	for ( key in hash ) {
		++this.length;
	}

};

MultiDict.prototype.get = function ( key ) {

	if ( key in this.hash ) {
		return this.hash[key];
	}

	else {
		return [];
	}

};

MultiDict.prototype.set = function ( key, value ) {

	if ( !( key in this.hash ) ) {
		++this.length;
		this.hash[key] = [];
	}

	this.hash[key].push( value );

};

MultiDict.prototype.unset = function ( key ) {

	if ( key in this.hash ) {
		--this.length;
		delete this.hash[key];
	}

};

MultiDict.prototype.each = function ( callback ) {

	var key, list, i, len;

	for ( key in this.hash ) {

		list = this.hash[key];

		for ( i = 0, len = list.length ; i < len ; ++i ) {
			callback( key, list[i] );
		}

	}

};

MultiDict.prototype.update = function ( callback ) {

	var key, list, i, len;

	for ( key in this.hash ) {

		list = this.hash[key];

		for ( i = 0, len = list.length ; i < len ; ++i ) {
			list[i] = callback( key, list[i] );
		}

	}

};

exports.MultiDict = MultiDict;

/* js/src/updater.js */


/**
 * Generaters and updater function from a hash object.
 */

var updater = function ( hash ) {

	return function ( key, value ) {

		if ( key in hash ) {
			return hash[key];
		}

		else {
			return value;
		}

	};

};

exports.updater = updater;

})(typeof exports === 'undefined' ? this['dict'] = {} : exports);
