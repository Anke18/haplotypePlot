/*
 * @Descripttion: 
 * @version: 
 * @Author: Mengwei Li
 * @Date: 2020-04-02 09:47:39
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-08-04 15:55:05
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "none",
    entry: {
        index: "./src/index.js",
        index0: "./src/index0.js",
        index1: "./src/index1.js",
        index01: "./src/index01.js",
        index05: "./src/index05.js",
        index6: "./src/index6.js",
        index7: "./src/index7.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        // new UglifyJsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           // hash: true,
            template: "./src/index.html",
            filename: 'index.html' ,
            chunks: ['index'],
            minify: {
                minimize: true,
                removeConments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,

            }
        }),
        new HtmlWebpackPlugin({
          //  hash: true,
           // title: 'My Awesome application',
          //  myPageHeader: 'Settings',
            template: './src/index0.html',
            chunks: ['index0'],
            filename: 'index0.html' ,
            minify: {
                minimize: true,
                removeConments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        }),
        new HtmlWebpackPlugin({
            //  hash: true,
             // title: 'My Awesome application',
            //  myPageHeader: 'Settings',
              template: './src/index1.html',
              chunks: ['index1'],
              filename: 'index1.html' ,
              minify: {
                  minimize: true,
                  removeConments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
              }
          }),
          new HtmlWebpackPlugin({
            //  hash: true,
             // title: 'My Awesome application',
            //  myPageHeader: 'Settings',
              template: './src/index01.html',
              chunks: ['index01'],
              filename: 'index01.html' ,
              minify: {
                  minimize: true,
                  removeConments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
              }
          }),
          new HtmlWebpackPlugin({
            //  hash: true,
             // title: 'My Awesome application',
            //  myPageHeader: 'Settings',
              template: './src/index05.html',
              chunks: ['index05'],
              filename: 'index05.html' ,
              minify: {
                  minimize: true,
                  removeConments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
              }
          }),
          new HtmlWebpackPlugin({
            //  hash: true,
             // title: 'My Awesome application',
            //  myPageHeader: 'Settings',
              template: './src/index6.html',
              chunks: ['index6'],
              filename: 'index6.html' ,
              minify: {
                  minimize: true,
                  removeConments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
              }
          }),
          new HtmlWebpackPlugin({
            //  hash: true,
             // title: 'My Awesome application',
            //  myPageHeader: 'Settings',
              template: './src/index7.html',
              chunks: ['index7'],
              filename: 'index7.html' ,
              minify: {
                  minimize: true,
                  removeConments: true,
                  collapseWhitespace: true,
                  minifyCSS: true,
                  minifyJS: true,
              }
          }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,  // 用正则去匹配要用该 loader 转换的 CSS 文件
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}