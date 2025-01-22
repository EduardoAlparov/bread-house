import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
  const mobilesCarousels = document.querySelectorAll('.js-transform-swiper');
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  if(!isMobile) return;

  mobilesCarousels.forEach((item) => {
    new Swiper(item.querySelector('.js-swiper'), {
      wrapperClass: 'js-swiper-wrapper',
      slideClass: 'js-swiper-slide',
      modules: [ Navigation ],
      slidesPerView: 'auto',
      spaceBetween: 18,
      speed: 1000,

      navigation: {
          nextEl: item.querySelector('.double-btns__btn--next'),
          prevEl: item .querySelector('.double-btns__btn--prev'),
      },
  })
  })
}
