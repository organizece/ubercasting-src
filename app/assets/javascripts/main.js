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
	
	function mapModelAge(){
		var objDate = new Date();
		var objYear = objDate.getFullYear();
		
		$('div#admin-model-insert-basic-info select#model_birthday_1i').change(function(event) {
			var optYear = $(this).val();
			
			if( (objYear - optYear) < 18 ){
				$('div.model-input-responsible').slideDown(400);
			}else{
				$('div.model-input-responsible').slideUp(400);
			}
			
		});
	}
	
	function mapModelMeasures(){
		
		$("#model_height").mask("9.99?99m");
		$("#model_weight").mask("99?99Kg");
		$("#model_bust").mask("99?99cm");
		$("#model_waist").mask("99?99cm");
		$("#model_hip").mask("99?99cm");
		$("#model_mannequin").mask("99");
		
	}
	
	function modelShowSecondInfo(){
		$('a#btn-model-show-data').click(function(event) {
			$('div#model-secondary-info').slideToggle(400);
		});
		
		$('a#btn-model-hide-data').click(function(event) {
			$('div#model-secondary-info').slideUp(400);
		});
	}
	
	btnFolderHover();
	dropdownMenuNav();
	searchAdvancedOpts();
	mapModelAge();
	mapModelMeasures();
	modelShowSecondInfo();

	//loginPanelSetup();
	
});