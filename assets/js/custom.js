(function ($) {
    $(document).ready(function () {
        /*sticky menu when scroll*/
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $("header.header-section").addClass("sticky_menu");
            } else {
                $("header.header-section").removeClass("sticky_menu");
            }
        });


        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 250) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });


        //testimonial slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                600: {
                    items: 1,
                    dots: true
                },
                1000: {
                    items: 1,
                    dots: true,
                    loop: true
                }
            }
        });


        //hero slider
        /*$('#slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop:true,
            margin:10,
            autoplay: true,
            responsiveClass:true,
            nav:false,
            dots:true,
            mouseDrag:false,
            touchDrag: false,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                600:{
                    items:1,
                    dots:true
                },
                1000:{
                    items:1,
                    dots:true,
                    loop:true
                }
            }
        });*/
        //slider animation
        /*$('#slider').on('translate.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').removeClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').removeClass('animated slideInLeft').css('opacity','0');
            //$('.hero-more-link a').removeClass('animated slideInRight').css('opacity','0');
        });
        $('#slider').on('translated.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').addClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').addClass('animated slideInLeft').css('opacity','1');
            //$('.hero-more-link a').addClass('animated slideInRight').css('opacity','1');
        });*/


        //WoW js activation
        //new WOW().init();

        //responsive slick nav menu activation
        /*$('#nav').slicknav({
            prependTo:'.responsive-mobile-menu',
        });*/

        // magnific popup activation
        /* $('.popup-img').magnificPopup({
             gallery: {
                 enabled: true
             },
             type: 'image'
         });*/

        //back to top show when scroll
        /*$(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click",function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });*/

    });
})(jQuery);
