$(document).ready(function(){

	// nav-bar scroll
 	$(window).on('scroll', function(){
 		if ($(window).scrollTop()) {
 			$('header').addClass('changed-header');
 		}
 		else {
 			$('header').removeClass('changed-header');
 		}
 	 }
 	);
 // /nav-bar scroll


  $(".owl-one").owlCarousel({
  	items					:1,
  	loop					:true,
  	autoplay 				:true,
  	dots					:false,
  	animateOut				:'fadeOut',
  	animateIn				:'fadeIn',
    nav             :true
  });

    $(".owl-two").owlCarousel({
      items:1,
      loop:true,
      dots:true
    });


$('.counter').counterUp({
                delay: 30,
                time: 3000
            });




// плавный переход по якорям
 var $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1100);
	    return false;
});
// -------------------




});