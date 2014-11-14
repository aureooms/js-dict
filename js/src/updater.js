

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
