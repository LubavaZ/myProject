//слайдер для главной страницы

$(document).ready(function () {
    $('.slider').slick({
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2500,
        draggable: false,
        asNavFor: ".sliderLeft",
        appendArrows: $('.arrows'),
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    autoplay: false,
                    speed: 1000,
                    waitForAnimate: false,
                }
            }
        ]
    });
    $('.sliderLeft').slick({
        arrows: false,
        variableWidth: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        asNavFor: ".slider",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    autoplay: false,
                    speed: 1000,
                    waitForAnimate: false,
                }
            }
        ]
    })
});

//слайдеры для страницы с галереей и проектами

$(document).ready(function () {
    $('.gallery__slider, .projects__slider').slick({
        speed: 1700,
        adaptiveHeight: true,
        slideToShow: 1,
        appendArrows: $('.arrows'),
        asNavFor: ".sliderNumbers",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    speed: 1000,
                    waitForAnimate: false,
                }
            }
        ]
    })
    $('.sliderNumbers').slick({
        arrows: false,
        speed: 1700,
        fade: true,
        asNavFor: ".gallery__slider, .projects__slider",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    speed: 1000,
                    waitForAnimate: false,
                }
            }
        ]
    })
});

// слайдер для страницы со сертификатами

$(document).ready(function () {
    $('.certificates__slider').slick({
        variableWidth: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.arrows'),
        asNavFor: '.sliderNumbers_2',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1000,
                    waitForAnimate: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $('.sliderNumbers_2').slick({
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        asNavFor: '.certificates__slider',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    speed: 1000,
                    waitForAnimate: false,
                }
            }
        ]
    })
});

// специальный слайдер для просмотра фотографий

window.addEventListener('load', function () {
    baguetteBox.run('.gallery', {
        overlayBackgroundColor: 'rgba(51, 51, 51, 0.8)',
        noScrollbars: true,
        captions: function (element) {
            return element.getElementsByTagName('img')[0].alt;
        }
    });
});

// прелоадер

$(window).on('load', function () {
    var $preloader = $('.preloader');
    $preloader.delay(900).fadeOut('slow');
})

console.dir('Check updating')