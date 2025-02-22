import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const formats = document.querySelectorAll('.js-shorts-swiper');

    formats.forEach((format) => {
        const s = format.querySelector('.franchise-formats__swiper.swiper');

        if(format.dataset.slide) {
          new Swiper(s, {
              modules: [ Navigation ],
              slidesPerView: 1.4,
              spaceBetween: 12,
              speed: 1000,

              navigation: {
                  nextEl: format.querySelector('.double-btns__btn--next'),
                  prevEl: format.querySelector('.double-btns__btn--prev'),
              },

              breakpoints: {
                // when window width is >= 640px
                640: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                  spaceBetween: 25,
                  slidesPerView: 5
                }
              },
              on: {
                activeIndexChange: function () {
                  const previousSlide = this.slides[this.previousIndex];
                  const video = previousSlide.querySelector('video');

                  if(previousSlide && video) {
                    video.pause();
                  }
                },
              },
          })
        }

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
          },

          on: {
            activeIndexChange: function () {
              const previousSlide = this.slides[this.previousIndex];
              const video = previousSlide.querySelector('video');

              if(previousSlide && video) {
                video.pause();
              }
            },
          },
      })
    })
}
