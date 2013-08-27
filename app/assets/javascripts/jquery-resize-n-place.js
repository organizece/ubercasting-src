/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 */
 
jQuery.fn.resizeToParent = function(options) {
  var defaults = {
   parent: 'div'
  };
 
  var options = jQuery.extend(defaults, options);
 
  return this.each(function() {
    var o = options;
    var obj = jQuery(this);
 
    // bind to load of image
    obj.load(function() {
		// dimensions of the parent
		var parentWidth = obj.parents(o.parent).width();
		var parentHeight = obj.parents(o.parent).height();

		// dimensions of the image
		var imageWidth = obj.width();
		var imageHeight = obj.height();

		// step 1 - calculate the percentage difference between image width and container width
		var diff = imageWidth / parentWidth;

		// step 2 - if height divided by difference is smaller than container height, resize by height. otherwise resize by width
		if ((imageHeight / diff) < parentHeight) {
		 obj.css({'width': 'auto', 'height': parentHeight});

		 // set image variables to new dimensions
		 imageWidth = imageWidth / (imageHeight / parentHeight);
		 imageHeight = parentHeight;
		} else {
		 obj.css({'height': 'auto', 'width': parentWidth});

		 // set image variables to new dimensions
		 imageWidth = parentWidth;
		 imageHeight = imageHeight / diff;
		}

		// step 3 - center image in container
		var leftOffset = (imageWidth - parentWidth) / -2;
		var topOffset = (imageHeight - parentHeight) / -2;
		
		obj.css({'left': leftOffset, 'top': topOffset});
		
		/* ÜBER CUSTOM ADD ON */
		if ( ($('body div#admin-model-search-container').length > 0) || ($('body div#model-composite-content').length > 0) ){
			var myParentID = obj.parent('div').attr('id');
			
			switch( myParentID ){
				case "composite-cover":
					obj.css({'left': obj.parents('div#composite-template').find('input#composite_main_photo_x').val()+'px', 
							 'top': obj.parents('div#composite-template').find('input#composite_main_photo_y').val()+'px'});
				break;
				case "composite-01":
					obj.css({'left': obj.parents('div#composite-template').find('input#composite_first_sub_photo_x').val()+'px', 
							 'top': obj.parents('div#composite-template').find('input#composite_first_sub_photo_y').val()+'px'});
				break;
				case "composite-02":
					obj.css({'left': obj.parents('div#composite-template').find('input#composite_second_sub_photo_x').val()+'px', 
							 'top': obj.parents('div#composite-template').find('input#composite_second_sub_photo_y').val()+'px'});
				break;
				case "composite-03":
					obj.css({'left': obj.parents('div#composite-template').find('input#composite_third_sub_photo_x').val()+'px', 
							 'top': obj.parents('div#composite-template').find('input#composite_third_sub_photo_y').val()+'px'});
				break;
				case "composite-04":
					obj.css({'left': obj.parents('div#composite-template').find('input#composite_fourth_sub_photo_x').val()+'px', 
							 'top': obj.parents('div#composite-template').find('input#composite_fourth_sub_photo_y').val()+'px'});
				break;
			}
			
		};
    
	});
 
    // force ie to run the load function if the image is cached
    if (this.complete) {
      obj.trigger('load');
    }
  });
};