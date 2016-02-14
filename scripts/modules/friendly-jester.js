/**
 * Module Name: Friendly Jester
 *
 * retrieves a joke starring a friend of your choosing
*/

require([ 'modules/joke' ], function( joke ){

	var module = {
		$name: $( 'input[name="firstName"]' ),
		$button: $( 'input[name="submit"]' )
	};

	module.init = function() {
		this.eventHandlers();
	};

	module.eventHandlers = function() {
		this.$button.click( joke.init );
	};

	module.init();

});
