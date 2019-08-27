const gulp = require('gulp');
const zip = require('gulp-zip');
const outputPath = "../unicef_learn_my_way_reader/app/src/main/assets"

gulp.task('create_epub_and_copy_to_android_project', () =>
    gulp.src('public_html/porta_aberta/**')
        .pipe(zip('porta_aberta.epub'))
        .pipe(gulp.dest(outputPath))
);

