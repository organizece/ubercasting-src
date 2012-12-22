$(function() {
  $("#castings_criteria .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#castings_criteria .itens_per_page select").live("change", function() {
    $.get($("#castings_search").action, $("#castings_search").serialize(), null, "script");
    return false;
  });
  $("#castings_criteria .order_column select").live("change", function() {
    $.get($("#castings_search").action, $("#castings_search").serialize(), null, "script");
    return false;
  });
  $("#castings_search").live("submit", function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
  $("#casting_models_criteria #remove_selected").live("click", function() {
    var link = this.href + '?model_castings='
    $("input:checked").each(function(index, check){
      link += $(check).val() + ",";
    });
    link = link.substring(0, link.length - 1) //Take out last ','
    $.getScript(link);
    return false;
  });
  $("#castings_criteria #remove_selected").live("click", function() {
    var link = this.href + '?castings='
    $("input:checked").each(function(index, check){
      link += $(check).val() + ",";
    });
    link = link.substring(0, link.length - 1) //Take out last ','
    $.getScript(link);
    return false;
  });
});