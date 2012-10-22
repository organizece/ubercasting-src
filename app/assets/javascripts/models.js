$(function() {
  $("#models .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#models .pagination select").live("change", function() {
    $.get($("#models_search").action, $("#models_search").serialize(), null, "script");
    return false;
  });
  $("#models_search").submit(function() {
    $.get(this.action, $(this).serialize(), null, "script");
    return false;
  });
});