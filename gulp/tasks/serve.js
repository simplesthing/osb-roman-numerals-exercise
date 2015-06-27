'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var spa         = require('browser-sync-spa');
var runSequence = require('run-sequence');

function serveCallback() {
  browserSync.use(spa({
    selector: '[ng-app]' // Only needed for angular apps
  }));

  browserSync({
    // The small pop-over notifications in the browser are not always needed/wanted.
    // Change to true if you wish to see them
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['build', './']
  });
}

function serveDistCallback() {
  browserSync({
    // The small pop-over notifications in the browser are not always needed/wanted.
    // Change to true if you wish to see them
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['dist']
  });
}

/**
 * Create a development build and serve files from /build
 */
gulp.task('serve', function(){
  runSequence(
    'clean',
    ['scripts', 'styles', 'wiredep', 'images'],
    'copy',
    'inject',
    'watch',
    serveCallback
  );
});
/**
 * Create a production build and serve from /dist
 */
gulp.task('serve:dist', function(){
  runSequence(
    'clean:dist',
    ['wiredep:dist','images:dist'],
    ['scripts:dist', 'styles:dist', 'html:dist', 'fonts'],
    'copy:dist',
    'inject:dist',
    serveDistCallback
  );
});
