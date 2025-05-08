import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { createArticleWatcher } from './plugins/article-watcher';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: '/',
    plugins: [
      // 使用 React 插件
      react(),
      // 使用 Tailwind CSS 插件
      tailwindcss(),
      // 使用自定义文章监视插件
      createArticleWatcher(),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      // 优化构建
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd,
        },
      },
      // 分割代码块以提高缓存效率
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            markdown: ['marked', 'marked-highlight', 'highlight.js'],
            ui: ['@fancyapps/ui'],
            utils: ['lodash', 'dayjs', 'dompurify'],
          },
        },
      },
      // 仅在开发环境生成源映射
      sourcemap: !isProd,
      // 提高代码块加载性能
      chunkSizeWarningLimit: 1000,
    },
    server: {
      host: '0.0.0.0', // 监听所有网络接口
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 优化依赖
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'marked', 'highlight.js', 'lodash', 'dayjs', 'dompurify'],
    },
  };
});
