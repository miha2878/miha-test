

new WOW().init();

  $('a[href^="#"]').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-190
}, 600);                           
});

  var menu = $(".header-main");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({'background': 'rgba(85, 69, 62, 0.6)', 'transition': "0.1s", 'backdrop-filter': 'blur(20px)'});
    }else{
    	$(".header-main").css({'background': 'inherit', 'transition': "0.1s"});
    }
  });



  $(document).ready(function() {
	var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header-main").css({'background': 'rgba(85, 69, 62, 0.6)', 'transition': "0.1s", 'backdrop-filter': 'blur(20px)'});
    }else{
    	$(".header-main").css({'background': 'inherit', 'transition': "0s"});
    }
});