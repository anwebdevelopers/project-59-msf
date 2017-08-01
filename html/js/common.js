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
    //popup
    /*******************************************************/
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    //*****************************************************
    //GOOGLE MAP
    //*****************************************************
    if (typeof google === 'object' && typeof google.maps === 'object' && $('#map').length) {
        var markerPosition = new google.maps.LatLng(55.818602, 37.439970);

        function initMap() {
            var loc, map;

            loc = new google.maps.LatLng(55.818602, 37.439970);

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: loc,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            });

            var marker = new google.maps.Marker({
                map: map,
                position: markerPosition,
                visible: true,
                icon: 'img/icon-map.png'
            });
        }
        initMap();
        google.maps.event.addDomListener(window, 'load', initMap);
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
