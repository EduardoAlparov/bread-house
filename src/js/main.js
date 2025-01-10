// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';

import animationsTriggers from './modules/animationsTriggers';

import reviewsSwiper from './modules/reviewsSwiper';
import franchiseCarousel from './modules/franchiseCarousel';
import formatsSwiper from './modules/formatsSwiper';
import faqsDropdowns from './modules/faqsDropdowns';

import standartsSwiper from './modules/standartsSwiper';
import bigSwiper from './modules/bigSwiper';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();

  animationsTriggers();

  reviewsSwiper();
  franchiseCarousel();
  formatsSwiper();
  faqsDropdowns();

  standartsSwiper();
  bigSwiper();
});
