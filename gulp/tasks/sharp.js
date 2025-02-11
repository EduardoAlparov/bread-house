import gulp from 'gulp';
import config from '../config';
import sharpResponsive from 'gulp-sharp-responsive';

const sharp = () => {
  return gulp.src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(sharpResponsive({
      formats: [
        // webp
        { format: "webp", quality: 82 },
      ],
    }))
    .pipe(gulp.dest(`${config.dest.images}`));
};

export default sharp;
