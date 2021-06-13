import { defineAsyncComponent } from 'vue'
export default {
  install: (app) => {
    // ↓自动注册全局组件↓
    const components = import.meta.glob('./*.vue')
    for (const path in components) {
      app.component(
        path.match(/\.\/(.+?)\.vue/)[1],
        defineAsyncComponent(components[path])
      )
    }
    // ↑自动注册全局组件↑
  },
}
