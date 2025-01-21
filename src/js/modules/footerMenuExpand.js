export default () => {
  const btns = document.querySelectorAll('.js-footer-menu-expand');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const par = btn.parentElement;
      par.classList.toggle('page-footer__menu--collapsed');
    })
  })
}
