/**
 * Module Name: Joke
 *
 * compiles a few joke from the web for your daily consumption
*/

define([ 'modules/joke' ], function() {

	var module = {
		$form: $( 'form[name="joke-filter"]' ),
		$joke: $( '.js-joke' )
	};

	module.init = function() {
		module.getJokeParams();
	};

	module.getJokeParams = function() {
		var params = module.$form.serialize();
		console.log(params);
		module.getJoke( params );
	};
	
	module.getJoke = function( data ) {
		var url = 'http://api.icndb.com/jokes/random';

		$.get( url, data, module.displayJoke )
		.fail( function() {
			console.log( 'could not retrieve joke at this time' );
		});
	};

	module.displayJoke = function( data ) {
		module.$joke.text( data.value.joke );
	};

	return module;

});

