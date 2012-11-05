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
});