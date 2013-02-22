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

		    $("img",this).resizeToParent();

		    $("img",this).fadeIn("fast");

		    switch( $(this).prop("id") ){
		        case "composite-cover":
		          $("input#composite_main_photo_id").val( $("img",ui.draggable).prop("id") );
		        break;
		        case "composite-01":
		          $("input#composite_first_sub_photo_id").val( $("img",ui.draggable).prop("id") );
		        break;
		        case "composite-02":
		          $("input#composite_second_sub_photo_id").val( $("img",ui.draggable).prop("id") );
		        break;
		        case "composite-03":
		          $("input#composite_third_sub_photo_id").val( $("img",ui.draggable).prop("id") );
		        break;
		        case "composite-04":
		          $("input#composite_fourth_sub_photo_id").val( $("img",ui.draggable).prop("id") );
		        break;
		    }
		}
	});

	
	// IF HIDDEN INPUTS HAVE VALUES, PLACE IMGS INSIDE COMPOSITE
	function checkAndPlaceImgs(){
		
		var inputTotal = $('div#composite-template input').size();
		var inputValue = new Array(inputTotal);
		
		var divContainer = new Array(inputTotal);
		
		var imgSrc = new Array(inputTotal);
		var imgSrcCount = 0;
		var imgCurID = 0;
		var allImgsCount = $('ul#model-gallery img').size();
		
		
		/* COLLECTS AND STORES ALL INPUT HIDDEN VALUES */
		for (var i = 0; i < inputTotal; i++) {
			inputValue[i] = $('div#composite-template input:eq('+i+')').val();
		};
		
		if( inputValue[0] != "" ){
			
			/* COLLECTS AND STORES ALL COMPOSITE CONTAINER DIVs */
			for (var p = 0; p < inputTotal; p++) {
				divContainer[p] = $('div#composite-template div.is-droppable:eq('+p+')');
			};


			/* FOR EACH IMG ON THE COMPOSITE, CHECK THE IMG GALLERY ARRAY SEARCHING FOR THE CORRESPONDENT IMG */
			for (var m = 0; m < imgSrc.length; m++) {

				for (var j = 0; j < allImgsCount; j++) {

					imgCurID = $('ul#model-gallery img:eq('+j+')').prop("id");

					if( imgCurID == inputValue[m] ){

						imgSrc[m] = $('ul#model-gallery img:eq('+j+')').prop("src");
						break;
					}

				};

			};

			/* PLACE THE IMAGES INSIDE THE COMPOSITE */
			for (var d = 0; d < inputTotal; d++) {
				divContainer[d].text("");
				divContainer[d].append('<img src="'+imgSrc[d]+'" alt="Model Photo" height="10">');

				$("img",divContainer[d]).resizeToParent();
			};
			
		}
		
	}

	// CHANGE COMPOSITE TEMPLATE
	function setupCompositeTemplate(){
		$('select#template-composite').change(function(event) {
			
			var templateType = $(this).val();
			
			$('div#composite-template').removeClass('composite-type-01');
			$('div#composite-template').removeClass('composite-type-02');
			$('div#composite-template').removeClass('composite-type-03');
			
			switch ( templateType ){
				case "template01":
					$('div#composite-template').addClass('composite-type-01');
					$('input#composite_composite_style').val('composite-type-01');
				break;
				case "template02":
					$('div#composite-template').addClass('composite-type-02');
					$('input#composite_composite_style').val('composite-type-02');
				break;
				case "template03":
					$('div#composite-template').addClass('composite-type-03');
					$('input#composite_composite_style').val('composite-type-03');
				break;
			}
			
		});
	}
	
	//COMPOSITE IMAGE GALLERY
	function setupCompositeImgGallery(){
		var hasGallery = $('div#container-composite ul#model-gallery').length;
		if ( hasGallery > 0 ){
			$('div#container-composite ul#model-gallery li.is-draggable img').resizeToParent({parent: 'li.is-draggable'});
		};
	}
	
	//SETUP TOPBAR USER NAME
	function menuBarNameSetup(){
		var myNameLength = $('div#secundary-links ul li.agency-owner-name').text().length;
		
		if ( myNameLength > 24 ){
			var ownerNameFull = $('div#secundary-links ul li.agency-owner-name').text();
			var ownerName = ownerNameFull.substring(4,ownerNameFull.length);
			var spacePoint = ownerName.indexOf(" ");
			var firstName = ownerName.substring(0,spacePoint);
			firstName += ",";
			$('div#secundary-links ul li.agency-owner-name').text("Olá "+firstName);
		};
		
		$('div#secundary-links ul li.agency-owner-name').css('font-size', '13px');
		
	}
	
	checkAndPlaceImgs();
	setupCompositeTemplate();
	setupCompositeImgGallery();
	menuBarNameSetup();
  
});