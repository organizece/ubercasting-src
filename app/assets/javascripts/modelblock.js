// JavaScript Document

$(document).ready(function(){
	
	function modelBlockMoreLinks(){
		$('div#models a.model-box-open-link').click(function(event) {
			
			var myIndex = $(this).parents("div.model-box").index();
			$('div.model-box:eq('+myIndex+') div.model-box-links li.closed').slideToggle(400);
			
		});
	}
	
	modelBlockMoreLinks();
	
});