/**
 * Module Name: Friendly Jester
 *
 * retrieves a joke starring a friend of your choosing
*/

var exports = ( function( $ ) {

	var module = {};

	var el = {
		$name: $( 'input[name="name"]' ),
		$category: $( 'select[name="category"' ),
		$joke: $( '.js-joke' ),
		$button: $( 'input[name="submit"]' )
	};
	

	module.init = function() {
		this.eventHandlers();
	};

	module.eventHandlers = function() {
		el.$button.click( module.getJoke );
	};

	module.getJoke = function() {
		$.get( 'http://api.icndb.com/jokes/random?limitTo=[' + el.$category.val() + ']&firstName=' + el.$name.val() + '&lastName=', module.displayJoke )
		.fail( function() {
			console.log( 'could not retrieve joke at this time' );
		});
	};

	module.displayJoke = function(data) {
		el.$joke.text( data.value.joke );
	};

	module.init();

}( jQuery ) );