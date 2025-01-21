import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const reviews = document.querySelectorAll('.js-reviews-swiper');

    reviews.forEach((review) => {
        new Swiper(review, {
            modules: [ Navigation ],
            slidesPerView: 1.2,
            spaceBetween: 20,
            speed: 1000,

            navigation: {
                nextEl: review.querySelector('.double-btns__btn--next'),
                prevEl: review.querySelector('.double-btns__btn--prev'),
            },

            breakpoints: {
              // when window width is >= 480px
              640: {
                slidesPerView: 2
              },
              // when window width is >= 640px
              1024: {
                slidesPerView: 5
              }
            }
        })
    })
}
