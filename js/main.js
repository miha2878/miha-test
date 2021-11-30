new WOW().init();

  $('a[href^="#"], .hero__button').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-200
}, 600);                           
});

  var menu = $(".header-main");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({background: '#040a28', transition: "0.1s"});
    }else{
    	$(".header-main").css({background: 'inherit', transition: "0.1s"});
    }
  });





  $(document).ready(function() {
	var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({background: '#040a28', transition: "0s"});
    }else{
    	$(".header-main").css({background: 'inherit', transition: "0s"});
    }
});