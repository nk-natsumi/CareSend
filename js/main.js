$(document).ready(function () {

    /* hamburgerメニュー */
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $(".header__nav,.header__nav-list, .header__nav-item, .hamburger-only-list , body").toggleClass("active");

    });


    /* ナビリンククリックでスクロール＆メニューを閉じる */
    $(".header__nav-item , .request-btn").click(function (e) {
        const targetId = $(this).attr("href");
        const target = $(targetId);
        const headerHeight = $(".header__wrap").outerHeight();

        if (target.length) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: target.offset().top - headerHeight
            }, 600);

            $(".menu-trigger").removeClass("active");
            $(".header__nav, .header__nav-list, .header__nav-item, .hamburger-only-list, body").removeClass("active");
        }




    });


    /* スクロールでfade-in */
    $(window).on("scroll", function () {
        $(".fade-in-up").each(function () {
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass("active");
            }
        });
    });

    $(window).trigger("scroll");


    /* faq accordion */
    $('.faq__list-item').click(function () {
        var $answer = $(this).find('.answer');
        var $question = $(this).find('.question');

        if ($answer.hasClass('open')) {
            $answer.removeClass('open').slideUp();
            $question.removeClass('active');
        } else {
            $answer.addClass('open').slideDown();
            $question.addClass('active');
        }
    });

    /* form *//* 
    const $form = $(".downloadForm");
    const $inputs = $form.find("input[required]");
    const $submitBtn = $form.find(".downloadBtn");

    $submitBtn.prop("disabled", true);

    $inputs.on("input", function () {
        let allFilled = true;

        $inputs.each(function () {
            if ($(this).val().trim() === "") {
                allFilled = false;
            }
        });

        $submitBtn.prop("disabled", !allFilled);
    });

    $form.on("submit", function (e) {
        e.preventDefault();
        $submitBtn.hide();
        $form.find(".thankYouMessage").fadeIn();
    }); */

   

        const $form = $('.downloadForm');
        const $submitBtn = $form.find('.downloadBtn');

        $form.find('input, textarea').on('input change', function () {
            const allFilled =
                $form.find('input[type="text"]').filter(function () {
                    return $(this).val().trim() === '';
                }).length === 0 &&
                $form.find('input[type="email"]').val().trim() !== '' &&
                $form.find('input[type="tel"]').val().trim() !== '' &&
                $form.find('#privacyCheck').prop('checked') === true;

            $submitBtn.prop('disabled', !allFilled);
        });

        $form.on('submit', function (e) {
            e.preventDefault();
            $submitBtn.hide();
            $form.find('.thankYouMessage').fadeIn();
        });



    // achievements
    const autoSwiper = new Swiper(".Achievements__swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 80,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            951: {
                spaceBetween: 63,
            },
        }
    });

    // case
    const caseSwiper = new Swiper('.case__swiper', {

        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,

        spaceBetween: 48,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            951: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 70,
            },
        }
    });


});
