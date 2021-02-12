$(function () {
    $('.menu__icon').click(function () {
        //alert("hello");
        $('.header').toggleClass('page--cream');
        $('.header__navbar').slideToggle();
    });

    $("[data-scroll]").click(function (event) {
        event.preventDefault(); //отменяем стандартное поведение ссылки

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);

    });
});
