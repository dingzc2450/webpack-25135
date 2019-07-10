const gulp=require('gulp');
const plugins = require('gulp-load-plugins')();
const webpack=require('webpack-stream');
const webpackConfig=require('./webpack.config.js');
gulp.task('webpack',(create)=>{
    gulp.src('./src/*').
    pipe(webpack(webpackConfig)).
    pipe(gulp.dest('dist/'));
    create();
})