const gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      babel = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      watchify = require('watchify'),
      plumber = require('gulp-plumber'),
      notify = require("gulp-notify"),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    gulp
        .src('sass/index.scss')
        .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', { cascade: false }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('public/styles'));
})

gulp.task('assets', function () {
    gulp
        .src('assets/**')
        .pipe(gulp.dest('public/assets'));
})

function compile(watch) {
    let bundle = browserify('./src/index.js', {debug: true});

    if (watch) {
        bundle = watchify(bundle);
        bundle.on('update', function () {
            console.log('--> Bundling...');
            rebundle();
        });
    }

    function rebundle() {
        bundle
            .transform(babel, {
                presets: [ 'es2015' ]
            })
            .bundle()
            .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public/'));
    }

    rebundle();
}

gulp.task('build', () => {
    return compile();
});

gulp.task('watch', () => {
    gulp.start("default");
    gulp.watch("sass/**/*.scss", ["styles"]);
    gulp.watch("assets/**", ["assets"]);

    compile(true);

});

gulp.task('default', ['styles', 'assets', 'build']);