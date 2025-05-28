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

        if (target.length) {
            e.preventDefault(); 

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 600);

            $(".menu-trigger").removeClass("active");
            $(".header__nav, .header__nav-list, .header__nav-item, .hamburger-only-list, body").removeClass("active");
        }
    });

    /* スクロールでfade-in */
    $(window).on("scroll", function() {
        $(".fade-in-up").each(function() {
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
});


