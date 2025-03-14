import { useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import { useParams } from 'react-router-dom';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import dayjs from 'dayjs';
import DOMPurify from 'dompurify';
import 'highlight.js/styles/github.css';
import { Tokens, marked } from 'marked';

import articleList from '@/articles.json';
import { ArticleOutline, NotFound } from '@/components';
import { MARKED_CONFIG, MARKED_HIGHLIGHT_CONFIG, MARKED_RENDERER_CONFIG } from '@/config';
import type { Article } from '@/types';

// 配置高亮
marked.use(MARKED_HIGHLIGHT_CONFIG);

const Detail: FC = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (!params.id) {
      setIsLoading(false);
      return;
    }

    const record = articleList.find((item) => item.id === params.id);
    setArticle(record);
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    if (article) {
      Fancybox.destroy();

      Fancybox.bind(document.body, '[data-fancybox="gallery"]', {
        compact: false,
        idle: false,
        wheel: 'zoom',
        dragToClose: false,
        contentClick: 'iterateZoom',
        Hash: false,
        Images: {
          zoom: true,
          Panzoom: {
            maxScale: 5,
          },
        },
        Toolbar: {
          enabled: true,
          display: {
            left: ['infobar'],
            middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW', 'flipX', 'flipY'],
            right: ['slideshow', 'thumbs', 'close'],
          },
        },
      });

      return () => {
        Fancybox.destroy();
      };
    }
  }, [article]);

  const parseArticle = useMemo(() => {
    if (!article) return { content: '', headings: [] };

    // 先获取所有标题
    const tokens = marked.lexer(article.content);
    const headingTokens = tokens.filter(
      (token): token is Tokens.Heading => token.type === 'heading' && token.depth >= 2
    );

    // 用于存储标题和ID的映射
    const headingMap = new Map<string, string[]>();

    // 生成唯一ID的函数
    const generateId = (text: string) => {
      const baseId = text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-');
      const ids = headingMap.get(text) || [];
      const newId = ids.length === 0 ? baseId : `${baseId}-${ids.length}`;
      ids.push(newId);
      headingMap.set(text, ids);
      return newId;
    };

    // 预生成所有标题的ID
    const headings = headingTokens.map((token) => ({
      id: generateId(token.text),
      text: token.text,
      level: token.depth,
    }));

    // 重置ID计数器
    headingMap.clear();

    // 配置marked的renderer
    marked.use({
      ...MARKED_CONFIG,
      renderer: {
        ...MARKED_RENDERER_CONFIG,
        heading({ text, depth: level }) {
          const id = generateId(text);
          return `<h${level} id="${id}">${text}</h${level}>`;
        },
      },
    });

    // 渲染内容
    const content = DOMPurify.sanitize(marked.parse(article.content) as string);

    return {
      content,
      headings,
    };
  }, [article]);

  if (isLoading) {
    return null;
  }

  if (!article) {
    return <NotFound message="文章地址已改变，请回到主页重新浏览" />;
  }

  return (
    <div className="mt-10">
      <div className="relative">
        <ArticleOutline headings={parseArticle.headings} title={article.title} />
        <div className="max-w-192 mx-auto">
          <h1 id="article-title" className="my-6 text-3xl font-bold">
            {article.title}
          </h1>
          <div className="mb-4 text-xs text-stone-400">
            {`发布于 ${dayjs(article.date).format('YYYY.MM.DD')} | 字数 ${article.wordCount}`}
          </div>
          <article
            className="prose prose-stone lg:prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-blue-600 max-w-none !font-normal [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre_code]:!font-mono [&_pre_code]:!text-sm"
            dangerouslySetInnerHTML={{
              __html: parseArticle.content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
