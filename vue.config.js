module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.221.132',
        target: 'shop.admin.com',
        ws: true,
        changeOrigin: true,
        // logLevel: 'debug',
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  }
}
