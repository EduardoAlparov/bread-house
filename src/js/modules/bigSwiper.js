import Swiper from 'swiper';
import Autoplay from 'swiper/modules/autoplay.mjs';

export default () => {
    const bigs = document.querySelectorAll('.js-big-swiper');

    bigs.forEach((big) => {
        new Swiper(big, {
            initialSlide: 1,
            modules: [ Autoplay ],
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1000,
            loop: true,

            autoplay: {
                delay: 3000,
            },
        })
    })
}
