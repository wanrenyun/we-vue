const postimport = require('postcss-import')
const posturl = require('postcss-url')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = ctx => ({
  plugins: [
    postimport(),
    posturl(),
    autoprefixer({}),
    mqpacker(),
  ],
})
