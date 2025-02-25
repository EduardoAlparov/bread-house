import anime from 'animejs/lib/anime.es.js';

export default () => {
  const targetWrapper = document.querySelector('.hero-stats');
  const target = document.querySelector('.hero-stats__wrapper > .hero-stats__list');

  if(!targetWrapper) return;

  anime({
    targets: '.hero-stats__wrapper .hero-stats__list',
    translateX: - (target.scrollWidth / 2) + (targetWrapper.clientWidth / 2),
    direction: 'reverse',
    loop: true,
    easing: 'linear',
    duration: 20000
  });
}
