'use strict';

var
  gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  runSequence = require('run-sequence'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),

  spawn = require('child_process').spawn,
  path = require('path')
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

  return gulp.src(['public/**/*.html', '!public/demo-app/**/*.html'])
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
  del.sync(['public/**/*.js', '!public/**/*combined*.js', '!public/demo-app/**/*.js']);
  del.sync(['public/**/*.css', '!public/**/*combined*.css', '!public/demo-app/**/*.css']);
});

gulp.task('copy-assets', function() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('public/'));
});

gulp.task('demo', function(done) {
  var cwd = path.join(process.cwd(), 'demo-app');

  spawn('quasar', ['build', '-p'], {cwd: cwd, stdio: 'inherit'})
    .on('error', function(err) {
      console.error('Could NOT build demo app!!!!!');
      process.exit(1);
    })
    .on('close', done);
});

gulp.task('default', ['useref', 'images', 'clean-unused-files', 'copy-assets']);
