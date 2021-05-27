const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      // '/': 'http://localhost:3000',
      // '/homepage': 'http://localhost:3000',
      // '/login': 'http://localhost:3000',
      '*': 'http://[::1]:3000',
      secure: false,
      changeOrigin: true,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
