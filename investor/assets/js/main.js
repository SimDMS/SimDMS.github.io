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

$('.button, .service-btn').on('click', function(event){
  event.preventDefault();
  alert('Сєва, цікаво?? Тут пізніше буде гарне вспливаюче вікно :)');
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

// arrow button
$('.arrow-to-menu').on('click', function(event){
  $(this).toggleClass('arrow-to-top');
});

 $('#arrow-link').on('click', function(){
  if ($(this).attr('href')=='#footer'){
    $(this).attr('href','#main-top');
  } else {
    $(this).attr('href', '#footer')
  };
 });
// ------------

$(window).scroll(function(){
 if($(window).scrollTop() >= $('#footer').offset().top) {
  $('.arrow-to-menu').addClass('arrow-to-top');
  $('#arrow-link').attr('href','#main-top');
 } else if ($(window).scrollTop() === 0) {
  $('.arrow-to-menu').removeClass('arrow-to-top');
  $('#arrow-link').attr('href','#footer');
 }
});

});