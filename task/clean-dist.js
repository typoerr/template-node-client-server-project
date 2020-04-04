const path = require('path')
const del = require('del')

const target = path.resolve(__dirname, '../dist/*')

module.exports = function clean(done) {
  return del([target], done)
}
