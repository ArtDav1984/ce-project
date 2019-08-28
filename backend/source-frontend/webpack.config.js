var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'src/js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'stylus-loader'],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|ico)$/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=img/&publicPath=../img/',
          'image-webpack-loader',
        ],
      },
    ],
  },
  devServer: {
    headers: {'Access-Control-Allow-Origin': '*'},
    https: false,
    disableHostCheck: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'src/css/main.css',
    }),
    new CopyWebpackPlugin([{from: './src/img/*', to: 'src/img', flatten: true}], {}),
  ],
};
