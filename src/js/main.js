// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';

import playVideo from './modules/playVideo';
import setPromoHeight from './modules/setPromoHeight';
import animationsTriggers from './modules/animationsTriggers';

import reviewsSwiper from './modules/reviewsSwiper';
import franchiseCarousel from './modules/franchiseCarousel';
import formatsSwiper from './modules/formatsSwiper';
import faqsDropdowns from './modules/faqsDropdowns';
import tabsToggle from './modules/tabsToggle';

import standartsSwiper from './modules/standartsSwiper';
import bigSwiper from './modules/bigSwiper';
import shortsSwiper from './modules/shortsSwiper';
import eventsSwiper from './modules/eventsSwiper';
import footerMenuExpand from './modules/footerMenuExpand';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();

  playVideo();
  setPromoHeight();
  animationsTriggers();

  reviewsSwiper();
  franchiseCarousel();
  formatsSwiper();
  faqsDropdowns();
  tabsToggle();

  standartsSwiper();
  bigSwiper();
  shortsSwiper();
  eventsSwiper();
  footerMenuExpand();
});
