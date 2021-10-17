/**
 * 配置方式一：CLI提供的属性
 * 配置方式二：和webpack属性完全一致，最后会进行合并
 * 配置方式三：链式调用。chainWebpack
 */

const path = require('path')

module.exports = {
  outputDir: './build',
  // 方式一
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // 方式二
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
  // 方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  // }
}
