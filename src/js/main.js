// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';

import reviewsSwiper from './modules/reviewsSwiper';
import franchiseCarousel from './modules/franchiseCarousel';
import formatsSwiper from './modules/formatsSwiper';
import faqsDropdowns from './modules/faqsDropdowns';

import standartsSwiper from './modules/standartsSwiper';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();

  reviewsSwiper();
  franchiseCarousel();
  formatsSwiper();
  faqsDropdowns();

  standartsSwiper();

});
