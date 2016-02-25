var gulp = require('gulp'),
    del = require('del');

var path = {
    app: './app/',
    node: './node_modules/',
    src: {}
}
var lib = {
    shim: 'es6-shim/',
    systemjs: 'systemjs/',
    angular2: 'angular2/',
    rxjs: 'rxjs/'
}

path.jsPath = path.app + 'js/';
path.libPath = path.app + 'lib/';
path.cssPath = path.app + 'css/';

path.src.shim = path.node + lib.shim + '**/*.js';
path.src.systemjs = path.node + lib.systemjs + '**/*.js';
path.src.angular2 = path.node + lib.angular2 + '**/*.js';
path.src.rxjs = path.node + lib.rxjs + '**/*.js';

path.src.js = './src/tmp/**/*.js';

gulp.task('move:js', function () {
    return gulp.src(path.src.js)
        .pipe(gulp.dest(path.jsPath));
});

gulp.task('clean', ['move:js'], function () {
    return del('./src/tmp')
});

gulp.task('move:lib', function () {
    return gulp.src([path.src.shim,
        path.src.systemjs,
        path.src.angular2,
        path.src.rxjs], { base: './node_modules' })
        .pipe(gulp.dest(path.libPath));
});

gulp.task('default', ['move:js', 'move:lib', 'clean']);
