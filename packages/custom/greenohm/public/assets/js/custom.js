$(document).ready(function(){
	var h_header = $('#header').outerHeight();
	$('#content').css('margin-top',h_header);
	$('.popup-compare').css('margin-top',-h_header);
		$('.toogle-menu').click(function(event){
		$(this).parents('.main-menu').find('ul').slideToggle();
		event.preventDefault();
	});
	hove_img ();
	active_tabs();
	delete_item_compare() ;
});
$(document).load(function(){
	
});
$(document).resize(function(){
	var h_header = $('#header').outerHeight();
	$('#content').css('margin-top',h_header);
});
 
 function hove_img () {
	$("ul.img-small li ").click(function(){
	 src = $(this).find('img').attr('src');
	$(this).parents(".list-img").find(".zoom img").attr('src',src);
	} );
 }
 function active_tabs() {
	  $(".content-tab-item").hide();
	  $(".content-tab-item").eq(0).addClass("active");
	  
	 $(".title-tab ul li").click(function(){
		 var index = $(this).index();
		 console.log(index);
		 $(".title-tab ul li").removeClass("active");
		 $(this).addClass("active");
		 $(".content-tab-item").each(function(){
			 $(".content-tab-item").removeClass("active");
			 $(".content-tab-item").eq(index).addClass("active");
		 });
		 locations();
	 });
 }
 function locations() {
	  var data = [{
            title: 'Matagalpa',
            description: 'pretty girls',
            image: 'http://lorempixel.com/400/200/sports/4/', 
            link: 'www.saulburgos.com',
            iconMarker: 'http://static.bershka.net/wcsstore/BershkaStorefrontAssetStore//imgs/google_maps_marker_on.png',
            lat: 12.9232,
            lng: -85.9206
         },
         {
            title: 'Leon',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
            image: 'http://lorempixel.com/400/200/sports/3/', 
            link: 'https://duckduckgo.com/',           
            lat: 12.432,
            lng: -86.8747
         }
      ];

	$('#locatorList').easyLocator({
	   myLocations: data
	});
 }
 function delete_item_compare() {
	 $(".remove").click(function(){
		 $(this).parents("li").hide();
	 });
	 $(".close").click(function(){
		 $(this).parents(".popup-compare").hide();
	 });
	 $('body').click(function(event) {
     if (!$(event.target).closest('.inner-compare,.close').length) {
         $('.popup-compare').hide();
     };
});
jQuery(document).on('click',".brand-product .brand-pro",function(){
	$("html, body").animate({scrollTop: 0}, 800);
	$(this).parents("body").find(".popup-compare").show();
	
	 $(".inner-compare").mCustomScrollbar();
	// setTimeout(function(){ $(".inner-compare").mCustomScrollbar({
		// axis:"yx"
	// })}, 2000); 
});

 }
  