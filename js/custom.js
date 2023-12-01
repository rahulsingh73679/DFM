/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - LANGUAGE MENU
02 - MAIN SLIDER JS
03 - TESTIMONIAL JS
04 - SERVICE SLIDER JS
05 - STICKY HEADER
06 - GALLERY JS
07 - BACK TO TOP
08 - SITE PRELOADER JS
09 - RESPONSIVE MENU JS



-------------------------------------------------------------------------------------*/


(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /* 
        =================================================================
        01 - LANGUAGE MENU
        =================================================================	
        */
        if ($(".dropdown-menu li").length) {
            $(".dropdown-menu li").on('click', function() {
                $(this).parents(".dropdown").find('.btn-dropdown').html($(this).text() + ' <i class="fa fa-angle-down"></i>');
                $(this).parents(".dropdown").find('.btn-dropdown').val($(this).data('value'));
            });
        };

        /* 
        =================================================================
        02 - MAIN SLIDER JS
        =================================================================	
        */

        $(".Buildo-slide").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false
        });

        $(".Buildo-slide").on("translate.owl.carousel", function() {
            $(".Buildo-main-slide h2, .Buildo-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".Buildo-main-slide .Buildo-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".Buildo-slide").on("translated.owl.carousel", function() {
            $(".Buildo-main-slide h2, .Buildo-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".Buildo-main-slide .Buildo-btn").addClass("animated fadeInDown").css("opacity", "1");
        });


        /* 
        =================================================================
        03 - TESTIMONIAL JS
        =================================================================	
        */

        $('.testimonial-slide').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 20,
            touchDrag: false,
            mouseDrag: false,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        /* 
        =================================================================
        04 - SERVICE SLIDER JS
        =================================================================	
        */

        $('.Buildo-service-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 20,
            touchDrag: false,
            mouseDrag: false,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });


        /* 
        =================================================================
        05 - STICKY HEADER
        =================================================================	
        */
        if ($(".sticky").length) {
            var stickyTop = $(".sticky").offset().top;
            jQuery(window).scroll(function() {
                var windowTop = jQuery(window).scrollTop();
                if (windowTop > stickyTop) {
                    jQuery(".sticky").addClass("stuck fadeInDown animated");
                } else {
                    jQuery(".sticky").removeClass("stuck fadeInDown animated");
                }
            });
        }

        /* 
        =================================================================
        06 - GALLERY JS
        =================================================================	
        */

        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });


        /* 
        =================================================================
        07 - BACK TO TOP
        =================================================================	
        */
        if ($("body").length) {
            var btnUp = $('<div/>', {
                'class': 'btntoTop'
            });
            btnUp.appendTo('body');
            $(document).on('click', '.btntoTop', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
                else $('.btntoTop').removeClass('active');
            });
        }

        /* 
        =================================================================
        08 - SITE PRELOADER JS
        =================================================================	
        */

        if ($("#preloader").length) {
            (function() {
                var myDiv = document.getElementById("preloader"),
                    show = function() {
                        myDiv.style.opacity = "1";
                        setTimeout(hide, 3000); // 3 seconds
                    },
                    hide = function() {
                        jQuery(".Buildo-site-preloader").fadeOut(1000);
                    };
                show();
            })();
        }

        /* 
        =================================================================
        09 - RESPONSIVE MENU JS
        =================================================================	
        */

        $("ul#buildo_navigation").slicknav({
            prependTo: ".Buildo-responsive-menu"
        });

    });
}(jQuery));