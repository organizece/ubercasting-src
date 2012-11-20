$(function() {
  $("#casting_models_criteria .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#casting_models_criteria .itens_per_page select").live("change", function() {
    $.get($("#casting_models_search").action, $("#casting_models_search").serialize(), null, "script");
    return false;
  });
  $("#casting_models_criteria .order_column select").live("change", function() {
    $.get($("#casting_models_search").action, $("#casting_models_search").serialize(), null, "script");
    return false;
  });
  $("#casting_models_search").live("submit", function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
});