import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const formats = document.querySelectorAll('.js-formats-swiper');

    formats.forEach((format) => {
        const s = format.querySelector('.franchise-formats__swiper.swiper');

        new Swiper(s, {
            modules: [ Navigation ],
            slidesPerView: 'auto',
            spaceBetween: 50,
            speed: 700,

            navigation: {
                nextEl: format.querySelector('.double-btns__btn--next'),
                prevEl: format.querySelector('.double-btns__btn--prev'),
            },
        })
    })
}
