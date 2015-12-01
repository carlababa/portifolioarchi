//This is a jQuery plugin, when you click in the site images
//it will generate an slideshow and you can move through the images by clicking 
//forward or backward


$(document).ready(function() {
	$('#gallery').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
});