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
    /*  wrapperClass: 'case__swiper-wrapper',
     slideClass: 'case__slide', */
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