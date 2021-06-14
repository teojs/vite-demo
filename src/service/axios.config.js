import axios from 'axios'
// import { ElLoading, ElNotification } from 'element-plus'
// import Router from '@/router'
import store from '@/store'
import _ from 'lodash'

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.BASE_URL
axios.defaults.validateStatus = function(code) {
  return code >= 200 && status < 300
}
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }

    // 自动打开 loading
    // if (config.loading) {
    //   switch (typeof config.loading) {
    //     case 'string':
    //       config.loading = ElLoading.service({ text: config.loading })
    //       break
    //     case 'object':
    //       config.loading = ElLoading.service({ target: config.loading })
    //       break
    //     case 'undefined':
    //       break
    //     default:
    //       config.loading = ElLoading.service()
    //       break
    //   }
    // }
    // store.state.pendingApi += axios.apiName
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    store.state.pendingApi = store.state.pendingApi.replace(axios.apiName, '')
    response.config.loading && response.config.loading.close()

    if (_.inRange(response.status, 200, 299)) {
      if (response.config.responseType === 'blob') {
        if ('content-disposition' in response.headers) {
          return {
            code: '01',
            file: response.data,
            name: response.headers['content-disposition'].split('=')[1],
          }
        }
        return {
          code: '02',
          message: '无法获取文件',
        }
      } else {
        // token 过期的情况
        // const errorCode = ['04']
        // const currentPath = Router.currentRoute.path
        // if (
        //   errorCode.includes(response.data.code) &&
        //   currentPath !== '/login'
        // ) {
        //   const redirect = Router.currentRoute.fullPath
        //   localStorage.removeItem('token')
        //   Router.push({
        //     path: '/login',
        //     query: { redirect },
        //   })
        // }
        return response.data
      }
    }

    // ElNotification.error({
    //   title: `${response.statusText}(${response.status})`,
    //   message: response.config.url,
    // })
    return {
      code: response.status,
      message: response.statusText,
      body: null,
    }
  },
  error => {
    if ('config' in error) {
      store.state.pendingApi = store.state.pendingApi.replace(axios.apiName, '')
      error.config.loading.close()
      // ElNotification.error({
      //   title: '请求出错',
      //   message: `${error.message}`,
      // })
    }
    return {
      code: null,
      message: error.message,
      body: null,
    }
  }
)
export default axios
