$(document).ready(function(){
	var h_header = $('#header').outerHeight();
	$('#content').css('margin-top',h_header);
	$('.popup-compare').css('margin-top',-h_header);
		$('.toogle-menu').click(function(event){
		$(this).parents('.main-menu').find('ul').slideToggle();
		event.preventDefault();
	});
	
});
$(document).load(function(){
	
});
$(document).resize(function(){
	var h_header = $('#header').outerHeight();
	$('#content').css('margin-top',h_header);
});
 
  