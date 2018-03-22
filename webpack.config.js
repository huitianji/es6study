var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry:{
        //bundle:"./src/main.js"//以是一个数组['./entry.js','./entry2.js']
        bundle:[
            './src/main.js',
            './src/demo.js'
        ]
    },
    //entry:{
    //    bundle1:"./src/main.js",
    //    bundle2:"./src/a.js"
    //},
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        loaders:[

            {
                test:/\.js?$/,
                loader:'babel',
                exclude: /node_modules/,
                query: {
                    compact: false,
                    presets:['es2015']
                }
            }

        ]
    },
    plugins:[
        new webpack.BannerPlugin('//jht')
        //,  //前缀
        //new webpack.optimize.CommonsChunkPlugin('common.js')//通用的js
    ],
    resolve:{
        alias:{
            //jquery:"./lib/jquery/jquery.js"
        }
    }

}