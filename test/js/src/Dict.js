
test( "Dict" , function () {

	var buddies, fallback, updater;

	fallback = Math.random();

	buddies = new dict.Dict( {} );

	strictEqual( buddies.length, 0, "a) length is 0" );


	buddies.set( "Camus", "Albert" );

	strictEqual( buddies.length, 1, "b) length is 1" );

	strictEqual( buddies.get( "Camus" ), "Albert", "b) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), undefined, "b) Konrad is not in" );
	strictEqual( buddies.get( "Satie" ), undefined, "b) Erik is not in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "b) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), fallback, "b) Konrad is not in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), fallback, "b) Erik is not in (using fallback)" );

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

	strictEqual( buddies.get( "Camus" ), "Albert", "c) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Konrad", "c) Konrad is in" );
	strictEqual( buddies.get( "Satie" ), undefined, "c) Erik is not in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "c) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Konrad", "c) Konrad is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), fallback, "c) Erik is not in (using fallback)" );

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

	strictEqual( buddies.get( "Camus" ), "Albert", "d) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Konrad", "d) Konrad is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "d) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "d) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Konrad", "d) Konrad is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "d) Erik is in (using fallback)" );

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

	strictEqual( buddies.get( "Camus" ), "Albert", "e) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "e) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "e) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "e) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "e) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "e) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "e) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "e) Edward Norton is in (using each)" );
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

	strictEqual( buddies.get( "Camus" ), "ALBERT", "f) ALBERT is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "f) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "f) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "ALBERT", "f) ALBERT is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "f) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "f) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "ALBERT", "f) ALBERT is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "f) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "f) Erik is in (using each)" );
		}

		else {
			ok( false, "f) others are not in (using each)" );
		}

	} );


	buddies.setdefault( "Camus", "Albert" );

	strictEqual( buddies.length, 3, "g) length is 3" );

	strictEqual( buddies.get( "Camus" ), "ALBERT", "g) ALBERT is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "g) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "g) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "ALBERT", "g) ALBERT is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "g) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "g) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "ALBERT", "g) ALBERT is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "g) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "g) Erik is in (using each)" );
		}

		else {
			ok( false, "g) others are not in (using each)" );
		}

	} );


	buddies.unset( "Camus" );

	strictEqual( buddies.length, 2, "h) length is 2" );

	strictEqual( buddies.get( "Camus" ), undefined, "h) ALBERT is not in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "h) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "h) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), fallback, "h) ALBERT is not in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "h) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "h) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			ok( false, "h) ALBERT is not in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "h) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "h) Erik is in (using each)" );
		}

		else {
			ok( false, "h) others are not in (using each)" );
		}

	} );


	buddies.setdefault( "Camus", "Albert" );

	strictEqual( buddies.length, 3, "i) length is 3" );

	strictEqual( buddies.get( "Camus" ), "Albert", "i) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "i) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "i) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "i) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "i) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "i) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "i) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "i) Edward Norton is in (using each)" );
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

	strictEqual( buddies.get( "Camus" ), "Albert", "j) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "j) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "j) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "j) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "j) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "j) Erik is in (using fallback)" );

	buddies.each( function ( key, value ) {

		if ( key === "Camus" ) {
			strictEqual( value, "Albert", "j) Albert is in (using each)" );
		}

		else if ( key === "Lorenz" ) {
			strictEqual( value, "Edward Norton", "j) Edward Norton is in (using each)" );
		}

		else if ( key === "Satie" ) {
			strictEqual( value, "Erik", "j) Erik is in (using each)" );
		}

		else {
			ok( false, "j) others are not in (using each)" );
		}

	} );


	buddies = new dict.Dict( {
		"Camus" : "Albert",
		"Lorenz" : "Edward Norton",
		"Satie" : "Erik"
	} );

	strictEqual( buddies.length, 3, "k) length is 3" );

	strictEqual( buddies.get( "Camus" ), "Albert", "k) Albert is in" );
	strictEqual( buddies.get( "Lorenz" ), "Edward Norton", "k) Edward Norton is in" );
	strictEqual( buddies.get( "Satie" ), "Erik", "k) Erik is in" );

	strictEqual( buddies.getdefault( "Camus", fallback ), "Albert", "k) Albert is in (using fallback)" );
	strictEqual( buddies.getdefault( "Lorenz", fallback ), "Edward Norton", "k) Edward Norton is in (using fallback)" );
	strictEqual( buddies.getdefault( "Satie", fallback ), "Erik", "k) Erik is in (using fallback)" );

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
