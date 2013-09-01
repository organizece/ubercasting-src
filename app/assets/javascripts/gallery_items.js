$(function() {
    $("#gallery_criteria .pagination a").live("click", function() {
        $.getScript(this.href);
        return false;
    });
    $("#gallery_criteria .itens_per_page select").live("change", function() {
        $.get($("#gallery_search").action, $("#gallery_search").serialize(), null, "script");
        return false;
    });
    $("#gallery_criteria .order_column select").live("change", function() {
        $.get($("#gallery_search").action, $("#gallery_search").serialize(), null, "script");
        return false;
    });
    $("#gallery_search").live("submit", function() {
        $.get(this.action, $(this).serialize(), null, "script");
        return false;
    });
});