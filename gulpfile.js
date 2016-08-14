'use strict';

var
  gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  runSequence = require('run-sequence'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  LineByLine = require('line-by-line'),
  fs = require('fs')
  ;

var htmlMinifierOptions = {
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

gulp.task('useref', function() {
  var assets = plugins.useref.assets();

  return gulp.src(['public/**/*.html', '!public/quasar-play/**/*.html'])
    .pipe(assets)
    .pipe(plugins.if('*.css', plugins.cssBase64()))
    .pipe(plugins.if('*.css', plugins.minifyCss()))
    .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(plugins.rev())
    .pipe(assets.restore())
    .pipe(plugins.useref())
    .pipe(plugins.revReplace({
      prefix: '/'
    }))
    .pipe(plugins.if('*.html', plugins.htmlmin(htmlMinifierOptions)))
    .pipe(gulp.dest('public'));
});

gulp.task('images', function() {
  return gulp.src('public/images/**/*')
    .pipe(plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('public/images'));
});

gulp.task('clean-unused-files', ['useref'], function() {
  del.sync(['public/**/*.js', '!public/**/*combined*.js', '!public/quasar-play/**/*']);
  del.sync(['public/**/*.css', '!public/**/*combined*.css', '!public/quasar-play/**/*']);
});

gulp.task('copy-assets', function() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('public/'));
});

gulp.task('default', ['useref', 'images', 'clean-unused-files', 'copy-assets']);


var
  parsedFiles = 0,
  stylusVariables = {}
  ;

function parseStylusLine(theme) {
  return function(line) {
    if (line.indexOf(' ?= ') === -1) {
      return;
    }

    var
      definition = line.split(' ?= '),
      name = definition[0].trim(),
      value = definition[1].trim()
      ;

    if (name === '$colors') {
      return;
    }

    if (!stylusVariables[name]) {
      stylusVariables[name] = {};
    }

    stylusVariables[name][theme] = value;
  };
}

function finalizeStylusParse() {
  parsedFiles++;
  if (parsedFiles < 2) {
    return;
  }

  fs.writeFileSync('assets/stylus-variables.json', JSON.stringify(stylusVariables));
}

gulp.task('variables', function() {
  var
    mat = new LineByLine('/work/quasar-play/node_modules/quasar-framework/dist/quasar.mat.styl'),
    ios = new LineByLine('/work/quasar-play/node_modules/quasar-framework/dist/quasar.ios.styl')
    ;

  mat.on('line', parseStylusLine('mat'));
  ios.on('line', parseStylusLine('ios'));

  mat.on('end', finalizeStylusParse);
  ios.on('end', finalizeStylusParse);
});
