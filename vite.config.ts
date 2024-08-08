import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import vuesetupExtend from 'vite-plugin-vue-setup-extend';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VitePerfectConsolePlugin from 'vite-perfect-console-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuesetupExtend(),
    VitePerfectConsolePlugin({ tip: '🐷🐷🐷🐷🐷🐷' }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    proxy: {
      '/demo': {
        target: 'https://chatgpt.com/', // 替换为你的后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/demo/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
