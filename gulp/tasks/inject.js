'use strict';

var config = require('../config');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({lazy: true});
var path   = require('path');
var series = require('stream-series');
/**
 * Inject both JS, CSS into /build/index.html
 */
gulp.task('inject', function(){
  config.log('Injecting assets');

  var injects = gulp
                .src([config.build + '/**/*.js', config.build + '/**/*.css'])
                .pipe($.if('*.js', $.angularFilesort()).on('error', config.errorHandler('AngularFilesort')));

  return  gulp
          .src(config.build+'/index.html')
          .pipe($.inject(injects, config.inject))
          .pipe(gulp.dest(config.build));
});
/**
 * Inject minifed vendor and app JS, CSS into /dist/index.html
 */
gulp.task('inject:dist', function(){
  config.log('Injecting assets');

  var vendor = gulp.src([ path.join(config.dist, '/vendor/*.js'), path.join(config.dist, '/vendor/*.css')])
        ;
  var app    = gulp.src([path.join(config.dist, '/app/*.js'), path.join(config.dist, '/styles/**.css')]);

  return  gulp
          .src(config.index)
          .pipe($.inject(series(vendor, app), config.inject))
          .pipe(gulp.dest(config.dist));
});
