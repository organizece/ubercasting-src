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
	
	function searchBarSetup() {
		$('select.colapse-list').each(function(index) {
		  $(this).hide();
		});
		
		$('a.colapse-list-link').each(function(index) {
			$(this).addClass('stand');
			
			$(this).click(function(event) {
				event.preventDefault();
				$(this).parent('li').find('select.colapse-list').slideToggle('fast');
				
				var linkClass = $(this).attr('class');
				
				if ( linkClass.indexOf("stand") != -1 ){
					$(this).removeClass('stand');
					$(this).addClass('active');
					$(this).animate({"margin-top": "-25px"}, "fast");
				}else{
					$(this).removeClass('active');
					$(this).addClass('stand');
					$(this).animate({"margin-top": "20px"}, "fast");
				};
			});
		});
	}
	
	function searchHorizontalHidden() {
		$('div.horizontal-hidden-menu a.horizontal-hidden-link').each(function(index) {
		  $(this).hide();
		});
		
		$('div.horizontal-hidden-menu').click(function(event) {
			$("a.horizontal-hidden-link",this).show();
		});
		
		$('div.horizontal-hidden-menu').mouseenter(function(event) {
			$("a.horizontal-hidden-link",this).show();
		});
		
		$('div.horizontal-hidden-menu').mouseleave(function(event) {
			$("a.horizontal-hidden-link",this).hide();
		});
		
		$('div.horizontal-hidden-menu a.menu-right').click(function(event) {
			event.preventDefault();
			
			var wDif = $(this).parent('div').find('ul').width() - $(this).parent('div').width();
			var lPos = parseInt($(this).parent('div').find('ul').css('margin-left'),10);
			
			if ( lPos == 0 ) {
				$(this).parent('div').find('ul').animate({"margin-left": (wDif*-1)+"px"}, "fast");
			};
		});
		
		$('div.horizontal-hidden-menu a.menu-left').click(function(event) {
			event.preventDefault();
			
			var wDif = $(this).parent('div').find('ul').width() - $(this).parent('div').width();
			var lPos = parseInt($(this).parent('div').find('ul').css('margin-left'),10);
			
			if ( lPos < 0 ) {
				$(this).parent('div').find('ul').animate({"margin-left": "0px"}, "fast");
			};
		});
	}
	
	/*
		MODELS » SEARCH » PROFILE PIC SETUP
	*/
	function searchSetupModelAvatar(){
		var hasModelResult = $('div#search-models-result').length;
		var hasCastingResult = $('div#casting-models-result').length;
		
		if ( hasModelResult > 0 ) {
			
			$('div.model-box').each(function(index) {

				if ( $(this).find('input#crop_x').val() != "" ){
					var coordX = $(this).find('input#crop_x').val();
					var coordY = $(this).find('input#crop_y').val();
					var coordW = $(this).find('input#crop_w').val();
					var coordH = $(this).find('input#crop_h').val();

					var originalW = 0;
					var originalH = 0;
					
					$('div.model-box-img img',this).load(function() {
						$(this).height(300);
						
						originalW = $(this).width();
						originalH = $(this).height();
						
						var rx = 300 / coordW;
						var ry = 256 / coordH;

						$(this).css({
							width: Math.round(rx * originalW) + 'px',
							height: Math.round(ry * originalH) + 'px',
							marginLeft: '-' + Math.round(rx * coordX) + 'px',
							marginTop: '-' + Math.round(ry * coordY) + 'px'
						});
					});

				};
			});
		};
		
		if ( hasCastingResult > 0 ) {
			
			$('div.model-box').each(function(index) {

				if ( $(this).find('input#crop_x').val() != "" ){
					var coordX = $(this).find('input#crop_x').val();
					var coordY = $(this).find('input#crop_y').val();
					var coordW = $(this).find('input#crop_w').val();
					var coordH = $(this).find('input#crop_h').val();

					var originalW = 0;
					var originalH = 0;
					
					$('div.model-box-img img',this).load(function() {
						$(this).height(300);
						
						originalW = $(this).width();
						originalH = $(this).height();
						
						var rx = 300 / coordW;
						var ry = 256 / coordH;

						$(this).css({
							width: Math.round(rx * originalW) + 'px',
							height: Math.round(ry * originalH) + 'px',
							marginLeft: '-' + Math.round(rx * coordX) + 'px',
							marginTop: '-' + Math.round(ry * coordY) + 'px'
						});
					});

				};
			});
			
		};
	};
	
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
	
	/*
		MODELS » SEARCH » SHOW OPTIONS LIST
		MODELS » SEARCH » RESIZE COMPOSITE IMAGES
	*/
	function modelShowSecondInfo(){
		$('a#btn-model-show-data').click(function(event) {
			$('div#model-secondary-info').slideToggle(400);
		});
		
		$('a#btn-model-hide-data').click(function(event) {
			$('div#model-secondary-info').slideUp(400);
		});
		
		var hasComposite = $('div#model-info-composite').size();
		
		if( hasComposite == 1 ){
			$('#model-info-composite div#composite-cover img').resizeToParent();
			$('#model-info-composite div.composite-thumbs img').resizeToParent();
		};
		
		var hasGallery = $('div#model-photo-gallery ul#model-gallery').size();
		var modelGalleryImg = $('div#model-photo-gallery ul#model-gallery li img');
		
		if( hasGallery == 1 ){			
			$('div#model-photo-gallery ul#model-gallery li img').resizeToParent({parent: 'li'});
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
	
	function modelArtName(){
		if ( $('input#model_art_name').length >= 1 ){
			$('input#model_name').blur(function(event) {
				var modelName = $(this).val();
				var spaceIndex = modelName.lastIndexOf(" ");
				var artName = modelName.substring(0,3);
				artName += modelName.substring(spaceIndex,modelName.length);
				$('input#model_art_name').val(artName);
			});
		};
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
		var topMonthPrice = 0;
		var uberMonthPrice = 0;
		
		var freeTemplates = 0;
		var topTemplates = 5;
		var uberTemplates = 1000;
		
		var freeModels = 5;
		var topModels = 50;
		var uberModels = 1000;
		
		var freeDomain = false;
		var topDomain = true;
		var uberDomain = true;
		
		var currentPlanPeriod = "";
		var currentPlanType = "";
		
		//SET UP TOOLTIP FUNCTIONS
		$('a.has-tooltip').css('color', '#232323');
		$('a.has-tooltip').css('font-size', '80%');
		$('a.has-tooltip').tooltip('hide');
		$('a.has-tooltip').mouseenter(function(event) {
			$(this).tooltip('show');
		});
		$('a.has-tooltip').mouseleave(function(event) {
			$(this).tooltip('hide');
		});
		
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
					$('div#plan-type div#type-03 p.price-top').html("R$"+topMonthPrice+",00<span>/mês</span>");
					$('div#plan-type div#type-02 p.price-top').html("R$"+uberMonthPrice+",00<span>/mês</span>");
				break;
				case "Semestral":
					$('input#agency_account_period').val("semiannual");
					$('div#plan-type div#type-03 p.price-top').html("R$"+(topMonthPrice*6)+",00<span>/total</span>");
					$('div#plan-type div#type-02 p.price-top').html("R$"+(uberMonthPrice*6)+",00<span>/total</span>");
				break;
				case "Anual":
					$('input#agency_account_period').val("annual");
					$('div#plan-type div#type-03 p.price-top').html("R$"+(topMonthPrice*12)+",00<span>/total</span>");
					$('div#plan-type div#type-02 p.price-top').html("R$"+(uberMonthPrice*12)+",00<span>/total</span>");
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
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Free");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: FREE");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: "+freeTemplates);
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: "+freeModels);
					$('div.plan-summary-folder ul li.plan-summary-domain').text("Domínio próprio: Não");
				break;
				case "type-03":
					currentPlanType = "top";
					$('input#agency_account_type').val("standard");
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Standard");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: STANDARD");
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
				case "type-02":
					currentPlanType = "uber";
					$('input#agency_account_type').val("uber");
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Über");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: ÜBER");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: todos");
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: ilimitado");
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
		var passShortErrorMsg = '<div class="field-error-msg"><p>* Senha deve ter mais de 6 caracteres.</p></div>';
		var passEqualErrorMsg = '<div class="field-error-msg"><p>* Senhas devem ser iguais.</p></div>';
		var mailEqualErrorMsg = '<div class="field-error-msg"><p>* E-mail inválido.</p></div>';
		
		var totalLoop = form.find("input.required").length;
		var formInputs = new Array();
		var formInputContainer = new Array();
		
		var formPass = "";
		var formPassConfirm = "";
		var formMail = "";
		
		var hasEmptyFields = true;
		var hasShortPass = true;
		var hasEqualPass = true;
		var hasWrongMail = true;
		var valid = false;
		
		//STORE INPUTS
		for (var i = 0; i < totalLoop; i++) {
			formInputs[i] = form.find("input.required:eq("+i+")");
			formInputContainer[i] = formInputs[i].parents('div.form-register-field');
		};
		
		//CHECK EMPTY FIELDS
		for (var p = 0; p < totalLoop; p++) {
			if ( $.trim(formInputs[p].val()).length == 0 ) {
				if ( formInputContainer[p].attr('class').indexOf("got-error") == -1 ) {
					formInputContainer[p].addClass('got-error');
					formInputContainer[p].append(defaultErrorMsg);
				};
			}else{
				if ( formInputContainer[p].attr('class').indexOf("got-error") != -1 ) {
					formInputContainer[p].removeClass('got-error');
					formInputContainer[p].find('div.field-error-msg').remove();
				};
			};
		};
		
		//CHECK SMALL PASSWORD
		for (var j = 0; j < totalLoop; j++) {
			if ( formInputs[j].attr('id').indexOf("agency_password") != -1 ) {
				formPass = formInputs[j];
				if ( formPass.val().length < 6 ) {
					if ( formInputContainer[j].attr('class').indexOf("got-error") == -1 ) {
						formInputContainer[j].addClass('got-error');
						formInputContainer[j].append(passShortErrorMsg);
					};
				}else{
					if ( formInputContainer[j].attr('class').indexOf("got-error") != -1 ) {
						formInputContainer[j].removeClass('got-error');
						formInputContainer[j].find('div.field-error-msg').remove();
					};
				};
			};
		};
		
		//CHECK EQUAL PASSWORD
		for (var g = 0; g < totalLoop; g++) {
			if ( formInputs[g].attr('id').indexOf("agency_password") != -1 && formInputs[g].attr('id') != formPass.attr('id') ) {
				formPassConfirm = formInputs[g];
				if ( formPassConfirm.val() != formPass.val() ) {
					if ( formInputContainer[g].attr('class').indexOf("got-error") == -1 ) {
						formInputContainer[g].addClass('got-error');
						formInputContainer[g].append(passEqualErrorMsg);
					};
				}else{
					if ( formInputContainer[g].attr('class').indexOf("got-error") != -1 ) {
						formInputContainer[g].removeClass('got-error');
						formInputContainer[g].find('div.field-error-msg').remove();
					};
				};
			};
		};
		
		//CHECK E-MAIL VALIDATION
		for (var a = 0; a < totalLoop; a++) {
			if ( formInputs[a].attr('id').indexOf("agency_email") != -1 ) {
				formMail = formInputs[a];
				hasWrongMail = validateEmail(formMail.val());
				if ( !hasWrongMail ) {
					if ( formInputContainer[a].attr('class').indexOf("got-error") == -1 ) {
						formInputContainer[a].addClass('got-error');
						formInputContainer[a].append(mailEqualErrorMsg);
					};
				}else{
					if ( formInputContainer[a].attr('class').indexOf("got-error") != -1 ) {
						formInputContainer[a].removeClass('got-error');
						formInputContainer[a].find('div.field-error-msg').remove();
					};
				};
			};
		};
		
		//CHECK ALL ERRORS
		for (var b = 0; b < totalLoop; b++) {
			if ( formInputContainer[b].attr('class').indexOf("got-error") != -1 ) {
				valid = false;
				break;
			};
			
			if ( b < (totalLoop-1) && ( formInputContainer[b].attr('class').indexOf("got-error") == -1 ) ) {
				valid = true;
			};
		};
		
		if ( valid ) { return true; }else{ return false; };
		
	}
	
	function validateEmail(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
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
	
	function setupAgencyAccountUpgrade(){
		
		if ( $('div#agency-account-upgrade').length ){
			
			// PLANS DEFINITION
			var freeMonthPrice = 0;
			var topMonthPrice = 0;
			var uberMonthPrice = 0;
			
			var monthMult = 1;
			var semiannualMult = 6;
			var annualMult = 12;
			
			var calcVet = new Array();
			
			var actualValue = 0;
			var upgradeValue = 0;
			
			//HIDE UPGRADE BLOCK
			$('div#agency-account-upgrade').hide();
			$('a#agency-account-display-upgrade').click(function(event) {
				event.preventDefault();
				$('div#agency-account-upgrade').slideDown('slow');
			});
			
			//CLEAR ACTIVE TAB
			$('div.ui-tab-container ul li a').each(function(index) {
			  $(this).removeClass('active-tab');
			});
			
			//CHECK ACCOUNT TYPE
			switch($('#agency_account_type').val()){
				case "free":
					$('ul#agency-account-upgrade-type li:eq(0) a').addClass('active-tab');
					calcVet[0] = freeMonthPrice;
				break;
				case "standard":
					$('ul#agency-account-upgrade-type li:eq(1) a').addClass('active-tab');
					calcVet[0] = topMonthPrice;
				break;
				case "uber":
					$('ul#agency-account-upgrade-type li:eq(2) a').addClass('active-tab');
					calcVet[0] = uberMonthPrice;
				break;
			}
			
			//CHECK ACCOUNT PERIOD
			switch($('#agency_account_period').val()){
				case "monthly":
					$('ul#agency-account-upgrade-period li:eq(0) a').addClass('active-tab');
					calcVet[1] = monthMult;
				break;
				case "semiannual":
					$('ul#agency-account-upgrade-period li:eq(1) a').addClass('active-tab');
					calcVet[1] = semiannualMult;
				break;
				case "annual":
					$('ul#agency-account-upgrade-period li:eq(2) a').addClass('active-tab');
					calcVet[1] = annualMult;
				break;
			}
			
			//CHECK ACCOUNT VALUE
			actualValue = calcVet[0] * calcVet[1];
			$('span#account-up-actual-price').text('R$'+actualValue+",00");
			
			//CHECK ACCOUNT TYPE AND PERIOD
			$('div.ui-tab-container ul li a').each(function(index) {
			  $(this).click(function(event) {
			  	
				event.preventDefault();
				$(this).parents('div.ui-tab-container').find('ul li a').removeClass('active-tab');
				$(this).addClass('active-tab');
				
				var linkClass = $(this).attr('class');
				var activeIndex = linkClass.indexOf("active-tab");
				var linkValue = linkClass.substring(0,activeIndex-1);
				
				if ( linkValue == "free" || linkValue == "standard" || linkValue == "uber" ){
					$('#agency_account_type').val(linkValue);
				}else if( linkValue == "monthly" || linkValue == "semiannual" || linkValue == "annual" ){
					$('#agency_account_period').val(linkValue);
				};
				
				//CHECK ACCOUNT TYPE
				switch($('#agency_account_type').val()){
					case "free":
						calcVet[0] = freeMonthPrice;
						$('#agency_subscription_id').val(1);
					break;
					case "standard":
						calcVet[0] = topMonthPrice;
						$('#agency_subscription_id').val(2);
					break;
					case "uber":
						calcVet[0] = uberMonthPrice;
						$('#agency_subscription_id').val(3);
					break;
				};
				
				//CHECK ACCOUNT PERIOD
				switch($('#agency_account_period').val()){
					case "monthly":
						calcVet[1] = monthMult;
					break;
					case "semiannual":
						calcVet[1] = semiannualMult;
					break;
					case "annual":
						calcVet[1] = annualMult;
					break;
				};
				
				//CHECK ACCOUNT UPGRADE VALUE
				upgradeValue = calcVet[0] * calcVet[1];
				$('span#account-up-upgrade-price').text('R$'+upgradeValue+",00");
				
			  });
			});
		};
		
	}
	
	function getMainPath() {
		var fullURL = window.location.href;
		var mainURL = fullURL.substring(7, fullURL.lastIndexOf("/"));
		
		if ( $('span.my-main-domain').length > 0 ) {
			$('span.my-main-domain').append(mainURL+"/");
 			$('input#html_content').val('<script type="text/javascript">window.location = "http://'+$('input#agency_subdomain').val()+'.'+mainURL+'/website/models";</script>');
			$('a.uber-black-btn').attr('href', 'http://'+$('input#agency_subdomain').val()+'.'+mainURL+'/website/models');
			$('a.uber-gold-btn').attr('href', 'http://'+$('input#agency_subdomain').val()+'.'+mainURL+'/website/models');
		};
		
	}
	
	function websiteUpdateThemePreview() {
		var themeContainer = $('div#website-theme-content');
		
		if( themeContainer.length > 0 ){
			
			//APPLY ACTIVE TO CHECKED RADIO
			$("div#website-theme-input ul li").removeClass('theme-active');
			var activeLiId = $("div#website-theme-input ul li input:checked").parent("li").index();
			$('div#website-theme-input ul li:eq('+activeLiId+')').addClass('theme-active');
			$('div#website-theme-preview-thumb img').hide();
			switch(activeLiId){
				case 0:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/01.jpg');
				break;
				case 1:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/02.jpg');
				break;
				case 2:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/03.jpg');
				break;
				case 3:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/04.jpg');
				break;
			}
			$('div#website-theme-preview-thumb img').fadeIn(400);
			
			$('div#website-theme-input ul li input').click(function(event) {
				var myID = $(this).attr("id");
				var myThumb = myID.substring(14,myID.length);
				
				$("div#website-theme-input ul li").removeClass('theme-active');
				
				$('div#website-theme-preview-thumb img').hide();
				switch(myThumb){
					case "subdomain_default":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/01.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "cubical_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/02.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "stylish_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/03.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "stripes_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/04.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
				}
				$('div#website-theme-preview-thumb img').fadeIn(400);
			});
			
		};
	}
	
	function setupSimpleModal(){
		$('div#simple-modal-msgs').hide();
		
		$('a.request-tip span').hide();
		
		$('a.request-tip').click(function(event) {
			event.preventDefault();
			$('div#simple-modal-msgs').fadeIn("fast");
			
			var myTitle = $("span.title", this).text();
			var myBold = $("span.bold", this).text();
			var myContent = $("span.content", this).text();
			
			$('div#simple-modal-msgs h3#simple-modal-msg-title').html(myTitle+" <strong>"+myBold+"</strong>");
			$('div#simple-modal-msgs p#simple-modal-msg-content').text(myContent);
			
		});
		
		$('div#simple-modal-msgs a#simple-modal-msg-close').click(function(event) {
			event.preventDefault();
			$('div#simple-modal-msgs').fadeOut("fast");
		});
	}
	
	function setupWebsiteGuide() {
		var guideContainer = $('div#guide-content-container').length;
		
		if ( guideContainer > 0 ){
			
			//SETUP VARS
			var currentStep = 0;
			var totalSteps = $('div.guide-steps').length;
			var gotEnd = false;
			
			//SETUP BUTTONS
			$('a#guide-btn-go').show();
			$('a#guide-btn-back').hide();
			$('input#guide-btn-save').hide();
			$('span.gif-loader').hide();
			
			//BUTTON CLICK
			$('a#guide-btn-go').click(function(event) {
				//event.preventDefault();
				//STEP CTRLER
				if ( currentStep < ( totalSteps -1 ) ){
					currentStep++;
				};
				
				//STEP GUIDELINE CTRLER
				switch( currentStep ){
					case 1:
						$('div.step-by-step').removeClass('step-active-01');
						$('div.step-by-step').addClass('step-active-02');
					break;
					case 2:
						$('div.step-by-step').removeClass('step-active-02');
						$('div.step-by-step').addClass('step-active-03');
					break;
					case 3:
						$('div.step-by-step').removeClass('step-active-03');
						$('div.step-by-step').addClass('step-active-04');
					break;
					case 4:
						$('div.step-by-step').removeClass('step-active-04');
						$('div.step-by-step').addClass('step-active-05');
					break;
					case 5:
						$('div.step-by-step').fadeOut('slow');
					break;
				}
				
				//STEP CONTAINER
				$('div.guide-steps:eq('+(currentStep-1)+')').fadeOut('fast', function() {
					$('div.guide-steps:eq('+currentStep+')').fadeIn('slow');
				});
				
				//STEP SUBHEADER
				$('div.subheader:eq('+(currentStep-1)+')').slideUp('fast', function() {
					$('div.subheader:eq('+currentStep+')').slideDown('fast');
				});
				
				
				//CHECK FOR DATA SAVE
				if ( currentStep > 0 ){ 
					$('a#guide-btn-back').fadeIn('slow');
				}else{ 
					$('a#guide-btn-back').fadeOut('fast');
				};
				
				if ( currentStep == ( totalSteps - 2 ) && $('input#guide-btn-save').css("display") != "block" ){
					$('a#guide-btn-go').fadeOut('fast', function() {
						$('input#guide-btn-save').fadeIn('slow');
					});
				};
				
			});
			
			$('a#guide-btn-back').click(function(event) {
				//event.preventDefault();
				
				//STEP CTRLER
				if ( currentStep > 0 ){
					currentStep--;
				};
				
				//STEP GUIDELINE CTRLER
				switch( currentStep ){
					case 0:
						$('div.step-by-step').removeClass('step-active-02');
						$('div.step-by-step').addClass('step-active-01');
					break;
					case 1:
						$('div.step-by-step').removeClass('step-active-03');
						$('div.step-by-step').addClass('step-active-02');
					break;
					case 2:
						$('div.step-by-step').removeClass('step-active-04');
						$('div.step-by-step').addClass('step-active-03');
					break;
					case 3:
						$('div.step-by-step').removeClass('step-active-05');
						$('div.step-by-step').addClass('step-active-04');
					break;
					case 4:
						$('div.step-by-step').fadeIn('slow');
						$('div.step-by-step').addClass('step-active-05');
					break;
				}
				
				//STEP CONTAINER
				$('div.guide-steps:eq('+(currentStep+1)+')').fadeOut('fast', function() {
					$('div.guide-steps:eq('+currentStep+')').fadeIn('slow');
				});
				
				//STEP SUBHEADER
				$('div.subheader:eq('+(currentStep+1)+')').slideUp('fast', function() {
					$('div.subheader:eq('+currentStep+')').slideDown('fast');
				});
				
				//CHECK FOR DATA SAVE
				if ( currentStep > 0 ){ 
					$('a#guide-btn-back').fadeIn('slow');
				}else{ 
					$('a#guide-btn-back').fadeOut('fast');
				};
				
				if ( currentStep == ( totalSteps -1 ) && $('input#guide-btn-save').css("display") != "block" ){
					$('a#guide-btn-go').fadeOut('fast', function() {
						$('input#guide-btn-save').fadeIn('slow');
					});
				}else{
					$('input#guide-btn-save').fadeOut('fast', function(){
						$('a#guide-btn-go').fadeIn('slow');
					});
				};
				
			});
			
			$('input#guide-btn-save').click(function(event) {
				if ( !gotEnd ){
					gotEnd = true;
				}else{
					$('div.subheader:eq('+(currentStep)+')').slideUp('fast');
					$('div.guide-steps:eq('+(currentStep)+')').fadeOut('fast');
					currentStep = 4;
				};
				
				var agencyDomain = $('div#guide-step-01 div#guide-domain div#website-subdomain-input input').val();
				$('a#guide-view-site').attr('href', '/'+agencyDomain+'/home/');
				
				$('span.gif-loader').show();
				$(this).hide();
			});
			
			//RETURN TO STEP
			$('a.return-to-step').click(function(event) {
				currentStep = $(this).attr('id').substring(10, 11);
				
				//STEP GUIDELINE CTRLER
				$('div.step-by-step').fadeIn('slow');
				$('div.step-by-step').removeClass('step-active-05');
				switch( currentStep ){
					case 0:
						$('div.step-by-step').addClass('step-active-01');
					break;
					case 1:
						$('div.step-by-step').addClass('step-active-02');
					break;
					case 2:
						$('div.step-by-step').addClass('step-active-03');
					break;
					case 3:
						$('div.step-by-step').addClass('step-active-04');
					break;
					case 4:
						$('div.step-by-step').addClass('step-active-05');
					break;
				}
				
				//STEP SUBHEADER
				$('div.subheader:eq(5)').slideUp('fast', function() {
					$('div.subheader:eq('+currentStep+')').slideDown('fast');
				});
				
				//STEP SCENE
				$('div.guide-steps:eq(5)').fadeOut('fast', function() {
					$('div.guide-steps:eq('+currentStep+')').fadeIn('slow');
				});
				
				//STEP BTN BAR
				$('a#guide-btn-go').show();
				$('span.gif-loader').hide();
				$('input#guide-btn-save').show();
				
				if ( currentStep > 0 ){ 
					$('a#guide-btn-back').show(); 
				}else{ 
					$('a#guide-btn-back').hide();
				};
				
				if ( currentStep == ( totalSteps - 2 ) && $('input#guide-btn-save').css("display") != "block" ){
					$('a#guide-btn-go').fadeOut('fast', function() {
						$('input#guide-btn-save').fadeIn('slow');
					});
				};
				
				$('div.bottom-ctrl-bar').fadeIn("fast");
			});
		
			//IF ACCOUNT FREE - SETUP AUTOMATIC DOMAIN NAME
			if ( $('input.agency-account-type').length == 1 ) {
				if ( $('input.agency-account-type').val() == "free" ){
					if ( $('input#website_subdomain').val().length == 0 ){
						var prefix = "0";
						var fullDomainName = "";

						for (var i = 0; i < 7; i++) {
							prefix += Math.floor(Math.random()*11);
						};

						fullDomainName = prefix+"_"+$('input.agency-account-name').attr('id');
						$('input#website_subdomain').val(fullDomainName);
					};
				};
			};
			
			//SETUP THEME CTRLERS
			//APPLY ACTIVE TO CHECKED RADIO
			$("div#website-theme-input ul li").removeClass('theme-active');
			var activeLiId = $("div#website-theme-input ul li input:checked").parent("li").index();
			$('div#website-theme-input ul li:eq('+activeLiId+')').addClass('theme-active');
			
			$('div#website-theme-preview-thumb img').hide();
			
			switch(activeLiId){
				case 0:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/01.jpg');
				break;
				case 1:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/02.jpg');
				break;
				case 2:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/03.jpg');
				break;
				case 3:
					$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/04.jpg');
				break;
			}
			
			$('div#website-theme-preview-thumb img').fadeIn(400);
			
			//INPUT CLICK
			$('div#website-theme-input ul li input').click(function(event) {
				var myID = $(this).attr("id");
				var myThumb = myID.substring(14,myID.length);
				
				$("div#website-theme-input ul li").removeClass('theme-active');
				
				$('div#website-theme-preview-thumb img').hide();
				switch(myThumb){
					case "subdomain_default":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/01.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "cubical_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/02.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "stylish_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/03.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
					case "stripes_theme":
						$('div#website-theme-preview-thumb img').attr('src', '/assets/thumbs/04.jpg');
						$(this).parent("li").addClass('theme-active');
					break;
				}
				$('div#website-theme-preview-thumb img').fadeIn(400);
			});
			
		};
	}
	
	function menuBarNameSetup(){
		var myNameLength = $('div#secundary-links ul li.agency-owner-name').text().length;
		
		if ( myNameLength > 24 ){
			var ownerNameFull = $('div#secundary-links ul li.agency-owner-name').text();
			var ownerName = ownerNameFull.substring(4,ownerNameFull.length);
			var spacePoint = ownerName.indexOf(" ");
			var firstName = ownerName.substring(0,spacePoint);
			firstName += ",";
			$('div#secundary-links ul li.agency-owner-name').text("Olá "+firstName);
		};
		
		$('div#secundary-links ul li.agency-owner-name').css('font-size', '13px');
		
	}
	
	function uberScrollTo(yLimit){
		var timerID = setInterval(function() {
		    window.scrollBy(0, 10);

		    if( window.pageYOffset >= yLimit )
		        clearInterval(timerID);
		}, 10);
	}
	
	function uberScrollUp(yLimit){
		var timerID = setInterval(function() {
		    window.scrollBy(0, -10);

		    if( window.pageYOffset <= yLimit )
		        clearInterval(timerID);
		}, 10);
	}
	
	function ubersiteConfigSecondNav(){
		$('a.has-scrollTo').click(function(event) {
			event.preventDefault();
			
			var allClasses = $(this).attr('class');
			var lastPoint = allClasses.lastIndexOf("-")+1;
			var yLimit = allClasses.substring(lastPoint,allClasses.length);
			
			uberScrollTo(yLimit);
		});
		
		$('a.has-scrollUp').click(function(event) {
			event.preventDefault();
			
			var allClasses = $(this).attr('class');
			var lastPoint = allClasses.lastIndexOf("-")+1;
			var yLimit = allClasses.substring(lastPoint,allClasses.length);
			
			uberScrollUp(yLimit);
		});
	}
	
	function ubersiteConfigCustomTheme(){
		var isOn = $('input#website_has_custom').is(':checked');
		
		if ( isOn ) {
			$('div#theme-custom-content').show();
		}else{
			$('div#theme-custom-content').hide();
		};
		
		//Checkbox Ctrler
		$('input#website_has_custom').click(function(event) {
			if ( isOn ) {
				isOn = false;
				$('div#theme-custom-content').hide();
			}else{
				isOn = true;
				$('div#theme-custom-content').show();
			};
		});
		
		//Change Site Body Part
		$('select#theme-pieces').change(function(event) {
			
			$('div.theme-custom-parts').hide();
			
			switch($(this).val()){
				case "body":
					$('div#theme-custom-part-body').show();
				break;
				case "header":
					$('div#theme-custom-part-header').show();
				break;
				case "nav":
					$('div#theme-custom-part-nav').show();
				break;
				case "content":
					$('div#theme-custom-part-content').show();
				break;
				case "footer":
					$('div#theme-custom-part-footer').show();
				break;
			};
		});
	
		//Apply Mask for Numbered Inputs
		if ( $('input.theme-config-font-size').length > 0 ){
			$('input.theme-config-font-size').each(function(index) {
			 $(this).mask("99?9");
			});
		};

	}
	
	function ubersiteConfigColors(){
		$('input.minicolors').each(function(index) {
		  $(this).minicolors({
			    animationSpeed: 100,
			    animationEasing: 'swing',
			    change: null,
			    changeDelay: 0,
			    control: 'hue',
			    defaultValue: '',
			    hide: null,
			    hideSpeed: 100,
			    inline: false,
			    letterCase: 'lowercase',
			    opacity: false,
			    position: 'default',
			    show: null,
			    showSpeed: 100,
			    swatchPosition: 'left',
			    textfield: true,
			    theme: 'bootstrap'
			});
		});
	}
	
	function setupPopUpWindows(){
		$('a.popup-link').click(function(event) {
			event.preventDefault();
			window.open($(this).attr('href'),'UberTermos','width=1060,height=550,resizable=no,scrollbars=yes,status=no,titlebar=no,toolbar=no,top=50,left=50');
		});
	}
	
	btnFolderHover();
	dropdownMenuNav();
	searchAdvancedOpts();
	searchBarSetup();
	searchHorizontalHidden();
	mapModelAge();
	mapModelMeasures();
	modelShowSecondInfo();
	modelFormValidation();
	modelArtName();
	checkModelAgeBox();
	registerFlow();
	setupAgencyAccountUpgrade();
	getMainPath();
	websiteUpdateThemePreview();
	setupSimpleModal();
	setupWebsiteGuide();
	menuBarNameSetup();
	ubersiteConfigSecondNav();
	ubersiteConfigCustomTheme();
	ubersiteConfigColors();
	setupPopUpWindows();
	
	//loginPanelSetup();
	
});