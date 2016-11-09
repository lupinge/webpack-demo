var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //页面入口文件配置
    entry: {
        index: './app/main.js'
    },
    //入口文件输出配置
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};