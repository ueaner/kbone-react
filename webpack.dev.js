import { resolve, dirname } from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @returns {import('webpack').Configuration} Webpack Configuration */
export default {
  mode: "development",
  devServer: {
    port: 1421,
    host: "0.0.0.0",
    hot: true,
  },
  devtool: "source-map",

  entry: {
    index: resolve(__dirname, "./src/main.tsx"),
  },
  output: {
    path: resolve(__dirname, "./dist/web"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "web",

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: resolve(__dirname, "./index.html"),
    }),
  ],

  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@/lib": resolve(__dirname, "./src/lib"),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     importLoaders: 1,
          //     // CSS modules 默认启用, 不需要再专门配置
          //     // https://github.com/webpack-contrib/css-loader#modules
          //     // Default: undefined - enable CSS modules for /\.module\.\w+$/i
          //     modules: {
          //       localIdentName: "[name]__[local]--[hash:5]",
          //     },
          //   },
          // },
          // postcss config 使用 .json 文件, mjs 加载不了
          "postcss-loader",
        ],
      },
      {
        test: /\.[t|j]sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
};
