$(function () {
    $('.menu__icon').click(function () {
        //alert("hello");
        $('.header').toggleClass('page--cream');
        $('.header__navbar').slideToggle();
    });
});

function myScroll(scrollClass) {
    myTop = $(scrollClass).offset().top;
    $("html, body").animate({
        scrollTop: myTop
    }, 100);
}
