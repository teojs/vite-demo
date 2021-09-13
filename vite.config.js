import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import autocreate from './plugin/autocreate'
import { visualizer } from 'rollup-plugin-visualizer'
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
      throwOnError: true,
      throwOnWarning: true,
    }),
    autocreate(),
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
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      // 生成代码分析
      plugins: [visualizer()],
    },
  },
})
