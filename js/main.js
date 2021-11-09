$('.wedo__drop-link').on('click', function (e){
	e.preventDefault();
	$(this).toggleClass("wedo__drop-link_active");
	$(this).siblings(".wedo__drop-wrapper").slideToggle(300);
});

  $('a[href^="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});
  
  var menu = $(".header");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header").css({background: '#1B3542', transition: "0.1s"});
    }else{
    	$(".header").css({background: 'inherit', transition: "0.1s"});
    }
  });





  $(document).ready(function() {
	var top = $(this).scrollTop();
    if ( top >= 96 ) {
    	$(".header").css({background: '#1B3542', transition: "0s"});
    }else{
    	$(".header").css({background: 'inherit', transition: "0s"});
    }
});