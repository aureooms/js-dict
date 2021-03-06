

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
