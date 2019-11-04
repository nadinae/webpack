const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry:{
    app:'./src/app.js',
    index:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.[name].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist'
  }
}