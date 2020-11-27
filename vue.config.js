const path = require('path')
module.exports = {
//   配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('_c', path.resolve('src/components'))
  },
  devServer: {
    open: true // 配置自动启动浏览器
  }
}
