import { resolve, dirname } from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        use: ["postcss-loader"],
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
