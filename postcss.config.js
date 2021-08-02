module.exports = {
  plugins: [
    // 添加浏览器兼容前缀
    require('autoprefixer'),

    // 添加px自动转rem，PC端可以直接删掉这个东西↓
    // 更多配置：https://github.com/cuth/postcss-pxtorem
    require('postcss-pxtorem')({
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
      minPixelValue: 3,
    }),
  ],
}
