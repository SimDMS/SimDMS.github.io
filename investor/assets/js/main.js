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
    nav             :false
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


   // wow = new WOW(
   //                {
   //                  boxClass:     'wow',      // default
   //                  animateClass: 'animated', // default
   //                  offset:       0,          // default
   //                  mobile:       false,       // default
   //                  live:         true        // default
   //                  }
   //                  )
   //                  wow.init();


// right-sidebar

$('.button-enter').on('click', function(){
  $('#sidebar-enter').css({
  '-webkit-transform' : 'translateX(0)',
  '-moz-transform'    : 'translateX(0)',
  '-ms-transform'     : 'translateX(0)',
  '-o-transform'      : 'translateX(0)',
  'transform'         : 'translateX(0)'
  });
  $('#sidebar-register').css({
  '-webkit-transform' : 'translateX(100%)',
  '-moz-transform'    : 'translateX(100%)',
  '-ms-transform'     : 'translateX(100%)',
  '-o-transform'      : 'translateX(100%)',
  'transform'         : 'translateX(100%)'
  });
});
$('.button-register').on('click', function(){
  $('#sidebar-register').css({
  '-webkit-transform' : 'translateX(0)',
  '-moz-transform'    : 'translateX(0)',
  '-ms-transform'     : 'translateX(0)',
  '-o-transform'      : 'translateX(0)',
  'transform'         : 'translateX(0)'
  });
   $('#sidebar-enter').css({
  '-webkit-transform' : 'translateX(100%)',
  '-moz-transform'    : 'translateX(100%)',
  '-ms-transform'     : 'translateX(100%)',
  '-o-transform'      : 'translateX(100%)',
  'transform'         : 'translateX(100%)'
  });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".right-sidebar"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.css({
  '-webkit-transform' : 'translateX(100%)',
  '-moz-transform'    : 'translateX(100%)',
  '-ms-transform'     : 'translateX(100%)',
  '-o-transform'      : 'translateX(100%)',
  'transform'         : 'translateX(100%)'
  }); // скрываем его
    };
  });



$('.right-sidebar-close').on('click', function(){
  $('.right-sidebar').css({
 '-webkit-transform' : 'translateX(100%)',
  '-moz-transform'    : 'translateX(100%)',
  '-ms-transform'     : 'translateX(100%)',
  '-o-transform'      : 'translateX(100%)',
  'transform'         : 'translateX(100%)'
  });
});

// ----------------------



});