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

        //mobile menu custom js
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
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


        /*popular cuisines select box start*/
        $('.mvp.popular-items h4').click(function () {
            $('.p-i-l').css({
                'display':'block',
                'top':'0',
            });
        });
        $('.p-i-l ul li').click(function () {
            $('.p-i-l').css({
                'display':'none',
                'top':'20px',
            });
        });
        $('.p-i-l ul li').click(function () {
            $('#p-cuisines').val($(this).attr('data'));
            $('#cuisine-name').html($(this).attr('data'));
        });
        /*popular cuisines select box end*/



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
