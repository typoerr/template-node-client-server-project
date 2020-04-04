const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')

const base = path.resolve(__dirname, '../server')
const input = path.join(base, '**/*.+(ts|tsx)')
const output = path.join(base, '../dist/server')
const ignore = path.join(base, '**/*.test.ts')
const config = path.join(base, 'tsconfig.json')
const project = ts.createProject(config)

function build() {
  return gulp
    .src(input) //
    .pipe(project())
    .pipe(gulp.dest(output))
}

function watch(done) {
  return nodemon({
    exec: `ts-node -r tsconfig-paths/register ${base}/index.ts`,
    watch: [input],
    ext: 'ts',
    ignore: [ignore],
    done,
  })
}

exports.build = build
exports.watch = watch
