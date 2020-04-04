const gulp = require('gulp')

const client = require('./task/build-clinet')
const server = require('./task/build-server')
const clean = require('./task/clean-dist')

exports['build:client'] = client.build
exports['watch:client'] = client.watch
exports['build:server'] = server.build
exports['watch:server'] = server.watch
exports['clean'] = clean
exports['build'] = gulp.parallel(client.build, server.build)
exports['watch'] = gulp.parallel(client.watch, server.watch)
