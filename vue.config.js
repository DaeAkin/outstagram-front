module.exports = {
    devServer: {
      proxy : {
        '/api': {
          target: 'http://localhost:5555',
          changeOrigin: true,
          logLevel : 'debug',
          pathRewrite: {
            '^/api': '/api'
          }
        },
        '/oauth': {
          target: 'http://localhost:5555',
          logLevel : 'debug',
          changeOrigin: true,
          pathRewrite: {
            '^/oauth': '/oauth'
          }
        }
    }
  }
}