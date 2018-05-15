$(function () {
    $('.header-page__input').click(function(e) {
        var elem = $(this);
        func(elem, '.header-page__menu-mob');
    });

    $('.header-page__active-link').click(function (e) {
        e.preventDefault();
        var elem = $(this);
        func(elem, '.header-page__dropdown');
    });

    function func(elem, element) {
        elem.toggleClass('header-page__btn--active');
        if(elem.hasClass('header-page__btn--active')) {
            $(element).slideDown(500);
        } else {
            $(element).fadeOut(200);
        }
    }

    $('.login-js, .header-page__login, .header-page__login-link').on('click', function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");

        $(currentModal + ', .overlay').fadeIn(500);
        $('body').addClass('open-modal');
    });


    $(".overlay, .btn").on("click", function(e) {
        e.preventDefault();
        $('.modal, .overlay').fadeOut(100);
        $('body').removeClass('open-modal');
    });
});