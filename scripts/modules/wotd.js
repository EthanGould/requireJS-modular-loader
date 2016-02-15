/**
 * Module Name: Word Of The Day
 *
 * grabs a new word from the web for your daily consumption
*/

require([], function() {

	var module = {
		$word: $( '.js-word' ),
		$definition: $( '.js-definition' ),
		$note: $( '.js-note' ),
		$example: $( '.js-example' ),
		$partOfSpeech: $( '.js-speech-part' )
	};

	module.init = function() {
		module.getWord();
	};

	module.getWord = function() {
		var year = 2015,
				month = Math.floor( Math.random() * 12 + 1 ),
				day = Math.floor( Math.random() * 28 + 1 ),
				date = year + '-' + month + '-' + day,
				key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
				url = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=' + date + '&api_key=' + key;

		$.get( url, module.getDefinition )
			.fail( function() {
				console.log('could not get a word');
			});
	};

	module.getDefinition = function( data ) {
		console.log( data );

		module.$word.text( data.word );
		module.$definition.text( data.definitions[0].text );
		module.$note.text( data.note );
		module.$example.text( data.examples[0].text );
		module.$partOfSpeech.text( data.definitions[0].partOfSpeech );
	};

	module.init();
});