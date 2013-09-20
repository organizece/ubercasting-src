// JavaScript Document

$(document).ready(function(){

	function setupNavBar(){
		var sectionID = $('div#content-container-wrapper div:eq(1)').attr('id');
		var mySection = "";

		if ( sectionID != undefined && sectionID != "undefined" ){
			if( sectionID != "admin-model-manage-container" ){
				mySection = sectionID.substring(0, sectionID.indexOf("-"));
			}else{
				mySection = "models";
			};
		};

		$('div#main-nav ul li a').removeClass('active');

		switch(mySection){
			case "home":
				$('div#main-nav ul li.link-home a').addClass('active');
			break;
			case "about":
				$('div#main-nav ul li.link-about a').addClass('active');
			break;
			case "bemodel":
				$('div#main-nav ul li.link-be-model a').addClass('active');
			break;
			case "contactus":
				$('div#main-nav ul li.link-contact a').addClass('active');
			break;
			case "models":
				$('div#main-nav ul li.link-models a').addClass('active');
			break;
			case "casting":
				$('div#main-nav ul li.link-casting a').addClass('active');
			break;
			case "customer":
				$('div#main-nav ul li.link-register a').addClass('active');
			break;
		}
	}
	
	/*
		HOME » RESIZE IMG DISPLAY
	*/
	function setupHomeImgs(){
		if ($('div.theme-home-model-box').length > 0) {
			var imgSeconds = ($('div.theme-home-model-box img').length * 0.05) * 1000;

			$('div#slide-loader').show();
			
			var imgTimer = setInterval(function(){
				console.log("Start Time Interval Function");
				$('div.theme-home-model-box img').each(function(index) {
					$(this).resizeToParent();
					console.log(index+") "+$(this).width());
				});
				$('div#slide-loader').hide();
				clearInterval(imgTimer);
			},imgSeconds);
		};
	};
	
	/*
		STYLISH THEME - HOME IMAGES ADJUSTMENTS
	*/
	function adjustHomeImgs() {
		$('div#content-container-wrapper div.theme-home-model-box img').each(function(index) {
			$(this).load(function() {
				$(this).css({
				  width: $(this).parent('div').width(),
				  top: '-50px'
				});
				
				if ( ($(this).height() - 50) < $(this).parent('div').height() ){
					var newHeight = $(this).height() + 25;
					$(this).height(newHeight);
				};
			});
		});
	}
	
	/*
		HOME » CHECK WICH SLIDE SETUP CALL
	*/
	function checkSlideCall(){
		var hasSlide = $('div.is-slide-show').length;
		
		if ( hasSlide > 0 ){
			var currentTheme = $('input#current-theme').val();
			if ( currentTheme == "stylish-theme" ){
				slideShowVertUpdate();
				adjustHomeImgs();
			}else{
				setupHomeImgs();
				slideShowUpdate();
			};
		};
		
	};
	
	/*
		HOME » CALL VERTICAL SLIDE SETUP
	*/
	function slideShowVertUpdate() {
		var slideShowLines = $('input#slide-show-lines').val();
		var slideShowCols = $('input#slide-show-cols').val();
		var slideTotal = $('div.theme-home-model-box').length;
		
		var slideH = $('div.theme-home-model-box').height();
		slideH = slideH + parseInt($('div.theme-home-model-box').css('margin-bottom'),10);
		slideH = slideH + parseInt($('div.theme-home-model-box').css('margin-top'),10);
		var slideW = $('div.theme-home-model-box').width();
		
		var slideHTot = (slideH*slideTotal)/slideShowCols;
		var slideWTot = $('div.theme-home-model-box').width()*slideShowCols;
		
		var slidePos = 0;
		var limitDisplay = slideShowLines * slideH;
		
		if ( (slideH <= 50) || (slideH == 0) ){
			$('div.theme-home-model-box img').load(function() {
				slideH = $('div.theme-home-model-box').height();
				slideH = slideH + parseInt($('div.theme-home-model-box').css('margin-bottom'),10);
				slideH = slideH + parseInt($('div.theme-home-model-box').css('margin-top'),10);
				slideW = $('div.theme-home-model-box').width();

				slideHTot = (slideH*slideTotal)/slideShowCols;
				slideWTot = $('div.theme-home-model-box').width()*slideShowCols;

				slidePos = 0;
				limitDisplay = slideShowLines * slideH;
				
				$('div#home-slider').css({
					height: limitDisplay+'px',
					overflow: "hidden"
				});

				$('div#home-slider-container').css({
					height: slideHTot+'px',
					overflow: "visible"
				});
			});
		}else{
			$('div#home-slider').css({
				height: limitDisplay+'px',
				overflow: "hidden"
			});

			$('div#home-slider-container').css({
				height: slideHTot+'px',
				overflow: "visible"
			});
		};
		
		$('a#btn-left').click(function(event) {
			event.preventDefault();
			var canvas = (slideHTot - limitDisplay)*-1;
			if ( slidePos > canvas ){
				slidePos -= slideH;
				$('div#home-slider-container').animate({"margin-top": slidePos+"px"}, "fast");
			};
		});
	
		$('a#btn-right').click(function(event) {
			event.preventDefault();
			if ( slidePos < 0 ){
				slidePos += slideH;
				$('div#home-slider-container').animate({"margin-top": slidePos+"px"}, "fast");
			};
		});
	}
	
	/*
		HOME » SLIDE SHOW HORIZONTAL SETUP
	*/
	function slideShowUpdate() {
		var slideShowLines = $('input#slide-show-lines').val();
		var slideShowCols = $('input#slide-show-cols').val();
		var slideTotal = $('div.theme-home-model-box').length;
		
		var slideH = $('div.theme-home-model-box').height();
		var slideW = $('div.theme-home-model-box').width() + parseInt($('div.theme-home-model-box').css('margin-left'),10) + parseInt($('div.theme-home-model-box').css('margin-right'),10);

		var slideHTot = $('div.theme-home-model-box').height();
		var slideWTot = $('div.theme-home-model-box').width()*slideTotal;
		
		var slidePos = 0;
		var limitDisplay = slideShowCols * slideW;
		
		if ( (slideH <= 50) || (slideH == 0) ){
			$('div.theme-home-model-box img').load(function() {

				slideH = $('div.theme-home-model-box').height();
				slideW = $('div.theme-home-model-box').width() + parseInt($('div.theme-home-model-box').css('margin-left'),10) + parseInt($('div.theme-home-model-box').css('margin-right'),10);

				slideHTot = $('div.theme-home-model-box').height();
				slideWTot = $('div.theme-home-model-box').width()*slideTotal;

				slidePos = 0;
				limitDisplay = slideShowCols * slideW;
				
				$('div#home-slider').css({
					height: slideHTot+'px',
					overflow: "hidden"
				});

				$('div#home-slider-container').css({
					height: slideHTot+'px',
					width: slideWTot+'px',
					overflow: "visible"
				});
			});
		}else{
			$('div#home-slider').css({
				height: slideHTot+'px',
				overflow: "hidden"
			});

			$('div#home-slider-container').css({
				height: slideHTot+'px',
				width: slideWTot+'px',
				overflow: "visible"
			});
		};
		
		$('a#btn-left').click(function(event) {
			event.preventDefault();
			if ( slidePos > ((slideWTot * -1)+limitDisplay) ){
				slidePos -= slideW;
				$('div#home-slider-container').animate({"margin-left": slidePos+"px"}, "fast");
			};
		});
		
		$('a#btn-right').click(function(event) {
			event.preventDefault();
			if ( slidePos < 0 ){
				slidePos += slideW;
				$('div#home-slider-container').animate({"margin-left": slidePos+"px"}, "fast");
			};
		});
	};
	
	function stripesThemeSetup(){
		var currentTheme = $('input#current-theme').val();
		
		if ( currentTheme == "stripe-theme" ){
			
			//Small Photo Mosaic
			$('div#about-content-picture ul#about-picture-list li.about-picture img');
			$('div#mosaic-bottom ul li img').resizeToParent({parent: '.mosaic-container'});
			
		};
	}
	
	/*
		SUBDOMAIN » PHONE NUMBER MASK
	*/
	function customerRequestInputMask(){
		var isCustomerReq = $('div#customer-request-form').length;
		if ( isCustomerReq > 0 ){
			$('input#agency_customer_request_phone').mask("(99) 9999-9999");
		};
	}
	
	/*
		SUBDOMAIN » CASTING » TOUR
	*/
	function castingTour(){
		var onCasting = $('div#casting-manager').length;
		
		if ( onCasting > 0 ){
			
			var topPost = new Array("-190px","-165px","-85px");
			var arrowsDisplay = new Array("side","side","br");
			var contentNum = topPost.length;
			var tourIndex = 0;
			
			//SETUP BULLETS
			$('div#tour-box div#tour-bullets a').remove();
			for (var i = 0; i < contentNum; i++) {
				$('div#tour-box div#tour-bullets').append('<a href="#" class="off">&nbsp;</a>');
			};
			
			//HIDE ARROWS
			$('div#tour-box div#tour-arrows img').hide();
			
			//START TOUR
			$('a#casting-take-tour').click(function(event) {
				event.preventDefault();
				
				$('div#tour-box div.tour-content').hide();
				$('div#tour-box div.tour-content:eq('+tourIndex+')').show();
				
				$('div#tour-box div#tour-bullets a').addClass('off');
				$('div#tour-box div#tour-bullets a:eq('+tourIndex+')').removeClass('off');
				
				$('div#tour-box').fadeIn('slow');
				$('div#tour-box').animate({"margin-top": topPost[tourIndex]}, "slow");
				
				changeTourArrows( arrowsDisplay[tourIndex] );
				
			});
			
			//NEXT BUTTON
			$('div#tour-box a#btn-tour-next').click(function(event) {
				event.preventDefault();
				
				if ( tourIndex < (contentNum-1) ){
					tourIndex++;
					if ( tourIndex == 2 ){ $(this).text('CONCLUIR'); };
					
					$('div#tour-box div.tour-content').hide();
					$('div#tour-box div.tour-content:eq('+tourIndex+')').show();
					
					$('div#tour-box div#tour-bullets a').addClass('off');
					$('div#tour-box div#tour-bullets a:eq('+tourIndex+')').removeClass('off');
					
					$('div#tour-box').animate({"margin-top": topPost[tourIndex]}, "slow");
					
					changeTourArrows( arrowsDisplay[tourIndex] );
				}else{
					$('div#tour-box').fadeOut('fast', function() {
						$('div#tour-box a#btn-tour-next').text('PRÓXIMO');
					});
					
					tourIndex = 0;
				};
			});
			
		};
	};
	
	/*
		SUBDOMAIN » CASTING MODEL » TOUR
	*/
	function castingModelTour(){
		var onCasting = $('div#casting-models-result').length;
		
		if ( onCasting > 0 ){
			
			var topPost = new Array("300px");
			var arrowsDisplay = new Array("sl");
			var contentNum = topPost.length;
			var tourIndex = 0;
			
			//SETUP BULLETS
			$('div#tour-box div#tour-bullets a').remove();
			for (var i = 0; i < contentNum; i++) {
				$('div#tour-box div#tour-bullets').append('<a href="#" class="off">&nbsp;</a>');
			};
			
			//HIDE ARROWS
			$('div#tour-box div#tour-arrows img').hide();
			
			//START TOUR
			$('a#casting-take-tour').click(function(event) {
				event.preventDefault();
				
				$('div#tour-box div.tour-content').hide();
				$('div#tour-box div.tour-content:eq('+tourIndex+')').show();
				
				$('div#tour-box div#tour-bullets a').addClass('off');
				$('div#tour-box div#tour-bullets a:eq('+tourIndex+')').removeClass('off');
				
				$('div#tour-box').animate({top: topPost[tourIndex], "margin-left": "-80px"}, "slow");
				$('div#tour-box').fadeIn('slow');
				
				changeTourArrows( arrowsDisplay[tourIndex] );
				
			});
			
			//NEXT BUTTON
			$('div#tour-box a#btn-tour-next').click(function(event) {
				event.preventDefault();
				$('div#tour-box').fadeOut('fast');
				tourIndex = 0;
			});
			
		};
	};
	
	/*
		SUBDOMAIN » CHANGE ARROWS DISPLAY
	*/
	function changeTourArrows( arrowsDisplay ){
		$('div#tour-box div#tour-arrows img').hide();
		switch( arrowsDisplay ){
			case "side":
				$('div#tour-box div#tour-arrows img#arrow-side-left').fadeIn('slow');
				$('div#tour-box div#tour-arrows img#arrow-side-right').fadeIn('slow');
			break;
			case "sl":
				$('div#tour-box div#tour-arrows img#arrow-side-left').fadeIn('slow');
			break;
			case "sr":
				$('div#tour-box div#tour-arrows img#arrow-side-right').fadeIn('slow');
			break;
			case "br":
				$('div#tour-box div#tour-arrows img#arrow-bottom-right').fadeIn('slow');
			break;
			case "tl":
				$('div#tour-box div#tour-arrows img#arrow-top-left').fadeIn('slow');
			break;
			
		}
	}
	
	setupNavBar();
	stripesThemeSetup();
	checkSlideCall();
	customerRequestInputMask();
	castingTour();
	castingModelTour();
	
});