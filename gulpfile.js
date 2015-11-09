'use strict';

var
  gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  runSequence = require('run-sequence'),
  del = require('del')
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

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe(plugins.if('*.css', plugins.csso()))
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

gulp.task('clean-unused-files', function() {
  del.sync(['public/**/*.js', '!public/**/*combined*.js']);
  del.sync(['public/**/*.css', '!public/**/*combined*.css']);
});

gulp.task('copy-assets', function() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('public/'));
});

gulp.task('default', function() {
  runSequence(
    'useref',
    ['clean-unused-files', 'copy-assets']
  );
});
