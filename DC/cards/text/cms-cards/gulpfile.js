var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del'),
    minifyhtml = require('gulp-minify-html'),
    htmlreplace = require('gulp-html-replace'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('clear',function(){
   return del('dist/*');
});

gulp.task('code-quality', function() {
    return gulp.src('cards/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('replace-min-html', function() {
    return gulp.src('cards/*/*.html')
        .pipe(htmlreplace({
            'global_css': '../common/style.min.css',
            'global_js': '../common/libs.min.js',
            'local_css': 'style.min.css',
            'local_js': 'card.min.js'
        }))
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist/'));
});

gulp.task('common-img', function() {
    return gulp.src('cards/common/img/*.*')
        .pipe(gulp.dest('dist/common/img/'));
});

gulp.task('preview-thumbnails-img', function() {
    return gulp.src('cards/preview-thumbnails/*.*')
        .pipe(gulp.dest('dist/preview-thumbnails/'));
});

gulp.task('common-css', function() {
    return gulp.src('cards/common/style.css')
        .pipe(concat('style.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/common/'));
});

gulp.task('common-js', function() {
    return gulp.src(['bower_components/q/q.js','bower_components/json-pointer/dist/json-pointer.web.js','cards/common/src/*.js'])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/common/'));
});

gulp.task('local-css', function() {
    return gulp.src(['cards/**/style.css','!cards/common/**/style.css'])
        .pipe(minifycss())
        .pipe(rename(function (path) {
            path.extname = ".min.css"
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('local-js', function() {
    return gulp.src(['cards/**/card.js', '!cards/handlebars/card.js'])
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.extname = ".min.js"
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('local-js-handlebars-card', function() {
    return gulp.src(['bower_components/handlebars/handlebars.js', 'cards/handlebars/card.js'])
        .pipe(concat('card.js'))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.extname = ".min.js"
        }))
        .pipe(gulp.dest('dist/handlebars'));
});

gulp.task('local-card-manifest', function() {
    return gulp.src('cards/cards-manifest.json')
           .pipe(gulp.dest('dist'));
});

gulp.task('default', ['code-quality','clear'], function() {
    gulp.start('common-img', 'preview-thumbnails-img','common-css','common-js','local-css','local-js','local-js-handlebars-card','replace-min-html', 'local-card-manifest');
});