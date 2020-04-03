const del = require('del')

module.exports = function clean(done) {
  return del(['./dist/*'], done)
}
