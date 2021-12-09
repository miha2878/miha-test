var owlone = $(".services__list").owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 3,
        autoWidth:false,
        nav: false,
        dots: true,
        dotsContainer: '.services__dots-wrapper',
        responsive: {
        1360: {
            items: 3
        },
        768: {
            items: 2
        },
        320: {
            items: 1
        },
    }
    });


var owltow = $(".outfit-slider").owlCarousel({
        loop: true,
        autoplay:false,
        items: 1,
        autoWidth:false,
        nav: false,
        dots: true,
        dotsContainer: '.outfit__dots-wrapper',
        responsive: {
        1360: {
        },
        768: {
        },
        320: {
            autoHeight: true
        },
    }
    });

var owlfour = $(".team__list").owlCarousel({
        loop: true,
        autoplay:false,
        items: 3,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.team__dots-wrapper',
        responsive: {
        1024: {
            items: 3
        },
        768: {
            items: 2
        },
        320: {
            items: 1
        },
    }
    });

var owlfive = $(".wslider-two").owlCarousel({
        loop: true,
        autoplay:false,
        items: 4,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.wslider-two__dots-wrapper',
         responsive: {
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        },
    }
    });

var owlseven = $(".wslider-three").owlCarousel({
        loop: true,
        autoplay:false,
        items: 4,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.wslider-three__dots-wrapper',
         responsive: {
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        },
    }
    });

var eight = $(".wslider-four").owlCarousel({
        loop: true,
        autoplay:false,
        items: 4,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.wslider-four__dots-wrapper',
         responsive: {
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        },
    }
    });

var nine = $(".wslider-five").owlCarousel({
        loop: true,
        autoplay:false,
        items: 4,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.wslider-five__dots-wrapper',
         responsive: {
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        },
    }
    });


var owlsix = $(".wslider__list").owlCarousel({
        loop: true,
        autoplay:false,
        items: 4,
        autoWidth:false,
        autoHeight: false,
        nav: false,
        dots: true,
        dotsContainer: '.wslider__dots-wrapper',
         responsive: {
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        },
    }
    });

var owlthree = $(".hero-slider").owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 1,
        autoWidth:false,
        nav: false,
        dots: true,
        dotsContainer: '.hero__dots-wrapper'
    });


$('.header__burger').on('click', function(e) {
    $('.header__burger').toggleClass("header__burger_active");
    $('.header__nav').toggleClass("header__nav_active");
});

  $('a[href^="#"]').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-190
}, 600);                           
});

  