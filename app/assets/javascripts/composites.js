$(function() {
  
  // there's the gallery and the trash
  var $gallery = $( "#model-gallery" ),
    $composite = $( "#composite-template" );
    
  // let the gallery items be draggable
  $( "li", $gallery ).draggable({
    cancel: "p", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move"
  });
  
  // let the trash be droppable, accepting the gallery items
  $( "div#composite-template div.is-droppable" ).droppable({
    drop: function( event, ui ) {
      
      var imgSrc = $("img",ui.draggable).prop("src");
      
      $(this).text(" ");
      $('<img src="'+imgSrc+'" alt="Model Photo" style="display:none;">').appendTo($(this));
      
      var holderWidth = $(this).width();
      var holderHeight = $(this).height();
      
      var imgW = $("img",this).width();
      var imgH = $("img",this).height();
      
      if( imgW < holderWidth || imgW > holderWidth ){
        
        $("img",this).width(holderWidth);
      
      }
      
      $("img",this).fadeIn("slow");
      
      if( $(this).prop("id") == "composite-cover" ){
        $("img",this).css("margin-top","-150px");
      }
      
      switch( $(this).prop("id") ){
        case "composite-cover":
          $("input#main_photo_id").val( $("img",ui.draggable).prop("id") );
        break;
        case "composite-01":
          $("input#first_sub_photo_id").val( $("img",ui.draggable).prop("id") );
        break;
        case "composite-02":
          $("input#second_sub_photo_id").val( $("img",ui.draggable).prop("id") );
        break;
        case "composite-03":
          $("input#third_sub_photo_id").val( $("img",ui.draggable).prop("id") );
        break;
        case "composite-04":
          $("input#fourth_sub_photo_id").val( $("img",ui.draggable).prop("id") );
        break;
      }
      
    }
  });
  
});