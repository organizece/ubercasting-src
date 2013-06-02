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
			$('div#content-container-wrapper div.theme-home-model-box img').resizeToParent();
		};
	};
	
	function adjustHomeImgs() {
		$('div#content-container-wrapper div.theme-home-model-box img').each(function(index) {
			$('div#content-container-wrapper div.theme-home-model-box img').load(function() {
				var actualTop = $(this).css('top');
				var actualHeight = $(this).height();
				var actualWidth = $(this).width();
				if ( (actualTop != "-50px") && (actualHeight>actualWidth) ){
					$(this).css('top','-50px');
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
		
		$('div#home-slider').css({
			height: limitDisplay+'px',
			overflow: "hidden"
		});
		
		$('div#home-slider-container').css({
			height: slideHTot+'px',
			overflow: "visible"
		});
		
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
	
	setupNavBar();
	setupHomeImgs();
	stripesThemeSetup();
	checkSlideCall();
	customerRequestInputMask();
	
});