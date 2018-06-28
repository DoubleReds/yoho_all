/**
  gulp完成的任务：
  1、启动webserver
  2、编译sass, less
  3、CommonJS模块化
  4、Mock数据
  5、在Gulp里应用babel
 */

const gulp = require('gulp')

const server = require('gulp-webserver')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel = require('gulp-babel')

const watch = require('gulp-watch')
// require("babel-core").transform("code", {
//   plugins: ["transform-runtime"]
// });

gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(server({
      host: '127.0.0.1',
      port: 8888,
      livereload: true,
      directoryListing: {
        enable: true,
        path: './dev'
      },
      middleware: [
        proxy('/api', {
          "target": 'https://m.yohobuy.com/guang/guang-new/more',
          "changeOrigin": true,
          "pathRewrite": {
            "^/api": ''
          }
        }),
        proxy('/lianjia', {
          target: 'https://bj.lianjia.com',
          changeOrigin: true,
          pathRewrite: {
            '^/lianjia': ''
          }
        }),
        proxy('/backend', {
          target: 'http://localhost:3000',
          changeOrigin: true
        })
      ]
    }))
})

gulp.task('scss', () => {
  return gulp.src('./src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/style'))
})


gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    // .pipe(babel({
    //     presets: ['env'],
    //     plugins: [["transform-runtime", {
    //         "polyfill": false,
    //         "regenerator": true
    //     }]]
    // }))
    .pipe(webpack({
      entry: {
        app: './src/scripts/app.js',
      },
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          { test: /\.html$/, loader: 'string-loader' },
        ],
      }
    }))
    // .pipe(babel({
    //   presets: ['env', 'stage-0']
    // }))
    .pipe(gulp.dest('./dev/scripts'))
})

gulp.task('copyhtml', () => {
  return gulp.src(['./*.html'])
    .pipe(gulp.dest('./dev'))
})

gulp.task('copylibs', () => {
  return gulp.src(['./src/libs/*.js'])
    .pipe(gulp.dest('./dev/libs'))
})

gulp.task('copyicon', () => {
  return gulp.src(['./src/iconfonts/**/*'])
    .pipe(gulp.dest('./dev/iconfonts'))
})
gulp.task('copyimages', () => {
  return gulp.src(['./src/images/**/*'])
    .pipe(gulp.dest('./dev/images'))
})
gulp.task('watch', () => {
  gulp.watch('./*.html', ['copyhtml'])
  gulp.watch('./src/styles/**/*', ['scss'])
  gulp.watch('./src/scripts/**/*', ['js'])
})

gulp.task('default', ['js', 'scss', 'copyhtml', 'copylibs', 'copyicon', 'copyimages', 'server', 'watch'], () => {
  console.log('done.');
})
