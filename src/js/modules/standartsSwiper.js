import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const standarts = document.querySelectorAll('.js-franchise-standarts-swiper');

    standarts.forEach((standart) => {
        const s = standart.querySelector('.franchise-standarts__swiper.swiper');

        new Swiper(s, {
            modules: [ Navigation ],
            slidesPerView: 'auto',
            speed: 900,
            spaceBetween: 20,
            initialSlide: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,

            navigation: {
                nextEl: standart.querySelector('.double-btns__btn--next'),
                prevEl: standart.querySelector('.double-btns__btn--prev'),
            },
        })
    })
}
