$(document).ready(function(){
	$('#2depth').hide();
	var gnb = $('#gnb');
	var depth = $('#2depth');
   	
	gnb.bind('mouseenter mouseover',function(){
		$(depth).slideDown('fast');
	});
   
   	depth.bind('mouseleave',function() {
		$(depth).fadeOut('fast');
	});
	
	gnb.find('li').mouseover(function(){
		var thisNum = $(this).index()+1;
				
		if($('#2depth_img').hasClass('gnb_img_01')){
			$('#2depth_img').removeClass().addClass('gnb_img_0'+thisNum);
		};
	});
	
	gnb.find('li').mouseleave(function(){
		$('#2depth_img').removeClass().addClass('gnb_img_01');
	});
	
	depth.find('ul').mouseover(function(){
		if($('#2depth_img').hasClass('gnb_img_01')){
			$('#2depth_img').removeClass().addClass('gnb_img_0'+$(this).index());
		};
	});
 
	depth.find('ul').mouseleave(function(){
		$('#2depth_img').removeClass().addClass('gnb_img_01');
	});
});




