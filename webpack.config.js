const path = require('path');
const webpack = require('webpack');

const sourceFilelFolder = 'app';
const SRC_FOLDER = path.resolve(__dirname, sourceFilelFolder);

module.exports = {
  entry: {
    vendors: ['react', 'react-dom', 'react-redux', 'redux'],
    components: ['ag-grid', 'ag-grid-react', 'react-draggable-tab'],
    app: ['./' + sourceFilelFolder + '/index.js']
  },
  output: {
    path: 'dist',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    inline: true,
    hot: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_FOLDER,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        include: SRC_FOLDER,
        loader: 'file?name=[name].html'
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    alias: {
      'ag-grid-root': __dirname + '/node_modules/ag-grid',
      // To ensure only this version of react will be loaded,
      // When multiple versions are loaded there is an anoying issue: invariant.js:38Uncaught Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs.
      react: __dirname + '/node_modules/react'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['components', 'vendors'], filename: '[name].js'
    })
  ]
};
