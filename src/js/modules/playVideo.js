export default () => {
  const playButtons = document.querySelectorAll('button[data-play-video]');

  playButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const video = btn.parentElement.querySelector('video');

      btn.classList.add('visually-hidden');
      video.play();
    })
  })
}
