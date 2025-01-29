export default () => {
  const ratings = document.querySelectorAll('.stars[data-rating]');

  ratings.forEach((rating) => {
    const stars = rating.querySelectorAll('.stars__item');
    const dataRating = +(rating.dataset.rating);
    const dev = (dataRating % 1).toFixed(1);

    const max = dataRating - dev;

    for (let index = 0; index <= (max - 1); index++) {
      stars[index].style.setProperty('--precntage', '100%');
    }

    if(stars[max]) {
      stars[max].style.setProperty('--precntage', `${dev * 100}%`);
    }
  })
}
