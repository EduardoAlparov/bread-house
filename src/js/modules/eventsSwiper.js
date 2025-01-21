import Swiper from 'swiper';
import Autoplay from 'swiper/modules/autoplay.mjs';
import Controller from 'swiper/modules/controller.mjs';

export default () => {
  const events = document.querySelectorAll('.js-events-swiper');

  events.forEach((event) => {
      const s = event.querySelector('.events-section__swiper.swiper');
      const controls = event.querySelector('.events-section__control-panel');
      const ELEMENT_CLASS = 'events-section__button';
      const ACTIVE_CLASS = 'events-section__button--active';

      const eventSwiper = new Swiper(s, {
        modules: [Autoplay, Controller],
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 1000,
        // simulateTouch: false,

        autoplay: {
          delay: 5000,
        },

        on: {
          init(s) {
            controls.querySelector("[data-event-pagination]").classList.add('events-section__button--active');
          },
          autoplayTimeLeft(s, time, progress) {
            document.documentElement.style.setProperty("--event-progress", ((1 - progress.toFixed(1)) * 100));
          },

          activeIndexChange(s) {
            const id = s.slides[s.activeIndex].id;
            const btn = controls.querySelector(`[data-event-pagination="${id}"]`);

            const activeItem = controls.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);

            btn.classList.toggle(ACTIVE_CLASS);
          }
        }
      });

      const pSwiper = new Swiper(controls, {
        modules: [Controller],
        slidesPerView: 'auto',
        wrapperClass: 'events-section__pagination',
        slideClass: 'events-section__button'
      })

      eventSwiper.controller.control = pSwiper
  })
}
