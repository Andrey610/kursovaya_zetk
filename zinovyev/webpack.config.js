const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
              }

        ]
    },
    plugins: [
        new CopyWebpackPlugin([ {
            from: 'assets/js',
            to: 'assets/js'
          },], {}),
        new VueLoaderPlugin(),
        new FaviconsWebpackPlugin('log.png'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
      
    ]
}