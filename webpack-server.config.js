const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.join(__dirname, './src/server');
const sourcePath = path.join(__dirname, './src/client');
const distPath = path.join(__dirname, './dist');

module.exports = {
  mode: 'development',
  target: 'node',
  // context: srcPath,
  entry: {
    server: './src/server/app.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: distPath,
    library: 'app',
    libraryTarget: 'commonjs2'
    // library parameter will expose our entry file’s exports to the “outside world.”
    // We are going to call our library name app. libraryTarget parameter defined how our library is exported to the outside world.
    // Since module.exports is a default in node environment, we are going to use the same. Set libraryTarget to commonjs2.
  },
  devtool: 'eval-source-map',
  externals: [nodeExternals()],
  node: {
    global: true,
    __dirname: false,
    __filename: false,
    process: true,
    Buffer: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?emitFile=false'
        // emitFile=false => We want our server application to not generate any asset for us. this is for NOT emitting the files.
      },
      {
        test: /\.css$/,
        use: ['css-loader/locals', 'css-loader']
        // css-loader/locals = We want our server application to not generate any asset for us. this is for NOT emitting the files.
      },
      // {
      //   test: /\.scss$/,
      //   exclude: [/src\/client\/(.*\/)?@(.*)?\/.*/],
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      // }
      {
        test: /\.(s*)css$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // CSS Loader https://github.com/webpack/css-loader
              // importLoaders: 1 means that it also applies CSS modules on @imported resources.
              importLoaders: 1,
              sourceMap: true,
              context: sourcePath,
              // CSS Modules https://github.com/css-modules/css-modules

              // // :global(in local scss files) switches to global scope for the current selector respective identifier. This is done to
              // replace the global styling for the current selector.
              modules: true,

              localIdentName: '[path]-[name]-[local]-[hash:base64:5]'
            }
          },
          'sass-loader'
        ],
        include: [/src\/client\/(.*\/)?@(.*)?\/.*/]
      },
      // {
      //   test: /\.scss$/,
      //   exclude: [/src\/client\/(.*\/)?@(.*)?\/.*/],
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      // }
      {
        test: /\.scss$/,
        exclude: [/src\/client\/styles/, /src\/client\/(.*\/)?@(.*)?\/.*/],
        loader: ['css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.jsx'],
    modules: [srcPath, 'node_modules']
  }
};
