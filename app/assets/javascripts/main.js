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
				//$('div#model-photo-gallery ul#model-gallery li img:eq('+p+')').resizeToParent({parent: 'li'});
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
	
	function registerFlow(){
		
		var hasRegister = $('div.register-flow').length;
		var hasAgencyUpdate = $('div#edit-agency-content').length;
		
		if ( hasRegister != 0 ){ setupRegisterFlow(); };
		if ( hasAgencyUpdate != 0 ){ setupAgencyUpdate(); };
		
	}
	
	function setupRegisterFlow(){
		
		// PLANS DEFINITION
		var freeMonthPrice = 0;
		var topMonthPrice = 100;
		var uberMonthPrice = 225;
		
		var freeTemplates = 1;
		var topTemplates = 5;
		var uberTemplates = 10;
		
		var freeModels = 5;
		var topModels = 50;
		var uberModels = 1000;
		
		var freeDomain = false;
		var topDomain = true;
		var uberDomain = true;
		
		var currentPlanPeriod = "";
		var currentPlanType = "";
		
		//CHECK IF RAILS RETURNED A FORM VALIDATION MESSAGE
		if( $('div.alert').length != 0 ){
			var errorVal = $('span.help-inline').parent("div.controls").find("input").val();
			var errorMsg = $('span.help-inline:eq('+0+')').text();
			$('div.alert').text(errorVal+" "+errorMsg);
		}
		
		//APPLY INPUT MASKS
		$("#agency_cnpj").mask("99.999.999/9999-99");
		$("#agency_owner_cpf").mask("999.999.999-99");
		
		// PLANS: PERIOD AND TYPE: NAVIGATION AND VALIDATION
		$('div#plan-period li a').click(function(event) {
			
			// Make Opt Active
			$('div#plan-period li a').removeClass('period-active');
			$(this).addClass('period-active');
			
			// Set up PLAN PERIOD input hidden and update prices
			switch( $(this).text() ){
				case "Mensal":
					$('input#agency_account_period').val("monthly");
					$('div#plan-type div#type-02 p.price-top').html("R$"+topMonthPrice+",00<span>/mês</span>");
					$('div#plan-type div#type-03 p.price-top').html("R$"+uberMonthPrice+",00<span>/mês</span>");
				break;
				case "Semestral":
					$('input#agency_account_period').val("semiannual");
					$('div#plan-type div#type-02 p.price-top').html("R$"+(topMonthPrice*6)+",00<span>/total</span>");
					$('div#plan-type div#type-03 p.price-top').html("R$"+(uberMonthPrice*6)+",00<span>/total</span>");
				break;
				case "Anual":
					$('input#agency_account_period').val("annual");
					$('div#plan-type div#type-02 p.price-top').html("R$"+(topMonthPrice*12)+",00<span>/total</span>");
					$('div#plan-type div#type-03 p.price-top').html("R$"+(uberMonthPrice*12)+",00<span>/total</span>");
				break;
			}
			
		});
		
		//Set Up PLAN TYPE input hidden, fill up the summary folder with account data and change step
		$('div#plan-type div a').click(function(event) {
			
			//Fill Information Up
			switch( $(this).parent("div").attr("id") ){
				case "type-01":
					currentPlanType = "free";
					$('input#agency_account_type').val("free");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: FREE");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: "+freeTemplates);
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: "+freeModels);
					$('div.plan-summary-folder ul li.plan-summary-domain').text("Domínio próprio: Não");
				break;
				case "type-02":
					currentPlanType = "top";
					$('input#agency_account_type').val("top");
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Top");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: TOP");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: "+topTemplates);
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: "+topModels);
					$('div.plan-summary-folder ul li.plan-summary-domain').text("Domínio próprio: Sim");
					
					if( $('input#agency_account_period').val() == "monthly" ){
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+topMonthPrice+",00 <span>/mês</span>");
					}else if( $('input#agency_account_period').val() == "semiannual" ){
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+(topMonthPrice*6)+",00 <span>/total</span>");
					}else{
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+(topMonthPrice*12)+",00 <span>/total</span>");
					};
					
				break;
				case "type-03":
					currentPlanType = "uber";
					$('input#agency_account_type').val("uber");
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Über");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: ÜBER");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: "+uberTemplates);
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: "+uberModels);
					$('div.plan-summary-folder ul li.plan-summary-domain').text("Domínio próprio: Sim");
					
					if( $('input#agency_account_period').val() == "monthly" ){
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+uberMonthPrice+",00 <span>/mês</span>");
					}else if( $('input#agency_account_period').val() == "semiannual" ){
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+(uberMonthPrice*6)+",00 <span>/total</span>");
					}else{
						$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+(uberMonthPrice*12)+",00 <span>/total</span>");
					};
					
				break;
			}
			
			//Apply First Step
			if( $(this).parent("div").attr("id") == "type-01" ){
				$('div#plans').fadeOut('fast', function() {
					$('div#register-pay-01').remove();
					$('div#register-pay-02').remove();
					$('div#register-pay-03').remove();
					$('div#register-free').fadeIn('slow');
				});
			}else{
				$('div#plans').fadeOut('fast', function() {
					$('div#register-free').remove();
					$('div#register-pay-01').fadeIn('slow');
				});
			};
			
			//If Account Type Is Not Free, Start Contrroling Form Steps And Validate Fields
			if( currentPlanType != "free" ){
				
				//BTN CONTINUE
				$('div.form-register-field a.btn-continue').click(function(event) {
					
					var myFormId = $(this).parents("div.form-register").parents("div").attr("id");
					var myFormRegister = $(this).parents("div.form-register");
					var formValid = registerFormValidation(myFormRegister);
					
					if(formValid){
						switch( myFormId ){
							case "register-pay-01":
								$('div#register-pay-01').fadeOut('fast', function() {
									$('div#register-pay-02').fadeIn('slow');
								});
							break;
							case "register-pay-02":
								$('div#register-pay-02').fadeOut('fast', function() {
									$('div#register-pay-03').fadeIn('slow');
								});
							break;
						}
					};
					
				});
				
				//BTN BACK
				$('div.form-register-field a.btn-back').click(function(event) {
					var myFormId = $(this).parents("div.form-register").parents("div").attr("id");
					switch( myFormId ){
						case "register-pay-02":
							$('div#register-pay-02').fadeOut('fast', function() {
								$('div#register-pay-01').fadeIn('slow');
							});
						break;
						case "register-pay-03":
							$('div#register-pay-03').fadeOut('fast', function() {
								$('div#register-pay-02').fadeIn('slow');
							});
						break;
					}
				});
				
			}else{
				
				$('div.form-register-field input.input-btn-gold-light-4-column').click(function(event) {
					var myFormRegister = $(this).parents("div.form-register");
					var formValid = registerFormValidation(myFormRegister);
					
					if (formValid) {
						return true;
					}else{
						return false;
					};
					
				});
				
			};
			
		});
		
	}
	
	function registerFormValidation(form){
		
		var defaultErrorMsg = '<div class="field-error-msg"><p>* Este campo é orbigatório.</p></div>';
		var totalLoop = form.find("input.required").length;
		var formInputs = new Array();
		var formInputContainer = "";
		var formInputItem = "";
		var valid = false;
		
		for (var i = 0; i < totalLoop; i++) {
			formInputs.push( form.find("input.required:eq("+i+")") );
			formInputItem = formInputs[ formInputs.length - 1 ];
			formInputContainer = formInputItem.parents("div.form-register-field");
			
			if ( formInputItem.val() == "" || formInputItem.val() == "undefined" || formInputItem.val() == undefined ){
				if( formInputContainer.find("div.field-error-msg").length == 0 ){
					formInputContainer.append(defaultErrorMsg);
				}
			}else{
				if( formInputContainer.find("div.field-error-msg").length != 0 ){
					formInputContainer.find("div.field-error-msg").remove();
				};
			}
			
		};
		
		for (var p = 0; p < formInputs.length; p++) {
			if ( formInputs[p].val() == "" || formInputs[p].val() == "undefined" || formInputs[p].val() == undefined ){
				valid = false;
				break;
			}
			
			if( p == ( formInputs.length - 1 ) ){
				valid = true;
			};
		};
		
		if ( !valid ){
			return false;
		}else{
			return true;
		};
		
	}
	
	function setupAgencyUpdate(){
		//APPLY INPUT MASKS
		$("#agency_cnpj").mask("99.999.999/9999-99");
		$("#agency_owner_cpf").mask("999.999.999-99");
		$("#agency_insc_state").mask("99.999.999");
		$("#agency_insc_city").mask("99.999.999");
		$("#agency_phone").mask("(99)9999-9999");
		$("#agency_fax").mask("(99)9999-9999");
	}
	
	function getMainPath() {
		var fullURL = window.location.href;
		var mainURL = fullURL.substring(0, fullURL.lastIndexOf("/"));
		
		if ( $('span.my-main-domain').length > 0 ) {
			$('span.my-main-domain').append(mainURL+"/");
		};
	}
	
	function websiteUpdateThemePreview() {
		var themeContainer = $('div#website-theme-content');
		
		if( themeContainer.length > 0 ){
			
			$('div#website-theme-input ul li input').click(function(event) {
				var myID = $(this).attr("id");
				var myThumb = myID.substring(14,myID.length);
				
				$("div#website-theme-input ul li").removeClass('theme-active');
				
				switch(myThumb){
					case "subdomain_default":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/01.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "cubical_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/02.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
				}
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
	registerFlow();
	getMainPath();
	websiteUpdateThemePreview();

	//loginPanelSetup();
	
});