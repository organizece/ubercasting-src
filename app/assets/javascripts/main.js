// JavaScript Document

$(document).ready(function(){
	
	function loginPanelSetup(){
		
		var isOn = false;
		
		$("a.btn-login").click(function(){
			
			$("div#login-panel").fadeToggle("fast");
			
			if( !isOn ){ 
				
				isOn = true;
				$("a.btn-login").addClass("login-active");
				
			}else{ 
				
				isOn = false;
				$("a.btn-login").removeClass("login-active");
				
			}
			
		});
		
	}
	
	function btnFolderHover(){
		
		$('div.bottom-column').mouseenter(function(event) {
			var myIndex = $(this).index();
			$('div.bottom-column:eq('+myIndex+') div.img-container').addClass('folder-hover');
		});
		
		$('div.bottom-column').mouseleave(function(event) {
			var myIndex = $(this).index();
			$('div.bottom-column:eq('+myIndex+') div.img-container').removeClass('folder-hover');
		});
		
	}
	
	function dropdownMenuNav(){
		$('li.hasdrop').mouseenter(function(event) {
			$(this).addClass('hoveractive');
			$('ul.dropdown',this).addClass('dropdown-active');
		});
		
		$('li.hasdrop').mouseleave(function(event) {
			$(this).removeClass('hoveractive');
			$('ul.dropdown',this).removeClass('dropdown-active');
		});
	}
	
	function searchAdvancedOpts(){
		$('a#search-criteria-adv-opts').click(function(event) {
			$('div#search-criteria-advanced').slideToggle(400);
		});
	}
	
	btnFolderHover();
	dropdownMenuNav();
	searchAdvancedOpts();

	//loginPanelSetup();
	
});