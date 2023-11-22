import { resolve, dirname } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'production',
    entry: {
        index: resolve(__dirname, '../src/main.jsx'),
    },
    output: {
        path: resolve(__dirname, '../dist/web'),
        publicPath: './',
        filename: '[name].js'
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        }, {
            test: /\.[t|j]sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]',
            },
        }],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: resolve(__dirname, '../index.html'),
        }),
    ],
};
