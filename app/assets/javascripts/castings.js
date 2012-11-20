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
});