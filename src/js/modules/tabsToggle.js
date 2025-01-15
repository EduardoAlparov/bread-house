export default () => {
  const tabs = document.querySelectorAll('.chronology__nav-btn[data-chrono]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.chronology__nav')
      const ELEMENT_CLASS = 'js-tab-btn';
      const ACTIVE_CLASS = 'chronology__nav-btn--active';
      const activeItem = parent.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if (activeItem !== tab) activeItem?.classList.remove(ACTIVE_CLASS);

      tab.classList.toggle(ACTIVE_CLASS);

      const wrapper = parent.closest('.js-switchable-windows');

      if(wrapper) {
        const id = tab.dataset.chrono;
        const findedEl = document.getElementById(id);
        const windows = wrapper.querySelectorAll('[data-switch-window]');

        if(id && findedEl) {
            windows.forEach((window) => {
              window.classList.add('display-none');
            })

            findedEl.classList.remove('display-none');
        } else {
            return;
        }
    }
    })
  })
}
