// 这里只放一些全局变量

export default {
  install: (app, options) => {
    app.config.globalProperties.$test = 'test'
  },
}
