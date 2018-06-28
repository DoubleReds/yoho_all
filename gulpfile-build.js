/**
  gulp完成的任务：
  1、编译sass, less
  2、CommonJS模块化
  3、版本号控制
  4、在Gulp里应用babel
  5、打包压缩
 */

const gulp = require('gulp')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')

const sequence = require('gulp-sequence')

const del = require('del')

const uglify = require('gulp-uglify')
const minifyCSS = require('gulp-minify-css')
const minifyHTML = require('gulp-minify-html')

const babel = require('gulp-babel')

gulp.task('scss', () => {
  return gulp.src('./src/style/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rev())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/style'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/style'))
})

gulp.task('js', () => {
  return gulp.src('./src/scripts/app.js')
    .pipe(webpack({
      entry: './src/scripts/app.js',
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/scripts'))
})

gulp.task('copyhtml', () => {
  return gulp.src(['./src/**/*.html', './dist/rev/**/*.json'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist/html'))
})

gulp.task('copylibs', () => {
  return gulp.src(['./src/libs/*.js'])
    .pipe(gulp.dest('./dist/libs'))
})

gulp.task('clear', del.bind(null, ['./dist/**/*'], {
  force: true
}))

gulp.task('default', (cb) => {
  sequence('clear', ['js', 'scss'], ['copyhtml', 'copylibs'])(cb)
  console.log('done.');
})
