import Swiper from 'swiper';
import Navigation from 'swiper/modules/navigation.mjs';

export default () => {
    const reviews = document.querySelectorAll('.js-reviews-swiper');

    reviews.forEach((review) => {
        new Swiper(review, {
            modules: [ Navigation ],
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 1000,

            navigation: {
                nextEl: review.querySelector('.double-btns__btn--next'),
                prevEl: review.querySelector('.double-btns__btn--prev'),
            },
        })
    })
}
