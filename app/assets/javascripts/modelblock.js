// JavaScript Document

$(document).ready(function() {

	function modelBlockMoreLinks(){
		$('div#models a.model-box-open-link').click(function(event) {

			var myIndex = $(this).parents("div.model-box").index();
			$('div.model-box:eq('+myIndex+') div.model-box-links li.closed').slideToggle(400);
			
		});
	}
	
	/*
		MODELS » SEARCH » LOAD SETUP
	*/
	function modelSearchLoadManage() {
		var onSearch = $('div#search-criteria-button').length;
		
		if ( onSearch > 0 ){
			if ( $('div#search-criteria-button input#btn-model-search').css('display') == "none" ){
				$('div#search-criteria-button img.search-criteria-load').hide();
				$('div#search-criteria-button input#btn-model-search').show();
			};
		};
	}
	
	/*
		MODELS » SEARCH » PROFILE PIC SETUP
	*/
	function searchSetupModelAvatar(){
		var hasModelResult = $('div#search-models-result').length;
		var hasCastingResult = $('div#casting-models-result').length;
		
		var coordObj = new Object();
		
		if ( hasModelResult > 0 ) {
			
			$('div.model-box').each(function(index) {

				if ( $(this).find('input#crop_x').val() != "" ){
					
					coordObj._orw = 0;
					coordObj._orh = 0;
					
					if ( $('div.model-box-img img',this).height() < 100 ){
						
						$('div.model-box-img img',this).load(function() {
							coordObj._x = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_x').val();
							coordObj._y = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_y').val();
							coordObj._w = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_w').val();
							coordObj._h = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_h').val();
							
							resizeProfilePicture($(this), coordObj);
						});
						
					}else{
						coordObj._x = $(this).find('input#crop_x').val();
						coordObj._y = $(this).find('input#crop_y').val();
						coordObj._w = $(this).find('input#crop_w').val();
						coordObj._h = $(this).find('input#crop_h').val();
						
						resizeProfilePicture($('div.model-box-img img',this), coordObj);
					};
					
				};
			});
		};
		
		if ( hasCastingResult > 0 ) {
			
			$('div.model-box').each(function(index) {

				if ( $(this).find('input#crop_x').val() != "" ){
				
					coordObj._orw = 0;
					coordObj._orh = 0;
					
					if ( $('div.model-box-img img',this).height() < 100 ){
						
						$('div.model-box-img img',this).load(function() {
							coordObj._x = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_x').val();
							coordObj._y = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_y').val();
							coordObj._w = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_w').val();
							coordObj._h = $(this).parent('.model-box-img').find('.model-box-checkbox input#crop_h').val();
							
							resizeProfilePicture($(this), coordObj);
						});
						
					}else{
						coordObj._x = $(this).find('input#crop_x').val();
						coordObj._y = $(this).find('input#crop_y').val();
						coordObj._w = $(this).find('input#crop_w').val();
						coordObj._h = $(this).find('input#crop_h').val();
						
						resizeProfilePicture($('div.model-box-img img',this), coordObj);
					};

				};
			});
			
		};
	};
	
	/*
		PROFILE PICTURE » RESIZE FUNCTION
	*/
	function resizeProfilePicture(domObj, coordObj){
		domObj.height(300);
		
		coordObj._orw = domObj.width();
		coordObj._orh = domObj.height();
		
		var rx = 300 / coordObj._w;
		var ry = 256 / (coordObj._h-30);

		domObj.css({
			width: Math.round(rx * coordObj._orw) + 'px',
			height: Math.round(ry * coordObj._orh) + 'px',
			marginLeft: '-' + Math.round(rx * coordObj._x) + 'px',
			marginTop: '-' + Math.round(ry * coordObj._y) + 'px'
		});
	};
	
	function modelMarkAll(){
		$('#models-mark-all').click(function(event) {
			event.preventDefault();
			
			if ( $('#models-mark-all').attr('class').indexOf("models-unmark-all") == -1 ){
				$('#models-mark-all').addClass('models-unmark-all');
				$('#models-mark-all').text('Deselecionar Todos');
				
				$('div.model-box-checkbox').each(function(index) {
				  	if ( !$('div.model-box-checkbox:eq('+index+') input').is(':checked') ){
						$('div.model-box-checkbox:eq('+index+') input').trigger('click');
					};

					$('div.model-box-checkbox:eq('+index+')').css('opacity', '1');
					$('div.model-box-checkbox:eq('+index+')').css('-moz-opacity', '1');
					$('div.model-box-checkbox:eq('+index+')').css('-webkit-opacity', '1');
					$('div.model-box-checkbox:eq('+index+')').css('-webkit-opacity', '1');
				});
				
			}else{
				$('#models-mark-all').removeClass('models-unmark-all');
				$('#models-mark-all').text('Selecionar Todos');
				
				$('div.model-box-checkbox').each(function(index) {
					if ( $('div.model-box-checkbox:eq('+index+') input').is(':checked') ){
						$('div.model-box-checkbox:eq('+index+') input').trigger('click');
					};
					$('div.model-box-checkbox:eq('+index+')').css('opacity', '0.5');
					$('div.model-box-checkbox:eq('+index+')').css('-moz-opacity', '0.5');
					$('div.model-box-checkbox:eq('+index+')').css('-webkit-opacity', '0.5');
					$('div.model-box-checkbox:eq('+index+')').css('-webkit-opacity', '0.5');
				});
			};
			
			
			
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
	modelSearchLoadManage();
	searchSetupModelAvatar();
	modelMarkAll();
	stripesThemeModelView();
	
});


