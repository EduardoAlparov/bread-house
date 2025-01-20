import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const formats = document.querySelectorAll('.js-shorts-swiper');

    formats.forEach((format) => {
        const s = format.querySelector('.franchise-formats__swiper.swiper');

        new Swiper(s, {
          modules: [ Navigation ],
          slidesPerView: 'auto',
          width: '38rem',
          spaceBetween: 25,
          speed: 1000,
          setWrapperSize: false,

          navigation: {
              nextEl: format.querySelector('.double-btns__btn--next'),
              prevEl: format.querySelector('.double-btns__btn--prev'),
          },
      })
    })
}
