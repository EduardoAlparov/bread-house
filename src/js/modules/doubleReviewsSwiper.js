import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
  const twins = document.querySelectorAll('.js-double-reviews-swiper');

  twins.forEach((twin) => {
    new Swiper(twin, {
      modules: [ Navigation ],
      slidesPerView: 1.2,
      spaceBetween: 25,
      speed: 1000,

      navigation: {
          nextEl: twin.querySelector('.double-btns__btn--next'),
          prevEl: twin.querySelector('.double-btns__btn--prev'),
      },

      breakpoints: {
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      }
  })

  })
}
