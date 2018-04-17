/*global $, window*/
/*jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar, white*/

$(document).ready(function () {
    "use strict";
    
    var my_posts = $("[data-toggle=tooltip]"),
        size = $(window).width(), i, the_post;
    for (i = 0; i < my_posts.length; i += 1) {
		the_post = $(my_posts[i]);
		if (the_post.hasClass('invert') && size >=767 ) {
			the_post.tooltip({ placement: 'left'});
			the_post.css("cursor", "pointer");
		} else {
			the_post.tooltip({ placement: 'right'});
			the_post.css("cursor", "pointer");
		}
	}
});