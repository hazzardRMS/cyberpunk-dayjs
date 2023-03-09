const { dirname } = require('path')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist'),
            // watchContentBase: true,
            // hot: true,
            // publicPath: '/dist/'
        }
    },
    entry:{
        index: './src/index.js'
    },
    mode: 'production',
    module:{
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    output:{
        // path: path.resolve(__dirname, 'js'),
        filename: 'bundle.min.js'
    }
}