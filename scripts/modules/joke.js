/**
 * Module Name: Joke
 *
 * compiles a few joke from the web for your daily consumption
*/

define([ 'modules/joke' ], function() {

	var module = {
		$container: $( '.js-joke-container' ),
		$form: $( 'form[name="joke-filter"]' ),
		$joke: $( '.js-joke' ),
		$themeColorBtn: $( '.js-joke-container .js-toggle-colors' ),
		$themeColors: $( '.js-theme-colors' ),
		$themeColor: $( '.js-joke-container .js-theme-color' )
	};

	module.init = function() {
		module.eventHandlers();
		module.getJokeParams();
	};

	module.eventHandlers = function() {
		module.$themeColorBtn.click( function() {
			module.$container.find( module.$themeColors ).fadeToggle( 200 );
		});

		module.$themeColor.click( module.applyThemeColor );
	};

	module.getJokeParams = function() {
		var params = module.$form.serialize();
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

	module.applyThemeColor = function() {
		var background = $( this ).data( 'background' );
		var color = $( this ).data( 'color' );
		
		module.$container.css({
			background: background,
			color: color
		});
	};

	return module;

});

