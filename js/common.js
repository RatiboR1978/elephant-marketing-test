$(function () {
    $('.header-page__btn').click(function() {
        var elem = $(this);

        elem.toggleClass('header-page__btn--active');
        if(elem.hasClass('header-page__btn--active')) {
            $('.header-page__menu-mob').slideDown(500);
        } else {
            $('.header-page__menu-mob').slideUp(500);
        }
    });





});