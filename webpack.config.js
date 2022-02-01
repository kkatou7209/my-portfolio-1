const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',

  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx']
  },

  target: ['web', 'es5'],

  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react' ],
            plugins: ['@babel/plugin-syntax-jsx'],
          }
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ]
}
