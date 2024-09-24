const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", // Entry point for your JS files
  },
  output: {
    filename: "js/[name].min.js", // Output JS files to build/js/
    path: path.resolve(__dirname, "build"),
    clean: true, // Clean the build folder before each build
  },
  module: {
    rules: [
      // JS Loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // CSS Loader
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // File Loader for Fonts and Images
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]", // Output to build/assets/
        },
      },
    ],
  },
  plugins: [
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css", // Output CSS files to build/css/
    }),
    // Copy static assets
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/index.html", to: "" }, // Copy index.html to build/
        { from: "assets", to: "assets" }, // Copy assets/ to build/assets/
      ],
    }),
    // Provide jQuery and Popper.js globally
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ["@popperjs/core", "createPopper"],
    }),
  ],
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin(), // Minify JS
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 3000,
    // open: true,
    hot: true,
  },
  mode: "development", // Use 'development' for development builds
};
