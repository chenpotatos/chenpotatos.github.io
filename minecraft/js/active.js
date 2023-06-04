(function ($) {
    "use strict";
    // header_top_area
    var langIcon = $('.romana_header_top .language_option'),
    lang = $('.romana_header_top .lang');
	langIcon.on('click', function(){
		lang.toggleClass('clicked');
	});
	$('.romana_header_top .lang li').on('click', function(){
		lang.removeClass('clicked');
	});
	$('.romana_header_top .lang').on('mouseleave', function(){
		lang.removeClass('clicked');
	});
    // header_top client area btn for small device
    var langIcon2 = $('.romana_header_top .romana_client_btn'),
    romana_client_log_in2 = $('.romana_header_top .romana_client_log_in');

	langIcon2.on('click', function(){
		romana_client_log_in2.toggleClass('clicked');
	});
    // header_bottom client area btn
    var langIcon2 = $('.romana_header_bottom .romana_client_btn'),
    romana_client_log_in = $('.romana_header_bottom .romana_client_log_in');

	langIcon2.on('click', function(){
		romana_client_log_in.toggleClass('clicked');
	});
    // Check out page log in
    var langIcon2 = $('.romana_an_account .romana_check_out_btn a'),
    romana_client_log_in = $('.romana_header_bottom .romana_client_log_in');

	langIcon2.on('click', function(){
		romana_client_log_in.toggleClass('clicked');
	});
    //this code is for submenu
    jQuery(document).ready(function () {
        var window_width = $(window).width();
    // submenu parent add class
        $('.dropdown-menu').each(function(){
            $(this).closest('li').addClass('dropdown');
        });
        $('.mega-menu').each(function(){
            $(this).closest('li').addClass('static');
        });
    if(window_width < 768){
            $('.dropdown a').on('click', function(){
                $(this).siblings('ul').slideToggle();
                $(this).toggleClass('active');
                $(this).closest('li').toggleClass('mb-none');
            });
        }
        if(window_width > 767){
            $('.dropdown').on('mouseenter', function(){
                $(this).addClass('open');
            });
            $('.dropdown').on('mouseleave', function(){
                $(this).removeClass('open');
            });
        }              
    //This code is for owl Carousel
    if ($.fn.owlCarousel) {
            //Hero_Slider_crsl
            $('.hero_slider').owlCarousel({
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                items: 1,
                animation: true,

                mouseDrag:false,
                touchDrag:false,
                navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
            });
            //tihs code is for slider effect
            $(".hero_slider").on('translate.owl.carousel', function() {
                $('.romana_hero_left_text_img').removeClass('slideInLeft animated').hide();
                $('.romana_hero_left_img').removeClass('slideInLeft animated').hide();
                $('.romana_hero_right_text_img').removeClass('slideInRight animated').hide();
                $('.romana_hero_text h1').removeClass('slideInRight animated').hide();
                $('.romana_hero_text h2').removeClass('slideInRight animated').hide();
                $('.slider_text_animation').removeClass('slideInRight animated').hide();
                $('.romana_hero_text .romana_slider_btn').removeClass('slideInRight animated').hide();
            });
            $(".hero_slider").on('translated.owl.carousel', function() {
                $('.owl-item.active .romana_hero_left_text_img').addClass('slideInLeft animated').show();
                $('.owl-item.active .romana_hero_left_img').addClass('slideInLeft animated').show();
                $('.owl-item.active .romana_hero_right_text_img').addClass('slideInRight animated').show();
                $('.owl-item.active .romana_hero_text h1').addClass('slideInRight animated').show();
                $('.owl-item.active .romana_hero_text h2').addClass('slideInRight animated').show();
                $('.owl-item.active .slider_text_animation').addClass('slideInRight animated').show();
                $('.owl-item.active .romana_hero_text .romana_slider_btn').addClass('slideInRight animated').show();
            });
        //client_crsl
        $('.romana_client_crsl').owlCarousel({
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            items: 2,
            mouseDrag:false,
            touchDrag:false,
            navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1170: {
                    items: 2,
                },
            }
        });
        //Brand crsl 
        $('.romana_team_crsl').owlCarousel({
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            mouseDrag:false,
            touchDrag:false,
            navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
            responsiveClass: true,
            responsive: {
                300: {
                    items:1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1170: {
                    items: 4,
                },
            }
        });
    }
    // Cart page
    $('.romana_single_cart > i').on( "click", function(){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
    });
   //tab
   	$('ul.tabs li').on( "click", function(){
		var tab_id = $(this).attr('data-tab');
		$('this').removeClass('current').fadeOut();
		$('.tab-content').removeClass('current').fadeOut();
		$(this).addClass('current').fadeIn();
		$("#"+tab_id).addClass('current').fadeIn();
	});
        //this code is for input label
    $('.field input, .field textarea').each(function() {
        $(this).focus(function() {
            $(this).siblings('label').hide();
        });
        $(this).focusout(function() {
             $('label').show();
        });
    });
    // Preloder
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $("body").removeClass("preloader_active"); 
    }); 
})(jQuery);