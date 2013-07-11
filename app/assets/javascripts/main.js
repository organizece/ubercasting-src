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
	
	/*
		TOUR » SETUP NAV AND TABS
	*/
	function tourSetup(){
		var isPageTour = $('div.tour-content').length;
		if ( isPageTour > 0 ){
			var fullURL = window.location.href;
			var urlIndex = (fullURL.indexOf("#")+1);
			var mainURL = fullURL.substring(urlIndex,fullURL.length);
			
			$('div.tour-content div.tab-selector-container ul li a').removeClass('link-active');
			$('div#video-player div.video-player-block').hide();
			
			switch(mainURL){
				case "register_manage":
					$('div.tour-content div.tab-selector-container ul li:eq(1) a').addClass('link-active');
					$('div.tour-content div#video-title h4').html("Cadastro e <strong>Gerenciamento</strong>");
					$('div.tour-content div#video-title p').html("Cadastros completos,organizados e padronizados para sua agência.");
					$('div#video-player div.video-player-block:eq(1)').show();
				break;
				case "search_select":
					$('div.tour-content div.tab-selector-container ul li:eq(2) a').addClass('link-active');
					$('div.tour-content div#video-title h4').html("Busque e <strong>Selecione</strong>");
					$('div.tour-content div#video-title p').html("Busca avançada de modelos e seleção de composites para job do seu cliente.");
					$('div#video-player div.video-player-block:eq(2)').show();
				break;
				case "display_share":
					$('div.tour-content div.tab-selector-container ul li:eq(3) a').addClass('link-active');
					$('div.tour-content div#video-title h4').html("Exiba e <strong>Compartilhe</strong>");
					$('div.tour-content div#video-title p').html("Castings  selecionados  e compartilhados online com seus clientes.");
					$('div#video-player div.video-player-block:eq(3)').show();
				break;
				default:
					$('div.tour-content div.tab-selector-container ul li:eq(0) a').addClass('link-active');
					$('div#video-player div.video-player-block:eq(0)').show();
				break;
			};
			
			$('div.tour-content div.tab-selector-container ul li a.tab-item ').click(function(event) {
				event.preventDefault();
				var myTabID = $(this).attr('id');
				
				$('div.tour-content div.tab-selector-container ul li a').removeClass('link-active');
				$(this).addClass('link-active');
				
				$('div#video-player div.video-player-block').hide();
				
				switch(myTabID){
					case "item01":
						$('div.tour-content div#video-title h4').html("Sistema <strong>Geral</strong>");
						$('div.tour-content div#video-title p').html("<strong>Veja agora o Tour completo do Uber-Casting Made Easy,</strong><br />Navegue pelas principais funcionalidades do sistema e veja como esse software online poderá facilitar o dia-dia da sua empresa. Aprenda como cadastrar, buscar e compartilhar castings com os seus clientes de forma prática e dinâmica. Experimente agora essa ferramenta que otimiza, organiza e facilita a entrega dos seus casting.");
						$('div#video-player div.video-player-block:eq(0)').show();
					break;
					case "item02":
						$('div.tour-content div#video-title h4').html("Cadastro e <strong>Gerenciamento</strong>");
						$('div.tour-content div#video-title p').html("Cadastros completos,organizados e padronizados para sua agência.");
						$('div#video-player div.video-player-block:eq(1)').show();
					break;
					case "item03":
						$('div.tour-content div#video-title h4').html("Busque e <strong>Selecione</strong>");
						$('div.tour-content div#video-title p').html("Busca avançada de modelos e seleção de composites para job do seu cliente.");
						$('div#video-player div.video-player-block:eq(2)').show();
					break;
					case "item04":
						$('div.tour-content div#video-title h4').html("Exiba e <strong>Compartilhe</strong>");
						$('div.tour-content div#video-title p').html("Castings  selecionados  e compartilhados online com seus clientes.");
						$('div#video-player div.video-player-block:eq(3)').show();
					break;
				};
			});
			
		};
	}
	
	/*
		FAQ » SCROLL EFFECT
	*/
	function faqScroll(){
		var hasFaq = $('div#faq-questions').length;
		
		if ( hasFaq > 0 ){
			
			$('div#faq-questions ol li a').click(function(event) {
				event.preventDefault();
				var myId = $(this).attr('id');
				var goScroll = 0;
				
				switch(myId){
					case "h01":
						goScroll = $("#faq-block-01").offset().top;
					break;
					case "h02":
						goScroll = $("#faq-block-02").offset().top;
					break;
					case "h03":
						goScroll = $("#faq-block-03").offset().top;
					break;
					case "h04":
						goScroll = $("#faq-block-04").offset().top;
					break;
					case "h05":
						goScroll = $("#faq-block-05").offset().top;
					break;
					case "h06":
						goScroll = $("#faq-block-06").offset().top;
					break;
					case "h07":
						goScroll = $("#faq-block-07").offset().top;
					break;
					case "h08":
						goScroll = $("#faq-block-08").offset().top;
					break;
					case "h09":
						goScroll = $("#faq-block-09").offset().top;
					break;
					case "h10":
						goScroll = $("#faq-block-10").offset().top;
					break;
					case "h11":
						goScroll = $("#faq-block-11").offset().top;
					break;
					case "h12":
						goScroll = $("#faq-block-12").offset().top;
					break;
					case "h13":
						goScroll = $("#faq-block-13").offset().top;
					break;
					case "h14":
						goScroll = $("#faq-block-14").offset().top;
					break;
					case "h15":
						goScroll = $("#faq-block-15").offset().top;
					break;
					case "h16":
						goScroll = $("#faq-block-16").offset().top;
					break;
				};
				
				$('html, body').animate({
					//scrollTop: $("#faq-block-01").offset().top-50
					scrollTop: goScroll-50
				}, 500);
				
			});
			
			$('a.faq-top').click(function(event) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: $("#faq-questions").offset().top-80
				}, 500);
			});
		};
	}
	
	/*
		HOME » VIDEO DISPLAY
	*/
	function videoPlayerDisplay() {
		var hasPlayer = $('div#video-player-container').length;
		
		if ( hasPlayer > 0 ){
			
			var videoDOM = "";
			
			$('div#video-player-container').hide();
			
			/*var params = {
				quality: "high",
				scale: "noscale",
				wmode: "transparent",
				allowscriptaccess: "always",
				bgcolor: "#ffffff"
			};

			var flashvars = {};

			var attributes = {
				id: "video-player",
				name: "video-player"
			};		

			var displayFlash = {
				movie : function(){
					swfobject.embedSWF("./assets/home-video/uber-home-video.swf", "video-player", "800", "450", "9.0.124", "./assets/home-video/expressInstall.swf", flashvars, params, attributes);
				}
			};*/
			
			$('a#link-open-uber-video').click(function(event) {
				event.preventDefault();
				$('div#video-player-container').show();
				
				if ( $('div#video-player-container div#video-player iframe').length > 0 ){
					videoDOM = $('div#video-player-container iframe');
				}else{
					$('div#video-player-container').append(videoDOM);
				};
				
			});
			
			$('div#video-player-modal').click(function(event) {
				event.preventDefault();
				$('div#video-player-container iframe').remove();
				$('div#video-player-container').hide();
			});
			
		};
		
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
	
	/*
		MODELS » SEARCH » SEARCH CRITERIA SETUP
	*/
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
						var ry = 256 / (coordH-30);

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
						var ry = 256 / (coordH-30);

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
	
	function uploadProfilePicLink(){
		$('a#link-choose-profile-pic').click(function(event) {
			$(this).hide();
			$('img#ajax-loadr').show();
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
	
	/*
		MODELS » REGISTER » ART NAME
	*/
	function modelArtName(){
		if ( $('input#model_art_name').length >= 1 ){
			$('input#model_name').blur(function(event) {
				var modelName = $(this).val();
				var spaceIndex = modelName.indexOf(" ");
				var artName = modelName.substring(0,spaceIndex);
				artName += modelName.substring(spaceIndex,spaceIndex+5);
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
	
	/*
		AGENCY » REGISTER » MAIN FLOW
	*/
	function setupRegisterFlow(){
		
		if ( $('div#plans').length > 0 ){
			// PLANS DEFINITION
			var freeMonthPrice = 0;

			var topMonthPrice = $('input#monthly-price-standard').val();
			var uberMonthPrice = $('input#monthly-price-uber').val();

			var topSemiPrice = $('input#semiannual-price-standard').val();
			var uberSemiPrice = $('input#semiannual-price-uber').val();

			var topAnnualPrice = $('input#annual-price-standard').val();
			var uberAnnualPrice = $('input#annual-price-uber').val();

			var freeTemplates = 0;
			var topTemplates = 5;
			var uberTemplates = 1000;

			var freeModels = 5;
			var topModels = 50;
			var uberModels = 1000;

			var freeDomain = false;
			var topDomain = true;
			var uberDomain = true;

			var currentPlanPeriod = $('input#agency_account_period').val();
			var currentPlanType = "";
			
			//APPLY INITIAL PRICES AND INFORMATION
			$('div#plan-type div#type-03 p.price-top span.month-price-val').text("R$"+topAnnualPrice);
			$('div#plan-type div#type-02 p.price-top span.month-price-val').text("R$"+uberAnnualPrice);
			
			switch( currentPlanPeriod ){
				case "annual":
					$('div#plan-type span.month-mulitplier').text('12x');
					$('div#plan-type div#type-03 span.price-total-val').text("Valor Total: R$ "+(topAnnualPrice*12)+",00");
					$('div#plan-type div#type-02 span.price-total-val').text("Valor Total: R$ "+(uberAnnualPrice*12)+",00");
					$('div#plan-type div ul li span').text("Anual");
				break;
				case "semiannual":
					$('div#plan-type span.month-mulitplier').text('6x');
					$('div#plan-type div#type-03 span.price-total-val').text("Valor Total: R$ "+(topSemiPrice*6)+",00");
					$('div#plan-type div#type-02 span.price-total-val').text("Valor Total: R$ "+(uberSemiPrice*6)+",00");
					$('div#plan-type div ul li span').text("Semestral");
				break;
				case "monthly":
					$('div#plan-type span.month-mulitplier').text('');
					$('div#plan-type div#type-03 span.price-total-val').text("");
					$('div#plan-type div#type-02 span.price-total-val').text("");
					$('div#plan-type div ul li span').text("Mensal");
					$('div#plan-type div ul li:eq(3) a').hide();
				break;
			}
			
		};

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
		$('a.has-tooltip').click(function(event) {
			event.preventDefault();
			return false;
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
					$('div#plan-type div#type-03 p.price-top span.month-price-val').text("R$"+topMonthPrice+"0");
					$('div#plan-type div#type-02 p.price-top span.month-price-val').text("R$"+uberMonthPrice+"0");
					
					$('div#plan-type span.month-mulitplier').text('');
					$('div#plan-type div#type-03 span.price-total-val').text("");
					$('div#plan-type div#type-02 span.price-total-val').text("");
					$('div#plan-type div ul li span').text("Mensal");
					$('div#plan-type a.renew').hide();
				break;
				case "Semestral":
					$('input#agency_account_period').val("semiannual");
					$('div#plan-type div#type-03 p.price-top span.month-price-val').text("R$"+(topSemiPrice)+"0");
					$('div#plan-type div#type-02 p.price-top span.month-price-val').text("R$"+(uberSemiPrice)+"0");
					
					$('div#plan-type span.month-mulitplier').text('6x');
					$('div#plan-type div#type-03 span.price-total-val').text("Valor Total: R$"+(topSemiPrice*6)+",00");
					$('div#plan-type div#type-02 span.price-total-val').text("Valor Total: R$"+(uberSemiPrice*6)+",00");
					$('div#plan-type div ul li span').text("Semestral");
					$('div#plan-type a.renew').show();
				break;
				case "Anual":
					$('input#agency_account_period').val("annual");
					$('div#plan-type div#type-03 p.price-top span.month-price-val').text("R$"+(topAnnualPrice)+"0");
					$('div#plan-type div#type-02 p.price-top span.month-price-val').text("R$"+(uberAnnualPrice));
					
					$('div#plan-type span.month-mulitplier').text('12x');
					$('div#plan-type div#type-03 span.price-total-val').text("Valor Total: R$"+(topAnnualPrice*12)+",00");
					$('div#plan-type div#type-02 span.price-total-val').text("Valor Total: R$"+(uberAnnualPrice*12)+",00");
					$('div#plan-type div ul li span').text("Anual");
					$('div#plan-type a.renew').show();
				break;
			}
			
		});
		
		//Set Up PLAN TYPE input hidden, fill up the summary folder with account data and change step
		$('div#plan-type div a.btn-deal').click(function(event) {
			
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
					/* PRICE SET UP RIGHT BELOW */
				break;
				case "type-02":
					currentPlanType = "uber";
					$('input#agency_account_type').val("uber");
					$('div.plan-summary-folder h4.plan-summary-type').text("Plano Über");
					$('div.plan-summary-folder ul li.plan-summary-period').text("Plano: ÜBER");
					$('div.plan-summary-folder ul li.plan-summary-template').text("Templates para o site: todos");
					$('div.plan-summary-folder ul li.plan-summary-models').text("Modelos para cadastro: ilimitado");
					$('div.plan-summary-folder ul li.plan-summary-domain').text("Domínio próprio: Sim");
					/* PRICE SET UP RIGHT BELOW */
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
									$('div#register-pay-03 ul.payments li:first input').attr('checked', 'checked');
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
				
				//INPUT SUBMIT
				$('input#submit-register-pay').click(function(event) {
					var agreementCheck = $(this).parent("div.form-register-field").find('p input').is(':checked');
					if ( agreementCheck ){
						return true;
					}else{
						alert("Você deve aceitar os temos de uso.");
						return false; 
					};
				});
				
				//Fill PLAN ID Hidden input
				var planIdInput = $('input#agency_account_period').val()+"-"+$('input#agency_account_type').val();
				var planId = $('input#'+planIdInput).val();
				$('input#plan_id').val(planId);
				
				//Fill PLAN PRICE Hidden input and setup price folder
				var planPriceInput = $('input#agency_account_period').val()+"-price-"+$('input#agency_account_type').val();
				var planPrice = $('input#'+planPriceInput).val();
				$('input#plan_price').val(planPrice);
				$('div.plan-summary-folder p.plan-price').html("<span>R$</span> "+(planPrice)+"0 <span>/mês</span>");
				
			}else{
				$('div.form-register-field input.input-btn-gold-light-4-column').click(function(event) {
					
					var myFormRegister = $(this).parents("div.form-register");
					var formValid = registerFormValidation(myFormRegister);
					var agreementCheck = $(this).parent("div.form-register-field").find('p input').is(':checked');
					
					if (formValid && agreementCheck) {
						return true;
					}else{
						if ( !agreementCheck ){ alert("Você deve aceitar os temos de uso."); };
						return false;
					};
					
				});
				
				//Fill PLAN ID Hidden input
				$('input#plan_id').val("nil");
				
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
	
	/*
		AGENCY » MY ACCOUNT » PROFILE PICTURE
	*/
	function setupAgencyProfilePic(){
		if ($('div#edit-agency-profile-pic').length > 0) {
			$('div#profile-pic-container img').resizeToParent();
		};
	}
	
	function setupAgencyAccountUpgrade(){
		
		if ( $('div#agency-account-upgrade').length ){
			
			// PLANS DEFINITION
			var freeMonthPrice = 0;
			
			var topMonthPrice = $('input#monthly-price-standard').val();
			var uberMonthPrice = $('input#monthly-price-uber').val();

			var topSemiPrice = $('input#semiannual-price-standard').val();
			var uberSemiPrice = $('input#semiannual-price-uber').val();

			var topAnnualPrice = $('input#annual-price-standard').val();
			var uberAnnualPrice = $('input#annual-price-uber').val();
			
			var subPeriod = $('input#account_period').val();
			var subType = $('input#account_type').val();
			var finalId = "";
			
			var fullPrice = 0;
			
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
			
			//FILL INITIAL INFO
			$('div.ui-tab-container ul#agency-account-upgrade-period').hide();
			
			var currentAccountType = $('input#account_type').val();
			var currentAccountPeriod = $('input#account_period').val();
			
			if ( currentAccountPeriod.length <= 2 ){
				switch(currentAccountPeriod){
					case "1":
						currentAccountPeriod = "monthly";
					break;
					case "6":
						currentAccountPeriod = "semiannual";
					break;
					case "12":
						currentAccountPeriod = "annual";
					break;
				};
			};
			
			if ( currentAccountType != "free" ){
				var initPriceId = currentAccountPeriod +"-price-"+ currentAccountType;
				$('ul#agency-account-upgrade-price li span#account-up-actual-price').text("R$ "+$('input#'+initPriceId).val()+"0");
			}else{
				$('ul#agency-account-upgrade-price li span#account-up-actual-price').text("Grauito");
				$('ul#agency-account-upgrade-price li:eq(3)').hide();
				$('ul#agency-account-upgrade-price li:eq(4)').hide();
			};
			
			$('ul#agency-account-upgrade-type li a').each(function(index) {
				if ( $(this).attr('class') == currentAccountType ){
					$(this).addClass('active-tab');
				};
			});
			
			$('ul#agency-account-upgrade-period li a').each(function(index) {
				if ( $(this).attr('class') == currentAccountPeriod ){
					$(this).addClass('active-tab');
				};
			});
			
			//CHECK ACCOUNT TYPE AND PERIOD
			$('div.ui-tab-container ul li a').each(function(index) {
			  $(this).click(function(event) {
			  	
				event.preventDefault();
				$(this).parents('div.ui-tab-container').find('ul li a').removeClass('active-tab');
				$(this).addClass('active-tab');
				
				var linkClass = $(this).attr('class');
				var activeIndex = linkClass.indexOf("active-tab");
				var linkValue = linkClass.substring(0,activeIndex-1);
				
				if ( $(this).parents('ul').attr('id') == "agency-account-upgrade-type" ){
					subType = linkValue;
					$('input#account_type').val(subType);
					$('div.ui-tab-container ul#agency-account-upgrade-period').show();
					$('div.ui-tab-container ul#agency-account-upgrade-period li:eq(2) a').trigger('click');
				};
				
				if ( $(this).parents('ul').attr('id') == "agency-account-upgrade-period" ){
					subPeriod = linkValue;
					$('input#account_period').val(subPeriod);
				};
				
				//APPLY PLAN ID AND PRICE TO HIDDEN INPUTS
				finalId = subPeriod +"-"+ subType;
				finalPriceId = subPeriod +"-price-"+ subType;
				$('input#plan_id').val($('input#'+finalId).val());
				$('input#plan_price').val($('input#'+finalPriceId).val());
				
				//CHECK PERIOD FOR PRICE MULTIPLIER
				switch(subPeriod){
					case "monthly":
						fullPrice = $('input#plan_price').val() * 1;
					break;
					case "semiannual":
						fullPrice = $('input#plan_price').val() * 6;
					break;
					case "annual":
						fullPrice = $('input#plan_price').val() * 12;
					break;
				};
				
				//STRING CORRECTION FOR UBER ANNUAL MONTH PRICE
				if ( subType == "uber" && subPeriod == "annual" ){
					$('span#account-up-upgrade-price').text("R$ "+$('input#plan_price').val()+"/mês");
				}else{
					$('span#account-up-upgrade-price').text("R$ "+$('input#plan_price').val()+"0/mês");
				};
				
				//APPLY PLAN ID AND PRICE TO HIDDEN INPUTS
				$('span.upgrade-total-value').text("R$ "+fullPrice+",00/total");
				
				//APPLY RULES FOR EXPIRATION DATE AND EXPIRE INFORMATION
				if ( subType != "free" ){
					$('ul#agency-account-upgrade-price li:eq(3)').show();
					$('ul#agency-account-upgrade-price li:eq(4)').show();
					
					var accountDate = new Date();
					var expireDay = accountDate.getDate();
					var expireMonth = accountDate.getMonth()+1;
					var expireYear = accountDate.getFullYear()+1;
					var expireDate = expireDay.toString()+"/"+expireMonth.toString()+"/"+expireYear.toString();
					
					$('ul#agency-account-upgrade-price li:eq(4) span').text(expireDate);
				}else{
					$('ul#agency-account-upgrade-price li:eq(3)').hide();
					$('ul#agency-account-upgrade-price li:eq(4)').hide();
				};
				
			  });
			});
		};
		
	}
	
	function getMainPath() {
		var fullURL = window.location.href;
		var mainURL = "";
		
		if ( fullURL.indexOf("www") != -1 ){
			mainURL = fullURL.substring(11, fullURL.lastIndexOf("/"));
		}else{
			mainURL = fullURL.substring(7, fullURL.lastIndexOf("/"));
		};
		
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
	
	/*
		AGENCY » STEP BY STEP GUIDE SETUP
	*/
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
						$('input#website_subdomain').val(fullDomainName.toLowerCase());
					};
				}else{
					$('a#verify_subdomain').click(function(event) {
						$(this).hide();
					});
					$('input#website_subdomain').keypress(function(event) {
						$('a#verify_subdomain').show();
					});
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
	};
	
	/*
		SUBDOMAIN » SETUP LOGIN WINDOW
	*/
	function subdomainLogin(){
		$('a.sub-popup-link').click(function(event) {
			event.preventDefault();
			
			var popWIndex = $(this).attr('class').indexOf("popupw-")+7;
			var popWLastIndex = $(this).attr('class').lastIndexOf(" ");
			var popHIndex = $(this).attr('class').indexOf("popuph-")+7;
			var popLastHIndex = $(this).attr('class').length;
			
			var popW = parseInt($(this).attr('class').substring(popWIndex,popWLastIndex),10);
			var popH = parseInt($(this).attr('class').substring(popHIndex,popLastHIndex),10);
			
			var agencyLogo = "";
			
			if ( $(this).parent('li').length > 0 ){
				agencyLogo = $(this).parent('li').find('input#logo-img').val();	
			}else{
				agencyLogo = $(this).parent('div').find('input#logo-img').val();
			};
			
			window.open(($(this).attr('href')+"?sublogo="+agencyLogo),'UberTermos','width='+popW+',height='+popH+',resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,top=30,left=30');
		});
	};
	
	function subdomainLoginVerify(){
		var isSubLogin = $('#customer-login-container').length;
		
		if ( isSubLogin > 0 ){
			var myURL = window.location.href;
			var logoUrlIndex = myURL.indexOf("?sublogo=")+9;
			var logoUrl = myURL.substring(logoUrlIndex,myURL.length);
			
			if ( logoUrlIndex != 8 ){
				var myLogoImg = '<img src='+logoUrl+' style="height: 140px; width: auto;" />';
				$('div#agency-logo').append(myLogoImg);
				
				$('a').each(function(index) {
					var myHref = $(this).attr('href');
					myHref += "?sublogo="+logoUrl;
					$(this).attr('href', myHref);
				});
			};
		};
		
		var windowW = $(window).width();
		var hasAlert = $('div.alert').length;
		var alertMsg = "";
		
		if ( hasAlert > 0 ){
			alertMsg = $('div.alert').text();
			if ( alertMsg.indexOf("Login") != -1 && ( windowW <= 555 ) ){
				$('div.alert').parents('body').remove();
				window.opener.location.reload();
				window.close();
			};
		};
		
	};
	
	/*
		PHOTO UPLOAD » VIDEO UPLOAD » CHANGE VIDEO STRING TO EMBED
	*/
	function videoString(){
		var videoContainer = $('div#model-video-container').length;
		
		if ( videoContainer > 0 ){
			
			var videoString = "";
			var videoStringIndex = 0;
			var videoCode = "";
			
			$('input#model_video').blur(function(event) {
				videoString = $(this).val();
				
				if ( videoString.indexOf("/embed/") == -1 ){
					videoStringIndex = videoString.indexOf("v=")+2;
					videoCode = videoString.substring(videoStringIndex, videoString.length);
					$(this).val('http://www.youtube.com/embed/'+videoCode);
				};
				
			});
			
		};
	}
	
	/*
		PHOTO UPLOAD » CHECK IF THERE IS A PROFILE PICTURE
		If Not, hides the continue button
	*/
	function checkProfilePicture(){
		var isPhotoUpload = $('div#photo-upload').length; 
		if ( isPhotoUpload > 0 ){
			var modelProfilePic = $('input#model_profile_picture').val();
			if( modelProfilePic == "" || modelProfilePic == undefined || modelProfilePic == null ){
				$('div.bottom-ctrl-bar a#btn-continue-composite').hide();
			}else{
				$('div.bottom-ctrl-bar a#btn-continue-composite').show();
			};
		};
	}
	
	btnFolderHover();
	tourSetup();
	faqScroll();
	videoPlayerDisplay();
	dropdownMenuNav();
	searchAdvancedOpts();
	searchBarSetup();
	searchHorizontalHidden();
	uploadProfilePicLink();
	mapModelAge();
	modelShowSecondInfo();
	modelFormValidation();
	modelArtName();
	checkModelAgeBox();
	registerFlow();
	setupAgencyAccountUpgrade();
	setupAgencyProfilePic();
	getMainPath();
	websiteUpdateThemePreview();
	setupSimpleModal();
	setupWebsiteGuide();
	menuBarNameSetup();
	ubersiteConfigSecondNav();
	ubersiteConfigCustomTheme();
	ubersiteConfigColors();
	setupPopUpWindows();
	subdomainLogin();
	subdomainLoginVerify();
	videoString();
	checkProfilePicture();
	
});