// JavaScript Document

$(document).ready(function(){

	function modelBlockMoreLinks(){
		$('div#models a.model-box-open-link').click(function(event) {

			var myIndex = $(this).parents("div.model-box").index();
			$('div.model-box:eq('+myIndex+') div.model-box-links li.closed').slideToggle(400);
			
		});
	}
	
	function searchSetupModelAvatar(){
		var hasModelResult = $('div#search-models-result').length;
		var hasCastingResult = $('div#casting-models-result').length;
		
		if ( hasModelResult > 0 ) {
			$('#search-models-result .model-box .model-box-img img').resizeToParent();
		};
		
		if ( hasCastingResult > 0 ) {
			$('#casting-models-result .model-box .model-box-img img').resizeToParent();
		};
	}
	
	modelBlockMoreLinks();
	searchSetupModelAvatar();
	
});