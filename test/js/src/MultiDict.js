
test( "Dict" , function () {

	var buddies, fallback, updater;

	fallback = Math.random();

	buddies = new dict.MultiDict( {} );

	strictEqual( buddies.length, 0, "a) length is 0" );


	buddies.set( "Camus", "Albert" );

	strictEqual( buddies.length, 1, "b) length is 1" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "b) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), [], "b) Konrad is not in" );
	deepEqual( buddies.get( "Satie" ), [], "b) Erik is not in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "b) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( false, "b) Konrad is not in (using each)" );
		}

		else if ( key === "Satie" ) {
			ok( false, "b) Erik is not in (using each)" );
		}

		else {
			ok( false, "b) others are not in (using each)" );
		}

	} );


	buddies.set( "Lorenz", "Konrad" );

	strictEqual( buddies.length, 2, "c) length is 2" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "c) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad"], "c) Konrad is in" );
	deepEqual( buddies.get( "Satie" ), [], "c) Erik is not in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "c) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Konrad", "c) Konrad is in (using each)" );
		}

		else if ( key === "Satie" ) {
			ok( false, "c) Erik is not in (using each)" );
		}

		else {
			ok( false, "c) others are not in (using each)" );
		}

	} );


	buddies.set( "Satie", "Erik" );

	strictEqual( buddies.length, 3, "d) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "d) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad"], "d) Konrad is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "d) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "d) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Konrad", "d) Konrad is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "d) Erik is in (using each)" );
		}

		else {
			ok( false, "d) others are not in (using each)" );
		}

	} );


	buddies.set( "Lorenz", "Edward Norton" );

	strictEqual( buddies.length, 3, "e) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "e) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad", "Edward Norton"], "e) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "e) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "e) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( value === "Konrad" || value === "Edward Norton", "e) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "e) Erik is in (using each)" );
		}

		else {
			ok( false, "e) others are not in (using each)" );
		}

	} );


	updater = dict.updater( { "Camus" : "ALBERT", "Norton" : "Edward" } );

	buddies.update( updater );

	strictEqual( buddies.length, 3, "f) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["ALBERT"], "f) ALBERT is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad", "Edward Norton"], "f) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "f) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "ALBERT", "f) ALBERT is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( value === "Konrad" || value === "Edward Norton", "f) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "f) Erik is in (using each)" );
		}

		else {
			ok( false, "f) others are not in (using each)" );
		}

	} );


	buddies.unset( "Camus" );

	strictEqual( buddies.length, 2, "h) length is 2" );

	deepEqual( buddies.get( "Camus" ), [], "h) ALBERT is not in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad", "Edward Norton"], "h) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "h) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			ok( false, "h) ALBERT is not in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( value === "Konrad" || value === "Edward Norton", "h) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "h) Erik is in (using each)" );
		}

		else {
			ok( false, "h) others are not in (using each)" );
		}

	} );


	buddies.set( "Camus", "Albert" );

	strictEqual( buddies.length, 3, "i) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "i) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad", "Edward Norton"], "i) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "i) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "i) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( value === "Konrad" || value === "Edward Norton", "i) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "i) Erik is in (using each)" );
		}

		else {
			ok( false, "i) others are not in (using each)" );
		}

	} );


	buddies.unset( "de Saint-Exupéry" );

	strictEqual( buddies.length, 3, "j) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "j) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Konrad", "Edward Norton"], "j) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "j) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "j) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			ok( value === "Konrad" || value === "Edward Norton", "j) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "j) Erik is in (using each)" );
		}

		else {
			ok( false, "j) others are not in (using each)" );
		}

	} );


	buddies = new dict.MultiDict( {
		"Camus" : ["Albert"],
		"Lorenz" : ["Edward Norton"],
		"Satie" : ["Erik"]
	} );

	strictEqual( buddies.length, 3, "k) length is 3" );

	deepEqual( buddies.get( "Camus" ), ["Albert"], "k) Albert is in" );
	deepEqual( buddies.get( "Lorenz" ), ["Edward Norton"], "k) Edward Norton is in" );
	deepEqual( buddies.get( "Satie" ), ["Erik"], "k) Erik is in" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "k) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "k) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "k) Erik is in (using each)" );
		}

		else {
			ok( false, "k) others are not in (using each)" );
		}

	} );

} );
