$(function() {
  $("#models .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#models .itens_per_page select").live("change", function() {
    $.get($("#models_search").action, $("#models_search").serialize(), null, "script");
    return false;
  });
  $("#models .order_column select").live("change", function() {
    $.get($("#models_search").action, $("#models_search").serialize(), null, "script");
    return false;
  });
  $("#models_search").submit(function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
  $("#models #add_selected").live("click", function() {
    var link = this.href + '?models='
    $("input:checked").each(function(index, check){
      link += $(check).val() + ",";
    });
    link = link.substring(0, link.length - 1) //Take out last ','
    $.getScript(link);
    return false;
  });
});