export default () => {
  const faqButtons = document.querySelectorAll('.js-faq-btn');

  faqButtons.forEach((btn, index) => {
    const ELEMENT_CLASS = 'acco-section__button';
    const ACTIVE_CLASS = 'acco-section__button--active';

    if(index === 0) {
      btn.classList.add(ACTIVE_CLASS);
    }

    btn.addEventListener('click', () => {
      const activeItem = document.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);

      btn.classList.toggle(ACTIVE_CLASS);
    })
  })
}
