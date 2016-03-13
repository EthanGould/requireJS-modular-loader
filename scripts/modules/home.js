/**
 * Base JS for homepage widgets
*/

require([], function() {

	var module = {
		$backgroundToggleTriggers: $( '.toggle-button, .background-toggle span' ),
		$toggleButton: $( '.toggle-button' )
	};

	module.init = function() {
		this.eventHandlers();
	};

	module.eventHandlers = function() {
		var self = this;
		this.$backgroundToggleTriggers.click( self.toggleBackground );
	};

	module.toggleBackground = function() {
		console.log( 'clicked ');
		module.$toggleButton.toggleClass( 'on' );
		$( 'body' ).toggleClass( 'animate' );
	};

	module.init();
});