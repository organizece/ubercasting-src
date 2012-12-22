$(function() {
  $("#agency_customers_criteria .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#agency_customers_criteria .itens_per_page select").live("change", function() {
    $.get($("#agency_customers_search").action, $("#agency_customers_search").serialize(), null, "script");
    return false;
  });
  $("#agency_customers_criteria .order_column select").live("change", function() {
    $.get($("#agency_customers_search").action, $("#agency_customers_search").serialize(), null, "script");
    return false;
  });
  $("#agency_customers_search").live("submit", function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
  $("#agency_customers_criteria #remove_selected").live("click", function() {
    var link = this.href + '?castings='
    $("input:checked").each(function(index, check){
      link += $(check).val() + ",";
    });
    link = link.substring(0, link.length - 1) //Take out last ','
    $.getScript(link);
    return false;
  });
});