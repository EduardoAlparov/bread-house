export default () => {
  const promoDiv = document.querySelector('.js-header-promo');

  if(!promoDiv) return;

  let setPromoHeightVar = () => {
    document.documentElement.style.setProperty('--promo-height', promoDiv.offsetHeight + 'px');
  }

  setPromoHeightVar();

  window.addEventListener('resize', setPromoHeightVar);
}
