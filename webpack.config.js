module.exports = {
  devServer: {
    contentBase: `${__dirname}/src/main/public`,
    historyApiFallback: true,
    port: 8081,
    proxy: {
      '/rest': 'http://localhost:8080'
    }
  },
  entry: `${__dirname}/src/main/frontend/index.jsx`,
  output: {
    path: `${__dirname}/src/main/public/js`,
    publicPath: '/js',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
