import { join } from 'node:path';
import type { Plugin } from 'vite';

import { generateArticleList } from './utils';

export function createArticleWatcher(): Plugin {
  return {
    name: 'vite-plugin-article-watcher',

    configureServer(server) {
      // 初始生成文章列表
      generateArticleList();

      // 监听 articles 目录的变化
      const articlesPath = join(process.cwd(), 'articles');
      server.watcher.add(articlesPath);
      server.watcher.on('add', (path) => {
        if (path.includes('/articles/') && path.endsWith('.md')) {
          generateArticleList();
        }
      });
      server.watcher.on('unlink', (path) => {
        if (path.includes('/articles/') && path.endsWith('.md')) {
          generateArticleList();
        }
      });
    },
    buildStart() {
      // 在构建开始时生成文章列表
      generateArticleList();
    },
  };
}
