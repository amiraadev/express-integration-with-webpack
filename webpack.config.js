const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./dist"),
        publicPath:'./dist/'
    },
    mode:"none",
    module:{
        rules:[
            {
                    test:/\.(png|jpg)$/,
                    type:'asset/resource'
            },
            {
                    test:/\.css$/,
                    use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:"style.css"}),
        new HtmlWebpackPlugin({
            filename:"index.html",
            chunks:["index.js"],
            title:"Express integration with webpack",
            minify:false
        })
    ]
}