$(document).ready(function(){
	
	function setupCompositeNav(){
		
		var hasModelsResult = $('div#search-models-result').length;
		var hasCastingResult = $('div#casting-models-result').length;
		
		if( hasModelsResult > 0 || hasCastingResult > 0 ){
			
			var modelBoxCount = $('div.model-box').size();
			var currentID = 0;
			
			$('div.model-box li.model-box-view-composite a').click(function(event) {
				
				for (var i = 0; i < modelBoxCount; i++) {
					$('div.model-box:eq('+i+')').removeClass('composite-open');
				};
				
				currentID = $(this).parents('div.model-box').index();
				$('div.model-box:eq('+currentID+')').addClass('composite-open');
				
			});
			
		};
		
	}
	
	setupCompositeNav();
	
});