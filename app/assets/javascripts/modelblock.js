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
	
	function modelMarkAll(){
		$('#models-mark-all').click(function(event) {
			event.preventDefault();
			
			$('div.model-box-checkbox input').trigger('click');
			$('div.model-box-checkbox').css('opacity', '1');
			$('div.model-box-checkbox').css('-moz-opacity', '1');
			$('div.model-box-checkbox').css('-webkit-opacity', '1');
			$('div.model-box-checkbox').css('-webkit-opacity', '1');
			
		});
	}
	
	function stripesThemeModelView(){
		var currentTheme = $('input#current-theme').val();
		
		if ( currentTheme == "stripe-theme" ){
			//Model Search Mouse Over
			$('div.model-box').each(function(index) {
			  $(this).find('div.model-box-links').hide();
			});

			$('div.model-box').each(function(index) {
			  $(this).mouseenter(function(event) {
			  	$(this).find('div.model-box-links').show();
			  });

			  $(this).mouseleave(function(event) {
			  	$(this).find('div.model-box-links').hide();
			  });
			});
		}
	}
	
	modelBlockMoreLinks();
	searchSetupModelAvatar();
	modelMarkAll();
	stripesThemeModelView();
	
});