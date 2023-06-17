const path = require("path");

module.exports={
    mode: "development",
    //entry:"./src/app.js",
    entry:"./src/playground/redux-101.js",
    output:{
        path:path.join(__dirname, 'public'),
        filename:"bundled.js"
    },    
    module:{
        rules:[{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        // {
        //     test:/\.scss$/,
        //     use:[
        //         'style-loader',
        //          'css-loader',
        //          'sass-loader'
        //     ]
        // }
    ]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        static: {
            directory: path.join(__dirname, 'public')
          },
        historyApiFallback: true,
    }
}

console.log(path.join(__dirname, 'public'));