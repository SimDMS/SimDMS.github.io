$(document).ready(function(){
 // nav-bar scroll
 	$(window).on('scroll', function(){
 		if ($(window).scrollTop()) {
 			$('.site-header').addClass('changed-nav-menu');
 		}
 		else {
 			$('.site-header').removeClass('changed-nav-menu');
 		}
 		
 	 }
 	);
 // /nav-bar scroll


 // owl-carousel
  $(".owl-carousel").owlCarousel({
  	items					:1,
  	loop					:true,
  	autoplay 				:true,
  	autoplayHoverPause		:true,
  	dots					:false,
  	animateOut				:'fadeOut',
  	animatein				:'fadeIn',
    nav             :true
  });
// ------------------------

  // Accepts any class name
 var rellax = new Rellax('.rellax');
 new WOW().init();

// force to work mobile menu
 $('.burger-menu').on('click', function(){
  $('.mobile-menu').toggleClass('mobile-menu-show-close')
 });

 $('.close').on('click', function(){
  $('.mobile-menu').toggleClass('mobile-menu-show-close')
 });




});


