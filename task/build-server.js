const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')

const base = path.resolve(__dirname, '../server')

const project = ts.createProject('../server/tsconfig')

function build() {
  return gulp
    .src('./server/**/*.ts') //
    .pipe(project())
    .pipe(gulp.dest('./dist/server'))
}

function watch(done) {
  return nodemon({
    exec: `ts-node -r tsconfig-paths/register ${base}/index.ts`,
    watch: ['./server/**/*.ts'],
    ext: 'ts',
    ignore: ['./server/**/*.test.ts'],
    done,
  })
}

exports.build = build
exports.watch = watch
