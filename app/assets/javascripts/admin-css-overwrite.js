// JavaScript Document

$(document).ready(function(){
	
	function overwriteInputs(){
		
		// GENERAL STRING INPUTS
		var isThereString = $('input.string').size();
		
		for ( var i = 0; i < isThereString; i++ ) {
			$('input.string:eq('+i+')').addClass('input-txt-light-4-column');
		};
		
		// GENERAL PASSWORD INPUTS
		var isTherePass = $('input.password').size();
		
		for ( var i = 0; i < isTherePass; i++ ) {
			$('input.password:eq('+i+')').addClass('input-txt-light-4-column');
		};
		
	}
	
	overwriteInputs();
	
});