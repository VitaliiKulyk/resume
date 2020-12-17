module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
};
