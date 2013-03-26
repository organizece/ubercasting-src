$(function() {
  $("#requests_criteria .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#requests_criteria .itens_per_page select").live("change", function() {
    $.get($("#requests_search").action, $("#requests_search").serialize(), null, "script");
    return false;
  });
  $("#requests_criteria .order_column select").live("change", function() {
    $.get($("#requests_search").action, $("#requests_search").serialize(), null, "script");
    return false;
  });
  $("#requests_search").live("submit", function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
  $("#requests_criteria #remove_selected").live("click", function() {
    var link = this.href + '?requests='
    $("input:checked").each(function(index, check){
      link += $(check).val() + ",";
    });
    link = link.substring(0, link.length - 1) //Take out last ','
    $.getScript(link);
    return false;
  });
});