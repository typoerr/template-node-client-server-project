const path = require('path')
const gulp = require('gulp')
const compiler = require('webpack')
const wstream = require('webpack-stream')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const base = path.resolve(__dirname, '../client')
const input = path.join(base, '**/*.+(ts|tsx)')
const output = path.join(base, '../dist/client')
const tsconfig = path.join(base, 'tsconfig.json')

const config = {
  mode: env,
  context: base,
  entry: './index.ts',
  output: {
    path: output,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(\/node_modules\/|\.test\.tsx?$)/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfig,
              compilerOptions: {
                module: 'esnext',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
    plugins: [new TSConfigPathsPlugin({ configFile: tsconfig })],
  },
  devtool: env === 'production' ? false : 'inline-cheap-source-map',
}

function build(opts) {
  return gulp
    .src(input)
    .pipe(wstream(Object.assign(config, opts), compiler))
    .pipe(gulp.dest(output))
}

exports.build = build
exports.watch = build.bind(null, { watch: true })
