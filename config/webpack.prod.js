const merge = require("webpack-merge");
const common = require("./webpack.common");
const {join} = require("path");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: join(__dirname,"../src/index.js"),
    vendors : ["react","react-dom","react-router-dom"]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})