import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const formats = document.querySelectorAll('.js-shorts-swiper');

    formats.forEach((format) => {
        const s = format.querySelector('.franchise-formats__swiper.swiper');

        new Swiper(s, {
          modules: [ Navigation ],
          slidesPerView: 'auto',
          width: '16rem',
          spaceBetween: 12,
          speed: 1000,

          navigation: {
              nextEl: format.querySelector('.double-btns__btn--next'),
              prevEl: format.querySelector('.double-btns__btn--prev'),
          },

          breakpoints: {
            1024: {
              width: '38rem',
              spaceBetween: 25,
            }
          }
      })
    })
}
