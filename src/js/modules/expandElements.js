export default () => {
  const expandBtns = document.querySelectorAll('.js-expand-btn');

  expandBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('._collapsed-parent');

      if(!parent) return;

      parent.querySelector('._collapsed-list').classList.remove('_collapsed-list');
      btn.remove();
    })
  })
}
