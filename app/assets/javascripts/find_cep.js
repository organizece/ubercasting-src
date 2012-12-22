$(document).ready(function() {
 
	$("#find_cep").click(function(event){

	event.preventDefault();
	var cep = "";
	
	if( $('div#admin-model-insert-basic-info').length != 0 ){
		cep = $("#model_cep").val();
	}else if( $('div#edit-agency-content').length != 0 ){
		cep = $("#agency_cep").val();
	}else if( $('div#agency-customer-manager-content').length != 0 ){
		cep = $("#agency_customer_cep").val();
	};

	if ($.trim(cep) != "") {
		cep = cep.replace('.', '');
		cep = cep.replace('-', '');
		
		$.getJSON("/find_cep/" + cep, function(json){
		
			if (json.success == 1) {
				if( $('div#admin-model-insert-basic-info').length != 0 ){
					$("#model_address").val(json.address);
					$("#model_neighborhood").val(json.neighborhood);
					$("#model_city").val(json.city);
					$("#model_state").val(json.state);
				}else if( $('div#edit-agency-content').length != 0 ){
					$("#agency_address").val(json.address);
					$("#agency_neighborhood").val(json.neighborhood);
					$("#agency_city").val(json.city);
					$("#agency_state").val(json.state);
				}else if( $('div#agency-customer-manager-content').length != 0 ){
					$("#agency_customer_street").val(json.address);
					$("#agency_customer_neighborhood").val(json.neighborhood);
					$("#agency_customer_city").val(json.city);
					$("#agency_customer_state").val(json.state);
				};
			} else {
				alert("Cep não encontrado.");
			}
		});
	}
	});

});