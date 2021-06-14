import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'
const path = require('path')

const servers = {
  test: 'http://127.0.0.1:8081', // 测试环境
  prod: 'http://127.0.0.1:8081', // 正式环境
}
const proxyTarget = process.env.npm_config_api || 'test'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    eslint({
      fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    port: '8080',
    proxy: {
      '/api': {
        target: servers[proxyTarget],
        changeOrigin: true,
        pathRewrite: {
          '/api': servers[proxyTarget],
        },
      },
    },
  },
})
