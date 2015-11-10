var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: path.resolve('index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
        exclude: 'node_modules'
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader?presets[]=es2015' 
        ],
        include: path.resolve('index.js')
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
