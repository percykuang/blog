import { useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import { useParams } from 'react-router-dom';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import dayjs from 'dayjs';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github.css';
import { Tokens, marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import articleList from '@/articles.json';
import { ArticleOutline, NotFound } from '@/components';
import type { Article } from '@/types';
import { tagPurify } from '@/utils';

// 配置 marked
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    code(code: Tokens.Code, language?: string) {
      const validLanguage = hljs.getLanguage(language || '') ? language : 'plaintext';

      return `
        <div class="relative group">
          <button
            class="hover:cursor-pointer
            absolute right-2 top-2 opacity-0
            group-hover:opacity-100 transition-opacity
            duration-200 px-2 py-1 rounded text-sm
            bg-white/10 hover:bg-white/20 text-gray-400
            hover:text-gray-300"
            onclick="(function(btn){
              const code = btn.parentElement.querySelector('code').textContent;
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                  btn.textContent = '复制成功！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                });
              } else {
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                  document.execCommand('copy');
                  btn.textContent = '复制成功！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                } catch (error) {
                  console.error('Copy failed', error);
                  btn.textContent = '复制失败！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                } finally {
                  textArea.remove();
                }
              }
            })(this)">
            复制
          </button><pre><code class="hljs language-${validLanguage}">${code.text}</code></pre>
        </div>`;
    },
    codespan({ text }) {
      const escaped = tagPurify(text);
      return `<code class="inline-code">${escaped}</code>`;
    },
    html({ text }) {
      return tagPurify(text);
    },
    image({ href, title, text }) {
      if (href?.match(/\.(mp4|webm|ogg)$/i)) {
        return `
          <a 
            href="${href}" 
            data-fancybox="gallery"
            data-type="video"
          >
            <video class="w-full rounded-lg">
              <source src="${href}" type="video/${href.split('.').pop()}" />
            </video>
          </a>
        `;
      }
      return `
        <a 
          href="${href}" 
          data-fancybox="gallery"
        >
          <img 
            src="${href}" 
            alt="${text || ''}" 
            title="${title || ''}"
            class="cursor-zoom-in rounded-lg"
            loading="lazy"
          />
        </a>
      `;
    },
    link({ href, title, tokens }) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title}">${tokens?.[0]?.raw}</a>`;
    },
    heading({ text, depth }) {
      const id = text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-');
      return `<h${depth} id="${id}">${text}</h${depth}>`;
    },
  },
});

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

  const parsedContent = useMemo(() => {
    if (!article) return '';
    return DOMPurify.sanitize(marked.parse(article.content) as string);
  }, [article]);

  const parsedHeadings = useMemo(() => {
    if (!article) return [];
    const tokens = marked.lexer(article.content);
    return tokens
      .filter((token): token is Tokens.Heading => token.type === 'heading' && token.depth >= 2)
      .map((token) => ({
        id: token.text.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-'),
        text: token.text,
        level: token.depth,
      }));
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
        <ArticleOutline headings={parsedHeadings} title={article.title} />
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
              __html: parsedContent,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
