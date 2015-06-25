$(document).ready(function(){

	$('#siteContainer').fadeIn();

	$('.galleryButton').on('click', function(){
		$('#siteContainer').fadeOut();
		setTimeout(function(){ 
			window.location.href = 'gallery.html';
		 }, 500);
	});


})