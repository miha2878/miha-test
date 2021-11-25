new WOW().init();

  $('a[href^="#"]').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-200
}, 600);                           
});

