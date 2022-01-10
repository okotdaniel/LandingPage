(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            about Carousel
        ----------------------------------------------------*/
        $('.testi-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        /*---------------------------------------------------
            table select all
        ----------------------------------------------------*/

        $('#selectAll').click(function (e) {
            $(this).closest('table').find('.proxy-select-checkbox').prop('checked', this.checked).change();
        });
        /*---------------------------------------------------
            accordian
        ----------------------------------------------------*/
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });

        /*---------------------------------------------------
            tooltip
        ----------------------------------------------------*/
        $('[data-toggle="tooltip"]').tooltip();

    });

    /*---------------------------------------------------
        smooth scroll
    ----------------------------------------------------*/
    $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 100) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown
                mainMenuTop.removeClass('sticky');

            } else {
                // active sticky menu on scrollup
                mainMenuTop.addClass('sticky');
            }

        } else {
            mainMenuTop.removeClass('sticky');
        }
        lastScrollTop = st;

    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    // $(window).on('load', function () {
    //     $('.preloader').fadeOut(500);
    // });


}(jQuery));