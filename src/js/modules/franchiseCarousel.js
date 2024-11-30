import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const carousels = document.querySelectorAll('.js-franchise-carousel-swiper');

    carousels.forEach((carousel) => {
        const s = carousel.querySelector('.franchise-carousel__swiper.swiper');

        new Swiper(s, {
            modules: [ Navigation ],
            slidesPerView: 4.5,
            spaceBetween: 25,
            initialSlide: 1,
            speed: 700,
            loop: true,
            centeredSlides: true,
            centeredSlidesBounds: true,

            navigation: {
                nextEl: carousel.querySelector('.double-btns__btn--next'),
                prevEl: carousel.querySelector('.double-btns__btn--prev'),
            },
        })
    })
}
