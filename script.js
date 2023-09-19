$(document).ready(function () {
    $('.burger').click(() => {
        $('.menu').toggleClass('menu--open');
    });
    $('.header__link').click(() => {
        $('.menu').removeClass('menu--open');
    });
});