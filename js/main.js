$('.wedo__drop-link').on('click', function (e){
	e.preventDefault();
	$(this).toggleClass("wedo__drop-link_active");
	$(this).siblings(".wedo__drop-wrapper").slideToggle(300);
});

  $('a[href^="#"], .hero__button').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-175
}, 600);                           
});

  var menu = $(".header-main");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({background: '#1B3542', transition: "0.1s"});
    }else{
    	$(".header-main").css({background: 'inherit', transition: "0.1s"});
    }
  });





  $(document).ready(function() {
	var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({background: '#1B3542', transition: "0s"});
    }else{
    	$(".header-main").css({background: 'inherit', transition: "0s"});
    }
});