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