exports['build:client'] = require('./task/build-clinet').build
exports['watch:client'] = require('./task/build-clinet').watch
exports['build:server'] = require('./task/build-server').build
exports['watch:server'] = require('./task/build-server').watch
exports.clean = require('./task/clean-dist')
