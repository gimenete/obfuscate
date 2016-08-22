const path = require('path')
const browserify = require('browserify')
const bundler = browserify({ debug: true })

bundler
  .add('main.js')
  .transform('babelify', { presets: ['es2015'] })
  .transform('envify', { NODE_ENV: 'chrome' })
  .plugin('minifyify', {
    uglify: {
      mangle: {
        toplevel: true
      }
    }
  })
  .bundle((err, src, map) => {
    console.log(src.toString('utf8'))
  })
