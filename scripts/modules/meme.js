/**
 * Module Name: Random Meme
 *
*/

define([], function() {

	var module = {
		$meme: $( '.js-meme' )
	};

	module.init = function() {
		module.getMeme();
	};

	module.displayMeme = function( data ) {
		JSON.parse( data );
	};
	
	module.getMeme = function() {
		var url = 'http://version1.api.memegenerator.net/Instances_Select_ByNew?languageCode=en&pageIndex=0&pageSize=24';

		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'jsonp',
			jsonpCallback: 'module.displayMeme',
			success: function() { consol.log( $.parseJSON( data ) ); },
			error: function( err ){ console.log(err); },
			complete: function() { console.log('request done'); }
		});
	};

	module.init();
});
