const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 4000,
    publicPath: 'http://localhost:4000/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
