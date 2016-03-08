/**
 * Module Name: Friendly Jester
 *
 * retrieves a joke starring a friend of your choosing
*/

require([ 'modules/joke' ], function( joke ){

	var module = {
		$name: $( 'input[name="firstName"]' ),
		$button: $( 'input[name="submit"]' ),
		$themeColorBtn: $( '.js-toggle-colors' ),
		$themeColors: $( '.js-theme-colors' ),
		$themeColor: $( '.js-theme-color' )
	};

	module.init = function() {
		this.eventHandlers();
		joke.init();
	};

	module.eventHandlers = function() {
		this.$button.click( joke.init );
	};

	module.applyThemeColor = function() {
		var background = $( this ).data( 'background' );
		var color = $( this ).data( 'color' );
		
		module.$container.css({
			background: background,
			color: color
		});
	};

	module.init();

});
