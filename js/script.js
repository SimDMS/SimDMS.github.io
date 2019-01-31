$(document).ready(function(){

  // slick slider
  $('.about__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

// -------------------------------------

// filter

$('#branding').on('click', function(){
    $('.design').fadeOut(400);
    $('.development').fadeOut(400);
    $('.strategy').fadeOut(400);
    $('.branding').fadeIn(400);
});

$('#design').on('click', function(){
    $('.branding').fadeOut(400);
    $('.development').fadeOut(400);
    $('.strategy').fadeOut(400);
    $('.design').fadeIn(400);
});

$('#development').on('click', function(){
    $('.design').fadeOut(400);
    $('.branding').fadeOut(400);
    $('.strategy').fadeOut(400);
    $('.development').fadeIn(400);
});

$('#strategy').on('click', function(){
    $('.design').fadeOut(400);
    $('.branding').fadeOut(400);
    $('.development').fadeOut(400);
    $('.strategy').fadeIn(400);
});

$('#all').on('click', function(){
    $('.design').fadeIn(400);
    $('.branding').fadeIn(400);
    $('.development').fadeIn(400);
    $('.strategy').fadeIn(400);
});

//second way 
 // $('.categories span').click(function(){
 //  var get_id = this.id;
 //  var get_current = $('.' + get_id);

 //  $('.filter-img').not(get_current).hide(500);
 //  get_current.show(500);
 // });

 // $('#all').click(function() {
 //  $('.filter-img').show(500);
 // });

 // -------------------------------------------------







});
				