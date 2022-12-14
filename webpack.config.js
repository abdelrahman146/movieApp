const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const webpackConfig = (env, { mode }) => {
  const plugins = [
    new Dotenv({
      systemvars: true,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ];

  if (mode === "development") {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(process.cwd(), "build"),
      filename: "[name].[chunkhash].js",
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    plugins,
  };
};

module.exports = webpackConfig;
