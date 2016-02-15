/**
 * Module Name: Word Of The Day
 *
 * grabs a new word from the web for your daily consumption
*/

require([], function() {

	var module = {
		$container: $( '.js-container' ),
		$wordDetails: $( '.word-details' ),
		$word: $( '.js-word' ),
		$definition: $( '.js-definition' ),
		$note: $( '.js-note' ),
		$example: $( '.js-example' ),
		$partOfSpeech: $( '.js-speech-part' ),
		$loading: $( '.loading' ),
		$themeColorBtn: $( '.js-toggle-colors' ),
		$themeColors: $( '.js-theme-colors' ),
		$themeColor: $( '.js-theme-color' )
	};

	module.init = function() {
		module.eventHandlers();
		module.getWord();
	};

	module.eventHandlers = function() {
		module.$themeColorBtn.click( function() {
			module.$themeColors.fadeToggle( 200 );
		});

		module.$themeColor.click( module.applyThemeColor );
	};

	module.getWord = function() {
		//		year = 2015,
		// 		month = Math.floor( Math.random() * 12 + 1 ),
		// 		day = Math.floor( Math.random() * 28 + 1 ),
		// 		date = year + '-' + month + '-' + day,

		var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate();
				today = year +'-'+ month +'-'+ day;

				key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
				url = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=' + today + '&api_key=' + key;
		module.$loading.show();
		module.$wordDetails.hide();
		$.get( url, module.getDefinition )
			.fail( function() {
				console.log('could not get a word');
			})
			.complete( function() {
				module.$loading.hide();
				module.$wordDetails.show();
			});
	};

	module.getDefinition = function( data ) {
		module.$word.text( data.word );
		module.$definition.text( data.definitions[0].text );
		module.$note.text( data.note );
		module.$example.text( data.examples[0].text );
		module.$partOfSpeech.text( data.definitions[0].partOfSpeech );
	};

	module.applyThemeColor = function() {
		var color = $( this ).data( 'color' );
		var text = $( this ).data( 'text' );
		module.$container.css({
			backgroundColor: color,
			color: text
		});
	};

	module.init();
});