const merge = require("webpack-merge");
const common = require("./webpack.common");
const {join} = require("path");
const {HotModuleReplacementPlugin} = require("webpack");

module.exports = merge(common, {
  mode: "development",
  entry: join(__dirname,"../src/index.js"),
  devtool: "cheap-eval-source-map",
  devServer:{
    contentBase: join(__dirname,"../dist"),
    compress: true,
    hot: true,
    open: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  plugins:[
    new HotModuleReplacementPlugin()
  ]
})