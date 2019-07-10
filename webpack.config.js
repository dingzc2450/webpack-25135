const htmlPulgin=require('html-webpack-plugin');
const extractPlugin=require('mini-css-extract-plugin');
const path=require('path');
const env = process.env.NODE_ENV;
const dev = process.env.DOOLS;
module.exports={
devServer:{
    port:'9090'
},
entry:{
    main:'./src/index.js'
},
plugins:[
    new htmlPulgin({
        template:'./src/index.tplt.html',
        favicon:'./favicon.ico',
        title:'test-25135'
    }),
    new extractPlugin({
        filename:'./src/index.[hash:8].css'
    })
    
],
output:{
    filename:'index.[hash:8].js',
    path:path.resolve('./dist'),
},
mode:env,
devtool:dev,
module:{
    rules:[
        {
            test:/.css$/,
            use:[
                extractPlugin.loader,
                'css-loader',
            ]
        },
        {
            test:/.js$/,
            exclude:path.resolve('node_modules'),
            loader:'babel-loader',
            options:{
                presets:['env'],
                plugins:['syntax-dynamic-import']
            }
        },
        { 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
            loader: 'url-loader',
            options:{
                limit:1800,
                name:'images/[hash:8].[name].[ext]'
            }
        },
        { 
            test: /\.png$/,
            loader: "file-loader?name=images/[hash:8].[name].[ext]"
        }
        ],
    
}   
}