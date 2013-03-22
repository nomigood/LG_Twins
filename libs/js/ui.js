
$(document).ready(function() {
	$('#gnb').on('mouseenter keyup', function() {
	    $('#2depth').removeClass("dnone");
		return false;
	});
	
	$('#2depth').on('mouseleave', function() {
	    $('#2depth').addClass("dnone");   
	});
		    
}); // document.ready


