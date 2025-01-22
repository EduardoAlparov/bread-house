import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const formats = document.querySelectorAll('.js-formats-swiper');

    formats.forEach((format) => {
        const s = format.querySelector('.franchise-formats__swiper.swiper');

        if(format.dataset.slide) {
            new Swiper(s, {
                modules: [ Navigation ],
                slidesPerView: 'auto',
                spaceBetween: 16,
                speed: 1000,

                navigation: {
                    nextEl: format.querySelector('.double-btns__btn--next'),
                    prevEl: format.querySelector('.double-btns__btn--prev'),
                },

                breakpoints: {
                  // when window width is >= 640px
                  640: {
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    spaceBetween: 30,
                  }
                }
            })

        } else {
            new Swiper(s, {
                modules: [ Navigation ],
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 700,

                navigation: {
                    nextEl: format.querySelector('.double-btns__btn--next'),
                    prevEl: format.querySelector('.double-btns__btn--prev'),
                },

                breakpoints: {
                  // when window width is >= 640px
                  1024: {
                    spaceBetween: 50,
                  }
                }
            })
        }
    })
}
