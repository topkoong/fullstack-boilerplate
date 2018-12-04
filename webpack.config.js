module.exports = {
  // the starting point for our program
  entry: ['babel-polyfill', './client/index.js'],

  // affects several default webpack settings
  mode: 'development',

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,

  // Creates "source map" files (ex. "bundle.js.map"). Modern browsers can automatically
  // request these to "rebuild" your original source code in your dev tools (i.e. the Sources tab).
  // This makes debugging much, much nicer
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
