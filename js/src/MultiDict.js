

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
