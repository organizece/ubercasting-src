$(function() {

	$("#logo-actions a").live("click", function(el) {

		el.preventDefault();

		var action = $(this).attr('id');

		$("#logo-actions #logo-update").toggle();
		$("#logo-actions #logo-field").toggle();

		if(action == 'logo-update-cancel'){
			$("#logo-actions #logo-field #website_logo").val("");
		}

	});

	$("#verify_subdomain").live('click', function() {
		$.getScript(this.href + '?subdomain=' + $('#website_subdomain').val());
		return false;
	});
	
	function setupWebsiteConfigPage(){
		$('div#subdomain-form').hide();
		$('div#website-config-form').show();
		
		$('div#website-content-nav ul li a').click(function(event) {
			event.preventDefault();
			
			$('div#website-content-nav ul li').removeClass('website-nav-active');
			
			var myLi = $(this).parent('li');
			myLi.addClass('website-nav-active');
			
			var myId = $(this).attr("id");
			
			if( myId == "change-to-theme" ){
				$('div#subdomain-form').fadeOut('fast', function() {
					$('div#website-config-form').fadeIn('slow');
				});
			}else{
				$('div#website-config-form').fadeOut('fast', function() {
					$('div#subdomain-form').fadeIn('slow');
				});
			};
			
		});
	}
	
	setupWebsiteConfigPage();

});