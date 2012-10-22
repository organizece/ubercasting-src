$(document).ready(function() {
 
  $("#find_cep").click(function(event){
    event.preventDefault();
    var cep = $("#model_cep").val();
    if ($.trim(cep) != "") {
      cep = cep.replace('.', '');
      cep = cep.replace('-', '');
      $.getJSON("/find_cep/" + cep, function(json){
        if (json.success == 1) {
          $("#model_address").val(json.address);
          $("#model_neighborhood").val(json.neighborhood);
          $("#model_city").val(json.city);
          $("#model_state").val(json.state);
        } else {
          alert("Cep não encontrado.");
        }
      });
    }
  });
});