/*
 * Plugin Name: Resize Image to Parent Container
 *
 * Author: Christian Varga
 * Author URI: http://christianvarga.com
 *
 */
jQuery.fn.resizeToParent=function(e){var t={parent:"div"},e=jQuery.extend(t,e);return this.each(function(){var t=e,n=jQuery(this);n.load(function(){var e=n.parents(t.parent).width(),r=n.parents(t.parent).height(),i=n.width(),s=n.height(),u=i/e;s/u<r?(n.css({width:"auto",height:r}),i/=s/r,s=r):(n.css({height:"auto",width:e}),i=e,s/=u);var a=(i-e)/-2,f=(s-r)/-2;n.css({left:a,top:f})}),this.complete&&n.trigger("load")})};