const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MpPlugin = require('mp-webpack-plugin')

const isOptimize = true // 是否压缩业务代码，开发者工具可能无法完美支持业务代码使用到的 es 特性，建议自己做代码压缩

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../src/main.mp.jsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist/mp/common'), // 放到小程序代码目录中的 common 目录下
        filename: '[name].js', // 必需字段，不能修改
        library: 'createApp', // 必需字段，不能修改
        libraryExport: 'default', // 必需字段，不能修改
        libraryTarget: 'window', // 必需字段，不能修改
    },
    target: 'web', // 必需字段，不能修改
    optimization: {
        runtimeChunk: false, // 必需字段，不能修改
        splitChunks: { // 代码分隔配置，不建议修改
            chunks: 'all',
            minSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 100,
            maxInitialRequests: 100,
            automaticNameDelimiter: '~',
            name: false,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },

        minimizer: isOptimize ? [
            // 压缩CSS
            new CssMinimizerPlugin({
                test: /\.(css|wxss)$/g,
                minimizerOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true,
                        },
                        minifySelectors: false, // 因为 wxss 编译器不支持 .some>:first-child 这样格式的代码，所以暂时禁掉这个
                    }],
                },
            }),
            // 压缩 js
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
            })
        ] : [],
    },
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
                name: '[name].[ext]?[contenthash]',
            },
        }]
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.json'],
        alias: {
            react: isOptimize ? 'react/index.js' : 'react/umd/react.development.js',
            'react-dom': isOptimize ? 'react-dom/index.js' : 'react-dom/umd/react-dom.development.js',
            // react: isOptimize ? path.resolve('./node_modules/react/index.js') : path.resolve('./node_modules/react/umd/react.development.js'),
            // 'react-dom': isOptimize ? path.resolve('./node_modules/react-dom/index.js') : path.resolve('./node_modules/react-dom/umd/react-dom.development.js'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.isMiniprogram': process.env.isMiniprogram, // 注入环境变量，用于业务代码判断
        }),
        new MiniCssExtractPlugin({
            filename: '[name].wxss',
        }),
        new MpPlugin(require('./miniprogram.config'))
    ],
    stats: {
        errorDetails: true
    }
}
