// 1. npm init
// 2. npm install --save webpack webpack-dev-server babel-loader babel-preset-es2015
// 3. mkdir dist && touch index.html
// 4. Include `<script src="/bundle.js"></script>` inside index.html
// 5. mkdir src && touch src/index.js
// 6. Add some code to index.js (e.g. `console.log('Hello, World!'))
// 7. npm start
// 8. Browse to http://localhost:8080/dist/

const webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}