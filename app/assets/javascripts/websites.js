$(function() {
  $("#logo-actions a").live("click", function(el) {
    var action = $(this).attr('id');
    $("#logo-actions #logo-update").toggle();
    $("#logo-actions #logo-field").toggle();
    if(action == 'logo-update-cancel'){
      $("#logo-actions #logo-field #website_logo").val("");
    }
  });
});