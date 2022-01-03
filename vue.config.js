module.exports = {
  configureWebpack: {
    devServer: {
      proxy: 'http://localhost:8000/',
      proxy:'http://localhost:8001/'
    }
  }
}