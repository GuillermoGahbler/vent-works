const {join} = require("path");
const htmlWebPack = require("html-webpack-plugin");

module.exports = {
  output:{
   path: join(__dirname, "../dist"),
   filename: "[name].bundle.js",
  },
  plugins: [
    new htmlWebPack({
      template: join(__dirname,"../src/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ],
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        include: join(__dirname,"../src"),
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"}
        ]
      },
      {
        test: /\.js$/,
        include: join(__dirname,"../src"),
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"}
        ]
      },
      {
        test: /\.css$/,
        include: join(__dirname,"../src"),
        exclude: /node_modules/,
        use: [
          {loader: "style-loader"},
          {loader:"css-loader"}
        ]
      },
      {
        test: /\.(png|svg|svg|gif)/,
        include: join(__dirname,"../src"),
        exclude: /node_modules/,
        use: [
          {loader: "file-loader"},
        ]
      }
    ]
  },
  resolve:{
    extensions: [".js",".jsx"]
  }
}