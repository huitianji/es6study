
const gulp = require('gulp');
const babel = require('gulp-babel');
//const $ = require('gulp-load-plugins')();

const source = require('vinyl-source-stream');
const browserify = require('browserify');




/*
gulp.task('watch', () =>
    gulp.src('src/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('lib'))
);

gulp.task("browserify", function () {
    var b = browserify({
        entries: "./lib/main.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("lib/js"));
});
*/
//
//gulp.task('server', function () {
//    $.connect.server({
//        root:'./',
//        port:8081,
//        livereload:true//启动实时刷新功能
//    });
//});
//
//gulp.task('default', ['watchJs','server']);//运行此任务的时候会在8080上
//gulp.task('default', ['watch','browserify']);

var webpack = require("webpack");
var wabpackConfig = require("./webpack.config.js");

gulp.task("webpack", function () {

    var myConfig = Object.create(wabpackConfig);
    webpack(
        myConfig,
        function (err, stats) {
            callback();
        }
    );
});
