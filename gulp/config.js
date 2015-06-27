'use strict';
// Dependencies
var _            = require('lodash');
var log          = require('./util/log');
var errorHandler = require('./util/errorHandler');
var gitReporter  = require('./util/gitReporter');
//use path.join instead of manually concatening path components.
//It uses path.normalize, which resolves . and .., handles multiple or trailing slashes,
//and uses the appropriate file separator for your platform
var path        = require('path');

// Config Object to export
var exportConfig = {};

//  Paths
var SRC        = 'src',
    APP        = 'src/app',
    BUILD      = 'build',
    DIST       = 'dist',
    INDEX      = 'src/index.html',
    bower      = {
      json       : require('../bower.json'),
      directory  : './bower_components/',
      ignorePath : '../..'
    };

// default config
var defaultConfig = {
    src          : SRC,
    build        : BUILD,
    dist         : DIST,
    index        : INDEX,
    app          : APP,
    tests        : [
     path.join( APP, '/**/*.spec.js')
    ],
    appjs        : [
      path.join(APP, '/**/*.js'),
      path.join('!'+APP, '/**/*.spec.js'),
      path.join('!'+APP, '/**/*.mock.js')
    ],
    gulpjs       : ['gulpfile.js', './gulp/**/*.js'],
    sass         : [path.join(SRC, '/sass/styles.scss')],
    images       : [path.join(SRC, '/images/**/*.*'), path.join('!'+SRC, '/images/sprites/*.*')],
    assets       : [
      path.join(SRC, '/**/*.*'),
      path.join('!'+SRC, '/images/sprites/*.*'),
      path.join('!'+SRC, '/**/*.html'),
      path.join('!'+SRC, '/**/*.scss'),
      path.join('!'+APP, '/**/*.js'),
    ],
    fonts        : path.join(bower.directory, 'fontawesome/fonts/**/*.*'),
    sprites      : path.join(SRC, '/images/sprites/**/*.{png,jpg,gif}'),
    log          : log,
    errorHandler : errorHandler,
    gitReporter  : gitReporter,
    inject       : {
      ignorePath   : [ SRC, '../dist/' ],
      addRootSlash : false,
      relative     : true
    },
    wiredep      : {
      bowerJson    : bower.json,
      directory    : bower.directory,
      ignorePath   : bower.ignorePath,
      exclude      : [/bootstrap-sass-official\/.*\.js/, /bootstrap\.css/]
    },
    jshint        : '.jshintrc',
    htmlhint      : '.htmlhintrc',
    htmlTemplates  : [path.join(APP, '/**/*.html'), '!'+INDEX ],
    templateCache : {
      module  : 'admin-dashboard',
      root    : APP
    }
};

// export the config object
exportConfig = _.extend(defaultConfig);

module.exports =  exportConfig;
