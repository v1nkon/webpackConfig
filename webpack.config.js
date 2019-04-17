var path = require('path');
const resolve = path.resolve
const uglify = require('uglifyjs-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // main2: './src/test2.js'
  },
  devtool: 'sourcemap',
  // devtool: "cheap-module-eval-source-map",
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',//'app.bundle.js'
    // publicPath: '/build/',
  },
  module:{
    rules:[
      {
        test: /\.(htm|html)$/i,
        use:[ 'html-withimg-loader'] 
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use:{
          loader: 'babel-loader'
        }
        // loader: 'babel-loader',
        // options:{
        //   presets:[
        //     'react', 'es2015',
        //   ]
        // }
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader:'css-loader'},
            {loader:'postcss-loader'},
          ]
        })
        // use: [
        //   {loader: "style-loader"},
        //   {loader: "css-loader"},
        // ]
      },
       //less loader
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        }),
        // use: [{
        //     loader: "style-loader" // creates style nodes from JS strings
        //   }, 
        //   {
        //       loader: "css-loader" // translates CSS into CommonJS
        //   },
        //   {
        //       loader: "less-loader" // compiles sass to CSS
        //   }]
      },
      { 
        test: /\.scss/,
        use: extractTextPlugin.extract({
          use:[
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|svg|jpeg)/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit: 500,
              outputPath: 'images/'
            }
          }
        ]

      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    host: 'localhost',
    // compress: true,
    port :8888,
    open:true
    // proxy: {  //跨域配置
    //     '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '^/api' : ''
    //     }
    //   }
    // }

  },
  resolve: {
    extensions: ['.js', '.json'],
    // 配置项目文件别名
    alias: {
      '@': resolve('src'),
      assets: resolve('src/common/assets'),
      utils: resolve('src/common/utils'),
      layout: resolve('src/layout'),
      build: resolve('build')
    }
  },
  plugins: [
    // new uglify(),
    new htmlWebpackPlugin({
      minify:{
        removeAttributeQuotes: true
      },
      hash: true,
      template: './index.html'
    }),
    new extractTextPlugin("css/index.css")
  ]
}