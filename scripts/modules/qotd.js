/**
 * Module Name: Quote of the day
 *
 * retrieves a daily quote for your enjoyment
*/

require([], function(){

	var module = {
		$container: $( '.js-qotd-container' ),
		$themeColorBtn: $( '.js-qotd-container .js-toggle-colors' ),
		$themeColors: $( '.js-theme-colors' ),
		$themeColor: $( '.js-qotd-container .js-theme-color' )
	};

	module.init = function() {
		module.$themeColorBtn.click( function() {
			module.$container.find( module.$themeColors ).fadeToggle( 200 );
		});

		module.$themeColor.click( module.applyThemeColor );
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