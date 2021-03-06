import axios from './axios.config'
import _ from 'lodash'
const request = function(api) {
  return ctx => {
    ctx = {
      success() {},
      fail() {},
      error() {},
      ...ctx,
    }
    return api.bind(this)(ctx)
  }
}

// 自动注册/src/service/apis的所以接口
const apis = {}
const allApis = import.meta.globEager('./apis/**/*.js')
for (const key in allApis) {
  const path = key.match(/\.\/apis\/(.+?)\.js/)[1].replace(/\//g, '.')
  _.set(apis, path, request.bind(apis)(allApis[key].default, path))
}
// 自动注册/src/service/apis的所以接口

apis.$http = axios
apis.$api = apis

export default {
  install: app => {
    app.config.globalProperties.$api = apis
  },
}
