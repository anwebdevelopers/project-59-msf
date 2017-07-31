$(function() {

    'use strict';

    /*******************************************************/
    //Reviews Slider
    /*******************************************************/
    if ($('.reviews__item').length > 1) {
        $('.reviews__box').addClass('owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            navText: '',
            autoplayTimeout: 5000,
            autoplay: true,
            smartSpeed: 1200
        });
    }

    /*******************************************************/
    //Chrome Smooth Scroll
    /*******************************************************/
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(e) {
        e.preventDefault();
    });


    /*******************************************************/
    //Fullscreen Header for IE
    /*******************************************************/

    var $header = $('.header');
    function fullscreen() {
        if($('html').hasClass('ie') || $('html').hasClass('gecko')) {
            $header.removeAttr('style');
            var windowHeight = $(window).height(),
                headerHeight = $header.height();
            if ( windowHeight >= headerHeight ) {
                $header.css({
                    'height' : windowHeight + 'px'
                });
            }
        }
    }
    fullscreen();


    $(window).resize(function() {
        fullscreen();
    });
});
