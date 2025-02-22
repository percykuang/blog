import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { createArticleWatcher } from './plugins/article-watcher';

export default defineConfig({
  base: '/blog/',
  plugins: [react(), tailwindcss(), createArticleWatcher()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0', // 监听所有网络接口
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
