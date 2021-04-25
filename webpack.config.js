const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    js: './src/index.js',
    ts: './src/index_ts.js',
    react: './src/index_react.js'
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ['file-loader?name=assets/[name].[ext]', 'image-webpack-loader']
      },
      {
        test: /\.(woff|ttf)$/i,
        use: ['file-loader?name=assets/[name].[ext]']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['js'],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './react.html',
      chunks: ['react'],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './ts.html',
      chunks: ['ts'],
      hash: true
    }),
    new MiniCssExtractPlugin()
  ]
};
