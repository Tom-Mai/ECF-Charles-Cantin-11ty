let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

function minifyCss() {
    return gulp.src('src/assets/css/*.css')
    .on('data', function(file) {
        console.log('Found file', file.path);
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/assets/css/'))
    .on('end', function() {
        console.log('CSS minification done.');
    });
}

function watch() {
    gulp.watch('src/assets/css/*.css', minifyCss);
}

exports.default = gulp.series(minifyCss, watch);
exports.build = minifyCss;
