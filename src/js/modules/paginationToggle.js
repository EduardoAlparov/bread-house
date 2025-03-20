export default () => {
  const tabs = document.querySelectorAll('.js-pag-item');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.contacts-section__pagination')
      const ELEMENT_CLASS = 'js-pag-item';
      const ACTIVE_CLASS = 'contacts-section__pagination-list-link--active';
      const activeItem = parent.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if (activeItem !== tab) activeItem?.classList.remove(ACTIVE_CLASS);

      tab.classList.toggle(ACTIVE_CLASS);
    })
  })
}
