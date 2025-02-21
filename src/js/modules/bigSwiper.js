import Swiper from 'swiper';
import Autoplay from 'swiper/modules/autoplay.mjs';
import Navigation from 'swiper/modules/navigation.mjs';
import EffectFade from 'swiper/modules/effect-fade.mjs';

export default () => {
    const bigs = document.querySelectorAll('.js-big-swiper');

    bigs.forEach((big) => {
        const isAutoplay = big.dataset.swiper;
        const isFade = big.dataset.fade;

        new Swiper(big, {
            initialSlide: isAutoplay ? 1 : 0,
            modules: [ Autoplay, Navigation, EffectFade ],
            slidesPerView: 1,
            spaceBetween: 10,
            speed: isFade ? 600 : 1000,

            loop: isAutoplay ? true : false,

            effect: isFade ? 'fade' : 'slide',

            autoplay: {
                enabled: isAutoplay,
                delay: 3000,
            },

            navigation: {
                nextEl: big.querySelector('.double-btns__btn--next'),
                prevEl: big.querySelector('.double-btns__btn--prev'),
            },

            breakpoints: {
              1024: {
                spaceBetween: 20,
              }
            }
        })
    })
}
