const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'style.css'}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};




// const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//
// module.exports = {
//     entry:{ main: './src/index.js' },
//     mode: 'development',
//     output:{
//         filename: 'main.js',                          //куда складывать рез-ти работы web-k
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: 'dist'
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             loader: 'babel-loader',
//             exclude: '/node_modules/'
//         },
//         //     {
//         //     test: /\.scss$/,
//         //     use: [
//         //         MiniCssExtractPlugin.loader,
//         //         'css-loader'
//         //     ]
//         // }
//         // { test: /\.ts$/, use: 'ts-loader' }
//             {
//                 test: /\.css$/,
//                 use: [
//                     // style-loader
//                     {loader: 'style-loader'},
//                     // css-loader
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true
//                         }
//                     },
//                     // sass-loader
//                     {loader: 'sass-loader'}
//                 ]
//             }
//         ]
//       },
//     devServer:{
//         overlay:true
//     },
//     plugins:[
//         new MiniCssExtractPlugin ({
//           filename: 'main.css'
//         })
//     ],
// }

