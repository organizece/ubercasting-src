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
				$('div.model-input-responsible div.put-left:eq(0)').addClass('field-isreq');
				$('div.model-input-responsible div.put-left:eq(1)').addClass('field-isreq');
				$('div.model-input-responsible div.put-left:eq(2)').addClass('field-isreq');
			}else{
				$('div.model-input-responsible').slideUp(400);
				$('div.model-input-responsible div.put-left:eq(0)').removeClass('field-isreq');
				$('div.model-input-responsible div.put-left:eq(1)').removeClass('field-isreq');
				$('div.model-input-responsible div.put-left:eq(2)').removeClass('field-isreq');
			}
			
		});
	}
	
	function externaModelAge(){
		var objDate = new Date();
		var objYear = objDate.getFullYear();
		
		var optYear = $('div#admin-model-insert-basic-info select#model_birthday_1i').val();
		
		if( (objYear - optYear) < 18 ){
			$('div.model-input-responsible').slideDown(400);
		}else{
			$('div.model-input-responsible').slideUp(400);
		}
	}
	
	function checkModelAgeBox(){
		var hasVal = "";
		
		for( p in $('div.model-input-responsible input') ){
			hasVal = $('div.model-input-responsible input:eq('+p+')').val();
			if( hasVal != "" ){ $('div.model-input-responsible').slideDown(400); }
		}
		
	}
	
	function mapModelMeasures(){
		
		if ( $("#model_height").length > 0 ){
			
			$("#model_height").mask("9.99?99m");
			$("#model_weight").mask("99?99Kg");
			$("#model_bust").mask("99?99cm");
			$("#model_waist").mask("99?99cm");
			$("#model_hip").mask("99?99cm");
			$("#model_mannequin").mask("99");
			
		};
		
	}
	
	function modelShowSecondInfo(){
		$('a#btn-model-show-data').click(function(event) {
			$('div#model-secondary-info').slideToggle(400);
		});
		
		$('a#btn-model-hide-data').click(function(event) {
			$('div#model-secondary-info').slideUp(400);
		});
		
		var hasComposite = $('div#model-info-composite').size();
		
		if( hasComposite == 1 ){
			
			$('#model-info-composite div#composite-cover img').resizecrop({
				width:400,
			    height:560,
			    vertical:"top"
			});
			
			$('#model-info-composite div.composite-thumbs img').resizecrop({
				width:190,
				height:220,
				vertical:"top"
			});
			
		};
		
		var hasGallery = $('div#model-photo-gallery ul#model-gallery').size();
		var modelGalleryImg = $('div#model-photo-gallery ul#model-gallery li img');
		
		if( hasGallery == 1 ){
			
			for( p in modelGalleryImg ){
				$('div#model-photo-gallery ul#model-gallery li img:eq('+p+')').css("width","auto");
				$('div#model-photo-gallery ul#model-gallery li img:eq('+p+')').css("height","auto");
				$('div#model-photo-gallery ul#model-gallery li img:eq('+p+')').resizecrop({
					width:140,
					height:140
				});
			}
			
		}
		
	}
	
	function modelFormValidation(){
		
		if( $('form#new_model').length != 0 ){
			
			var form = $('form#new_model');
			var formInputsCount = form.find("input").length;
			var formInputSubmit;

			var reqCount;
			var fieldInput;
			var fieldVal;
			var fieldContainer;
			var sendForm;

			var defaultErrorMsg = '<div class="field-error-msg"><p>* Este campo é orbigatório.</p></div>';

			//Store the SUBMIT Btn Inside Variable
			for (var i = 0; i < formInputsCount; i++) {
				if ( form.find("input:eq("+i+")").attr("type") == "submit" ){
					formInputSubmit = form.find("input:eq("+i+")");
				};
			};

			//Check How Many are required - div.form-isreq
			formInputSubmit.click(function(event) {

				reqCount = form.find("div.field-isreq").length;
				sendForm = new Array(reqCount);

				for (var p = 0; p < reqCount; p++) {

					fieldContainer = form.find("div.field-isreq:eq("+p+")");

					if( form.find("div.field-isreq:eq("+p+") input").length == 1 ){
						fieldInput = form.find("div.field-isreq:eq("+p+") input");
						fieldVal = form.find("div.field-isreq:eq("+p+") input").val();
					}else{
						fieldInput = form.find("div.field-isreq:eq("+p+") select");
						fieldVal = form.find("div.field-isreq:eq("+p+") select").val();
					};

					if( fieldVal == "" || fieldVal == undefined || fieldVal == "undefined" ){

						fieldContainer.addClass('field-isreq-active');

						if( form.find("div.field-isreq:eq("+p+") div.field-error-msg").length == 0 ){
							fieldContainer.append(defaultErrorMsg);
						}

						sendForm[p] = false;

					}else{

						fieldContainer.removeClass('field-isreq-active');
						sendForm[p] = true;

						if( form.find("div.field-isreq:eq("+p+") div.field-error-msg").length == 1 ){
							fieldContainer.find('div.field-error-msg').remove();
						};

					}

				};

				for (var m = 0; m < sendForm.length; m++) {

					if( !sendForm[m] ){
						externaModelAge();
						return false;
						break;
					}else if( m == ( sendForm.length - 1 ) &&  sendForm[m] ){
						return true;
					}

				};

			});
			
		}
	}
	
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
	
		
	btnFolderHover();
	dropdownMenuNav();
	searchAdvancedOpts();
	mapModelAge();
	mapModelMeasures();
	modelShowSecondInfo();
	modelFormValidation();
	checkModelAgeBox();
	setupCompositeNav();

	//loginPanelSetup();
	
});