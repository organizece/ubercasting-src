// JavaScript Document

$(document).ready(function(){
	
	function setupNavBar(){
		var sectionID = $('div#content-container-wrapper div:eq(1)').attr('id');
		var mySection = "";
		
		if( sectionID != "admin-model-manage-container" ){
			mySection = sectionID.substring(0, sectionID.indexOf("-"));
		}else{
			mySection = "models";
		}

		$('div#main-nav ul li a').removeClass('active');
		
		switch(mySection){
			case "home":
				$('div#main-nav ul li a:eq(0)').addClass('active');
			break;
			case "about":
				$('div#main-nav ul li a:eq(1)').addClass('active');
			break;
			case "bemodel":
				$('div#main-nav ul li a:eq(6)').addClass('active');
			break;
			case "contactus":
				$('div#main-nav ul li a:eq(4)').addClass('active');
			break;
			case "models":
				$('div#main-nav ul li a:eq(2)').addClass('active');
			break;
			case "casting":
				$('div#main-nav ul li a:eq(3)').addClass('active');
			break;
			
		}
	}
	
	var myLoadTime = "";
	var myLoadTimeCount = "";
	
	function setupHomeImgs(){
		if ($('div.theme-home-model-box').length > 0) {
			$('div#content-container-wrapper div.theme-home-model-box img').resizeToParent();
			myLoadTimeCount = parseInt($('div#content-container-wrapper div.theme-home-model-box img').length * 0.12,0) + 1;
			myLoadTimeCount = myLoadTimeCount * 1000;
			myLoadTime = setInterval(setupSlideShow,myLoadTimeCount);
		};
	}
	
	function setupSlideShow() {
		
		clearInterval(myLoadTime);
		
		$('div#slide-loader').fadeOut('slow');
		
		var hasSlide = $('div.is-slide-show').length;
		
		if(hasSlide > 0){
			var myID = $('div.is-slide-show').index();
			//var myClass = $('div#content-container-wrapper div:eq('+myID+')').attr('class');
			var myClass = $('input#slide-show-photo').val();
			var panelImg = myClass.substring(myClass.lastIndexOf("-")+1,myClass.length);
			var totalPanels = $('div.is-slide-show div.theme-home-model-box').length / panelImg;
			var totalImgs = $('div.theme-home-model-box').length;
			
			var show_per_page = panelImg;
			var number_of_items = totalImgs;
			var number_of_pages = Math.ceil(number_of_items/show_per_page);
			
			$('#current_page').val(0);
			$('#show_per_page').val(show_per_page);
			
			$('#home-slider').children().css('display', 'none');
			$('#home-slider').children().slice(0, show_per_page).css('display', 'block');
			
			$('div#slide-photo-nav a#btn-left').click(function(event) {
				event.preventDefault();
				var currentPage = $('#current_page').val();
				if( currentPage > 0 ){ currentPage--; }else{ currentPage = number_of_pages-1; };
				$('#current_page').val(currentPage);
				updateSlide.goToPage(currentPage);
			});
			
			$('div#slide-photo-nav a#btn-right').click(function(event) {
				event.preventDefault();
				var currentPage = $('#current_page').val();
				if( currentPage < number_of_pages-1 ){ currentPage++; }else{ currentPage = 0; };
				$('#current_page').val(currentPage);
				updateSlide.goToPage(currentPage);
			});
			
			var updateSlide = {
				goToPage : function(page_num){
					var start_from = page_num * show_per_page;
					var end_on = parseInt(start_from,10) + parseInt(show_per_page,10);
					
					$('div#home-slider').fadeOut('fast', function() {
						$('#home-slider').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
					});
					$('div#home-slider').fadeIn('slow');
					
				}
			};
			
		};
		
	}
	
	function searchSetupModelAvatar() {
		var hasModelResult = $('div#search-models-result').length;
		if ( hasModelResult > 0 ) {
			$('#search-models-result .model-box .model-box-img img').resizeToParent();
		};
	}
	
	function stripesThemeSetup(){
		var currentTheme = $('input#current-theme').val();
		
		if ( currentTheme == "stripe-theme" ){
			
			//Small Photo Mosaic
			$('div#about-content-picture ul#about-picture-list li.about-picture img');
			$('div#mosaic-bottom ul li img').resizeToParent({parent: '.mosaic-container'});
			
		};
	}
	
	setupNavBar();
	setupHomeImgs();
	searchSetupModelAvatar();
	stripesThemeSetup();
	
});