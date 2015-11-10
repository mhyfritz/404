var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.js',
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
        ]
      }         
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })  
  ]
};
