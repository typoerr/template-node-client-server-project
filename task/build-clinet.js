const gulp = require('gulp')
const compiler = require('webpack')
const wstream = require('webpack-stream')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const base = path.resolve(__dirname, '../client')

const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const tsConfig = path.resolve(__dirname, base, 'tsconfig.json')

const config = {
  mode: env,
  context: base,
  entry: './index.ts',
  output: {
    path: path.join(__dirname, 'dist/client'),
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
              configFile: tsConfig,
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
    plugins: [new TSConfigPathsPlugin({ configFile: tsConfig })],
  },
  devtool: env === 'production' ? false : 'inline-cheap-source-map',
}

function build(opts) {
  return gulp
    .src('./client/**/*.ts')
    .pipe(wstream(Object.assign(config, opts), compiler))
    .pipe(gulp.dest('./dist/client'))
}

exports.build = build
exports.watch = build.bind(null, { watch: true })
